# Data model

To do

At this point any ASF_DATA is read into a metadata dictionary made available in every page.

- The [asfdata plugin](./asfdata.py) reads an .asfdata.yaml file and creates the metadata dictionary.

```python
ASF_DATA_YAML = "asfdata.yaml"
ASF_DATA = {
    'data': ASF_DATA_YAML,
    'metadata': { },
    'debug': False
}
```

## Key Value Metadata

```yaml
# key-value pairs
code_lines: 227M
code_changed: 4.2B
code_commits: 4.1M
asf_members: 820
# For use as nnn+ or 'more than nnn'
asf_members_rounded: 800
asf_committers: 8,100
asf_contributors: 40,000
asf_people: 488,000
com_initiatives: 350
com_projects: 300
com_podlings: 37
com_downloads: ~2 Petabytes
com_emails: 24M
com_mailinglists: 1,400
com_pageviews: 35M
```

## Recent Tweets

```yaml
# used on index.ezmd
twitter:
  # load, transform, and create a sequence of tweets
  handle: 'TheASF'
  count: 1
```

```python
# retrieve the last count recent tweets from the handle.
def process_twitter(handle, count):
    print(f'-----\ntwitter feed: {handle}')
    bearer_token = twitter_auth()
    query = f'from:{handle}'
    tweet_fields = 'tweet.fields=author_id'
    url = f'https://api.twitter.com/2/tweets/search/recent?query={query}&{tweet_fields}'
    headers = {'Authorization': f'Bearer {bearer_token}'}
    load = connect_to_endpoint(url, headers)
    reference = sequence_list('twitter', load['data'])
    if load['meta']['result_count'] < count:
        v = reference
    else:
        v = reference[:count]
    return v
```

## Recent Blog Posts

```yaml
# used on index.ezmd
foundation:
  # load, transform, and create a sequence of foundation blogs
  blog: https://blogs.apache.org/foundation/feed/entries/atom
  count: 1
```

```python
# retrieve blog posts from an Atom feed.
def process_blog(feed, count, debug):
    print(f'blog feed: {feed}')
    content = requests.get(feed).text
    dom = xml.dom.minidom.parseString(content)
    # dive into the dom to get 'entry' elements
    entries = dom.getElementsByTagName('entry')
    # we only want count many from the beginning
    entries = entries[:count]
    v = [ ]
    for entry in entries:
        if debug:
            print(entry.tagName)
        # we only want the title and href
        v.append(
            {
                'id': get_element_text(entry, 'id'),
                'title': get_element_text(entry, 'title'),
            }
        )
    if debug:
        for s in v:
            print(s)

    return [ Blog(href=s['id'],
                  title=s['title'])
             for s in v ]
```

## ECCN Data Sequences

```yaml
# used on licenses/exports/index.ezmd
eccn:
  # load, transform, and create a four tiered structure of sequence objects
  # projects, products, versions, and sources
  file: data/eccn/eccnmatrix.yaml
```

```python
# create sequence of sequences of ASF ECCN data.
def process_eccn(fname):
    print('-----\nECCN:', fname)
    j = yaml.safe_load(open(fname))

    # versions have zero or more controlled sources
    def make_sources(sources):
        return [ Source(href=s['href'],
                        manufacturer=s['manufacturer'],
                        why=s['why'])
                 for s in sources ]

    # products have one or more versions
    def make_versions(vsns):
        return [ Version(version=v['version'],
                         eccn=v['eccn'],
                         source=make_sources(v.get('source', [ ])),
                         )
                 for v in sorted(vsns,
                                 key=operator.itemgetter('version')) ]

    # projects have one or more products
    def make_products(prods):
        return [ Product(name=p['name'],
                         versions=make_versions(p['versions']),
                         )
                 for p in sorted(prods,
                                 key=operator.itemgetter('name')) ]

    # eccn matrix has one or more projects
    return [ Project(name=proj['name'],
                     href=proj['href'],
                     contact=proj['contact'],
                     product=make_products(proj['product']))
             for proj in sorted(j['eccnmatrix'],
                                key=operator.itemgetter('name')) ]


# object wrappers
class wrapper:
    def __init__(self, **kw):
        vars(self).update(kw)

# Improve the names when failures occur.
class Source(wrapper): pass
class Version(wrapper): pass
class Product(wrapper): pass
class Project(wrapper): pass
class Blog(wrapper): pass
```


## Committee Info

### Board of Directors

