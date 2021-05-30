# Data model

## ASF Data

If the `asfdata.py` plugin is included then during the initialization of the Pelican site generator it will
read instructions and then create shared metadata that is available for all pages. It is particularly critical
for **ezmd** pages that contain directives.

The `pelicanconf.py` file contains the following:

```python
ASF_DATA_YAML = "asfdata.yaml"
ASF_DATA = {
    'data': ASF_DATA_YAML,
    'metadata': { },
    'debug': False
}
```

- `data` is a yaml file of metadata instructions. These are described below:
- `metadata` is a dictionary to contain the shared metadata
- `debug` if True will output more details about processing in `asfdata.py`

Within the plugin there are three different kinds of data transformations.

1. Constant key-value pairs.
2. Specific sequences - each of these are custom code specific to the datasource
   - Twitter feed uses the Twitter Recent Tweet API
   - Blogs reads a Roller Atom feed in XML
   - ECCN reads a export notifications from a yaml file
3. Multiple data models derived from a single yaml or json file
   - Committee Info which has Board, Officer, Committee, and Project information
   - Podling Info which has Incubator podling information

## Key Value Metadata

These are simply provided in the `ASF_DATA['data']` file.

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

This sequence uses specific code.

```yaml
# used on index.ezmd
twitter:
  # load, transform, and create a sequence of tweets
  handle: 'TheASF'
  count: 1
```

The key method for reading recent tweets from the API.

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

There are three different feeds used in the `www-site`. We show one in this example.

```yaml
# used on index.ezmd
foundation:
  # load, transform, and create a sequence of foundation blogs
  blog: https://blogs.apache.org/foundation/feed/entries/atom
  count: 1
```

We are only interested in the most recent post's title and id/url.


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

Note the use of the `Blog` class. It's definition is included in the code for the next example.

## ECCN Data Sequences

The ECCN data matrix is a recording of project's bisnotice emails regarding encryption code.
It is four layers of sequences - projects, products, versions, and controlled sources.

Here are the ASF_DATA directives

```yaml
# used on licenses/exports/index.ezmd
eccn:
  # load, transform, and create a four tiered structure of sequence objects
  # projects, products, versions, and sources
  file: data/eccn/eccnmatrix.yaml
```

Here is a sample of the data for the first project.

```yaml
eccnmatrix:
  - href: 'http://accumulo.apache.org/'
    name: Apache Accumulo Project
    contact: John Vines
    product:
      - name: Apache Accumulo Project
        versions:
          - version: development
            eccn: 5D002
            source:
              - href: 'https://git-wip-us.apache.org/repos/asf/accumulo.git'
                manufacturer: ASF
                why: Designed for use with built in Java encryption libraries
              - href: 'http://www.bouncycastle.org/download/bcmail-jdk15-137.tar.gz'
                manufacturer: Bouncy Castle
                why: General-purpose encryption library for Java 1.5
          - version: 1.6.0 and on
            eccn: 5D002
            source:
              - href: 'https://git-wip-us.apache.org/repos/asf/accumulo.git'
                manufacturer: ASF
                why: Designed for use with built in Java encryption libraries
              - href: 'http://www.bouncycastle.org/download/bcmail-jdk15-137.tar.gz'
                manufacturer: Bouncy Castle
                why: General-purpose encryption library for Java 1.5
          - version: 1.5.x
            eccn: 5D002
            source:
              - href: 'https://git-wip-us.apache.org/repos/asf/accumulo.git'
                manufacturer: ASF
                why: Designed for use with built in Java encryption libraries
  ...
```

Here is the custom processing for the ECCN data matrix. Note the wrappers.

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

The committee info data contains three different data structure - officers, committees, and the board of directors.
From these we derive:

- Board of Directors sequence
- Officers sequence
- Committees / PMCs sequence
- CI - Officers including PMC VPs dictionary
- Projects sequence
- Featured projects - a random sample of three projects.
- Project directory columns

### Board of Directors

The Board of Directors sequence is derived first.

```json
  ...
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
  ...
```

Here are the directives

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

Here is the python code used select the board roster from committee info.

```python
    # select sub dictionary
    if 'path' in sequence:
        print(f'path: {sequence["path"]}')
        parts = sequence['path'].split('.')
        for part in parts:
            reference = reference[part]
```

The following procedure is used to convert a dictionary into a sequence of object's with attributes.

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

Foundation officers.

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

Committees / PMC Chairs. Roster and Reporting is omitted.

```json
    ...
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
    ...
```

Here are the directives used to create metadata models from the above data.


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