```yaml
ci:
  # load, transform, and create data sequences from committee info 
  url: https://whimsy.apache.org/public/committee-info.json
  board:
    # used on /foundation/ and /foundation/board/
    description: 'Board of Directors sequence'
    # select ci['board']['roster'] for the sequence
    path: board.roster
```

```json
  "board": {
    "roster": {
      "bdelacretaz": {
        "name": "Bertrand Delacretaz"
      },
      "fielding": {
        "name": "Roy T. Fielding"
      },
      "sharan": {
        "name": "Sharan Foga"
      },
      "jmclean": {
        "name": "Justin Mclean"
      },
      "rubys": {
        "name": "Sam Ruby"
      },
      "clr": {
        "name": "Craig L Russell"
      },
      "rvs": {
        "name": "Roman Shaposhnik"
      },
      "striker": {
        "name": "Sander Striker"
      },
      "wusheng": {
        "name": "Sheng Wu"
      }
    }
  }
```

```python
    # select sub dictionary
    if 'path' in sequence:
        print(f'path: {sequence["path"]}')
        parts = sequence['path'].split('.')
        for part in parts:
            reference = reference[part]
```

```python
# convert a dictionary into a sequence (list)
def sequence_dict(seq, reference):
    sequence = [ ]
    for refs in reference:
        # converting dicts into objects with attrributes. Ignore non-dict content.
        if isinstance(reference[refs], dict):
            # put the key of the dict  into the dictionary
            reference[refs]['key_id'] = refs
            for item in reference[refs]:
                if isinstance(reference[refs][item], bool):
                    # fixup any boolean values to be ezt.boolean - essentially True -> "yes"
                    reference[refs][item] = ezt.boolean(reference[refs][item])
            # convert the dict into an object with attributes and append to the sequence
            sequence.append(type(seq, (), reference[refs]))
    return sequence
```

### Officers

```yaml
  officers:
    description: 'Foundation Officers sequence'
    # select ci['officers'] for the sequence
    path: officers
    # convert ci['officers']['roster']
    asfid: roster
  committees:
    description: 'Foundation Committees sequence'
    # ci['committees']
    path: committees
    # remove all report and roster dictionaries from committees
    trim: report,roster
    # convert ci['committees']['chair']
    asfid: chair
  ci:
    # used on /foundation/
    description: 'Dictionary of officers and committees'
    # save a merged dictionary version of these sequences.
    dictionary: officers,committees
```

```python
    # remove irrelevant keys
    if 'trim' in sequence:
        print(f'trim: {sequence["trim"]}')
        parts = sequence['trim'].split(',')
        for part in parts:
            remove_part(reference, part)

    # transform roster and chair patterns
    if 'asfid' in sequence:
        print(f'asfid: {sequence["asfid"]}')
        asfid_part(reference, sequence['asfid'])
```

```python
# remove parts of a data source we don't want ro access
def remove_part(reference, part):
    for refs in reference:
        if refs == part:
            del reference[part]
            return
        elif isinstance(reference[refs], dict):
            remove_part(reference[refs], part)
```

```python
# rotate a roster list singleton into an name and availid 
def asfid_part(reference, part):
    for refs in reference:
        fix = reference[refs][part]
        for k in fix:
            availid = k
            name = fix[k]['name']
        reference[refs][part] = name
        reference[refs]['availid'] = availid
```

```python
    # this dictionary is derived from sub-dictionaries
    if 'dictionary' in sequence:
        print(f'dictionary: {sequence["dictionary"]}')
        reference = { }
        paths = sequence['dictionary'].split(',')
        # create a dictionary from the keys in one or more sub-dictionaries
        for path in paths:
            for key in load[path]:
                reference[key] = load[path][key]
        # dictionary result, do not sequence
        is_dictionary = True
```

### Officer

```json
    "boardchair": {
      "display_name": "Board Chair",
      "paragraph": "Executive Officers",
      "roster": {
        "striker": {
          "name": "Sander Striker"
        }
      }
    },
```

### Vice President / Committee

```json
    "zookeeper": {
      "display_name": "ZooKeeper",
      "site": "http://zookeeper.apache.org/",
      "description": "Centralized service for maintaining configuration information",
      "mail_list": "zookeeper",
      "established": "11/2010",
      "chair": {
        "fpj": {
          "name": "Flavio Junqueira"
        }
      },
      "pmc": true
    },
    "legal": {
      "display_name": "Legal Affairs",
      "site": null,
      "description": null,
      "mail_list": "legal",
      "established": "03/2007",
      "chair": {
        "rvs": {
          "name": "Roman Shaposhnik"
        }
      },
      "pmc": false,
      "paragraph": "Board Committees"
    },
```

### Projects / PMCs

```yaml
  projects:
    description: 'Current Projects'
    # ci['committees']
    path: committees
    # select only where 'pmc' is true.
    where: pmc
    # sort by project name
    alpha: display_name
```

```python
# trim out parts of a data source that don't match part = True
def where_parts(reference, part):
    # currently only works on True parts
    # if we trim as we go we invalidate the iterator. Instead create a deletion list.
    filtered = [ ]
    # first find the list that needs to be trimmed.
    for refs in reference:
        if not reference[refs][part]:
            filtered.append(refs)
    # remove the parts to be trimmed.
    for refs in filtered:
        del reference[refs]
```

```python
# perform alphabetation. HTTP Server is special and is put before 'A'
def alpha_part(reference, part):
    for refs in reference:
        name = reference[refs][part]
        if name == 'HTTP Server':
            # when sorting by letter HTTPD Server is wanted first
            letter = ' '
        else:
            letter = name[0].upper()
        reference[refs]['letter'] = letter
```


### Featured Projects

```yaml
  featured_projs:
    # used on /
    description: 'Featured Projects'
    # base on projects sequence
    sequence: projects
    # take a random sample of 3
    random: 3
    # logo path - use apache powered by if missing
    logo: /logos/res/{}/default.png,/foundation/press/kit/poweredBy/Apache_PoweredBy.svg
```

```python
    # this sequence is derived from another sequence
    if 'sequence' in sequence:
        print(f'sequence: {sequence["sequence"]}')
        reference = metadata[sequence['sequence']]
        # sequences derived from prior sequences do not need to be converted to a sequence
        is_sequence = True

    # this sequence is a random sample of another sequence
    if 'random' in sequence:
        print(f'random: {sequence["random"]}')
        if is_sequence:
            reference = random.sample(reference, sequence['random'])
        else:
            print(f'{seq} - random requires an existing sequence to sample')

    # for a project or podling see if the logo exists w/HEAD and set the relative path.
    if 'logo' in sequence:
        print(f'logo: {sequence["logo"]}')
        if is_sequence:
            # determine the project or podling logo
            reference = add_logo(reference, sequence['logo'])
            if seq == 'featured_pods':
                # for podlings strip "Apache" from the beginning and "(incubating)" from the end.
                # this is Sally's request
                for item in reference:
                    setattr(item, 'name', ' '.join(item.name.split(' ')[1:-1]))
        else:
            print(f'{seq} - logo requires an existing sequence')

```

```python
# add logo attribute with HEAD check for existence. If nonexistent use default.
def add_logo(reference, part):
    # split between logo pattern and default.
    parts = part.split(',')
    for item in reference:
        # the logo pattern includes a place to insert the project/podling key
        logo = (parts[0].format(item.key_id))
        # HEAD request
        response = requests.head('https://www.apache.org/' + logo)
        if response.status_code != 200:
            # logo not found - use the default logo
            logo = parts[1]
        # save the logo path as an attribute
        setattr(item, 'logo', logo)
    return reference
```


### Project Columns

```yaml
  pl:
    # used on /
    description: 'Project List Columns'
    # base on projects sequence
    sequence: projects
    # split into 6 column sequence adding letters of the alphabet and putting httpd first
    split: 6
```

```python
# split a list into equal sized columns. Adds letter breaks in the alphabetical sequence.
def split_list(metadata, seq, reference, split):
    # copy sequence
    sequence = list(reference)
    # sort the copy
    sequence.sort(key=lambda x: (x.letter, x.display_name))
    # size of list
    size = len(sequence)
    # size of columns
    percol = int((size+26+split-1)/split)
    # positions
    start = nseq = nrow = 0
    letter = ' '
    # create each column
    for column in range(split):
        subsequence = [ ]
        end = min(size+26, start+percol)
        while nrow < end:
            if letter < sequence[nseq].letter:
                # new letter - add a letter break into the column. If a letter has no content it is skipped
                letter = sequence[nseq].letter
                subsequence.append(type(seq, (), { 'letter': letter, 'display_name': letter }))
            else:
                # add the project into the sequence
                subsequence.append(sequence[nseq])
                nseq = nseq+1
            nrow = nrow+1
        # save the column sequence in the metadata
        metadata[f'{seq}_{column}'] = subsequence
        start = end
    if nseq < size:
        print(f'WARNING: {seq} not all of sequence consumed: short {size-nseq} projects')
```