We've already seen the core for `path` above. Here is the code that invokes `trim` and `asfid`.

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

Here is the code that trims a key from a dictionary.

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

Here is the code that rearranges the chair or officer(roster) so that the dictionary is flattened before sequencing.

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

The `ci` data model is a dictionary we need to better show officers on the foundation page.

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

### Projects / PMCs

For sequences about projects we first derive a project list from the committee list. We also supplement with the Project's initial letter for an alphabetic project index. 

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

Here's the code that trims non-pmcs from the committee list.

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

This code provides alphabetic index for a product index derived below.

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

For the front page we want to feature a random sample of projects. We also want to display a project's logo.

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

Here is the code to copy another sequence, take a random sample, add the logo (or default), and for featured podling's adjust the name.

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

Here is the detailed check to see if a project or podling logo is available.

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

### Project Index

At the bottom of the main page we display a project index that includes headings for each letter of the alphabet.

```yaml
  pl:
    # used on /
    description: 'Project List Columns'
    # base on projects sequence
    sequence: projects
    # split into 6 column sequence adding letters of the alphabet and putting httpd first
    split: 6
```

This code derives the six sequences for the columns. The output metadata is `pl_0`, `pl_1`, `pl_2`, `pl_3`, `pl_4`, and `pl_5`, 

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

## Adding a new Data Source

Before you code for your new data source you will need to evaluate which of the above patterns it fits.
Is it a bespoke pattern like Twitter, Blogs, and ECCN? Or, can it follow the sequence of directives used for Committee Info?
If the sequence of directives, does it need a new one?

### Adding a bespoke data source

```python
    # Lift data from ASF_DATA['data'] into METADATA
    if 'data' in asf_data:
        print(f'Processing {asf_data["data"]}')
        config_data = read_config(asf_data['data'])
        for key in config_data:
            # first check for data that is a singleton with special handling
            if key == 'eccn':
                # process eccn data
                fname = config_data[key]['file']
                metadata[key] = v = process_eccn(fname)
                if debug:
                    print('ECCN V:', v)
                continue

            if key == 'twitter':
                # process twitter data
                # if we decide to have multiple twitter feeds available then move next to blog below
                handle = config_data[key]['handle']
                count = config_data[key]['count']
                metadata[key] = v = process_twitter(handle, count)
                if debug:
                    print('TWITTER V:', v)
                continue
```

For bespoke singletons add your call to your new process_X code here following the pattern for ECCN or Twitter.

```python
       	    value = config_data[key]
            if isinstance(value, dict):
                # dictionaries may have multiple data structures that are processed with a sequence of actions
                # into multiple sequences and dictionaries.
                print(f'-----\n{key} creates one or more sequences')
                if debug:
                    print(value)
                # special cases that are multiple are processed first
                if 'blog' in value:
                    # process blog feed
                    feed = config_data[key]['blog']
                    count = config_data[key]['count']
                    metadata[key] = v = process_blog(feed, count, debug)
                    if debug:
                        print('BLOG V:', v)
                    continue
```

For bespoke non-singletons add your call to your new process_X code here following the pattern for a blog.

### Adding a new directive to the sequence process

If you are adding a new directive then add it to `process_sequence` in the order needed.

```python
# process sequencing transformations to the data source
def process_sequence(metadata, seq, sequence, load, debug):
    reference = load
    # has been converted to a sequence
    is_sequence = False
    # has been converted to a dictionary - won't be made into a sequence
    is_dictionary = False
    # save metadata at the end
    save_metadata = True

    # description
    if 'description' in sequence:
        print(f'{seq}: {sequence["description"]}')

    # select sub dictionary
    if 'path' in sequence:
        print(f'path: {sequence["path"]}')
        parts = sequence['path'].split('.')
        for part in parts:
            reference = reference[part]

    # filter dictionary by attribute value. if filter is false discard
    if 'where' in sequence:
        print(f'where: {sequence["where"]}')
        where_parts(reference, sequence['where'])

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

    # add first letter ofr alphabetic categories
    if 'alpha' in sequence:
        print(f'alpha: {sequence["alpha"]}')
        alpha_part(reference, sequence['alpha'])

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

    # this sequence is a sorted list divided into multiple columns
    if 'split' in sequence:
        print(f'split: {sequence["split"]}')
        if is_sequence:
            # create a sequence for each column
            split_list(metadata, seq, reference, sequence['split'])
            # created column sequences are already saved to metadata so do not do so later
            save_metadata = False
        else:
            print(f'{seq} - split requires an existing sequence to split')

```