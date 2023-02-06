# General build information

[ASF-Pelican build information](https://infra.apache.org/asf-pelican-build.html)

# Local Pelican Builds

These instructions are for building the www-site locally on either linux or macOS.

You can use the [infrastructure-pelican Dockerfile](https://github.com/apache/infrastructure-pelican/blob/master/Dockerfile) build the website locally for testing.

## Prerequisites

1. Python 3.6 or greater
2. Pip
3. CMake

## Installation

1. Download the files from https://github.com/apache/infrastructure-p6/tree/production/modules/pelican_asf/files

  - build-cmark.sh
  - toc.py
  - pelican-gfm/__init__.py
  - pelican-gfm/gfm.py
  - pelican-build.py

  Note that the GitHub repository is private to the ASF, so only ASF committers with an associated GitHub login can access it.
  If you don't have such a login set up, GitHub will respond with status 404 - File not found
  
2. Build cmark-gfm

```bash
bash build-cmark.sh
export LIBCMARKDIR=`pwd`/cmark-gfm-0.28.3.gfm.12/lib
```

3. Clone the website repository to your system

The example below assumes this is in `~/Development/www-site`.

4. Twitter Bearer Token

We make use of the Twitter api to retrieve the most recent tweet. A [Bearer Token](https://developer.twitter.com/en/docs/authentication/oauth-2-0/bearer-tokens)
is added to `~/.authtokens` file.

```
twitter:${BEARER_TOKEN}
```

If the file is not found or the twitter key is missing then the tweet returned is a message to configure the file.
If the Bearer Token is invalid then the API returns a 401 and the build is stopped.

5. Build the website locally from current local commits

```bash
python3 pelican-build.py --sourcetype git --source ~/Development/www-site --sourcebranch main \
 --outputbranch asf-site --project www --theme theme/apache --count 200
 ```

Arguments   | Description
------------|-----------------
 --sourcetype git           | must be `git`
 --source <local_git_repos> | where you checked in your changes
 --sourcebranch <mybranch>  | the branch. eg. main or preview/feature
 --outputbranch <whatever>  | not used in local builds
 --project <project>        | the project code
 --theme theme/apache       | the path to the theme. One level above the templates directory
 --count <min_count>        | to be a successful build the output must have min_count or more html files

5. Sample output

```
Setting up virtual python environment in /tmp/www
Cloning from git repository /Users/davewave/Development/www-site (branch: main)
Cloning into '/tmp/www/source'...
done.
Checking out files: 100% (2358/2358), done.
Installing pips
Requirement already satisfied: pelican in /usr/local/lib/python3.9/site-packages (from -r source/requirements.txt (line 1)) (4.6.0)
Requirement already satisfied: pelican-sitemap in /usr/local/lib/python3.9/site-packages (from -r source/requirements.txt (line 2)) (1.0.2)
Requirement already satisfied: BeautifulSoup4 in /usr/local/lib/python3.9/site-packages (from -r source/requirements.txt (line 3)) (4.9.3)
Requirement already satisfied: ezt in /usr/local/lib/python3.9/site-packages (from -r source/requirements.txt (line 4)) (1.1)
Requirement already satisfied: PyYAML in /usr/local/lib/python3.9/site-packages (from -r source/requirements.txt (line 5)) (5.4.1)
Requirement already satisfied: requests in /usr/local/lib/python3.9/site-packages (from -r source/requirements.txt (line 6)) (2.25.1)
Requirement already satisfied: jinja2>=2.7 in /usr/local/lib/python3.9/site-packages (from pelican->-r source/requirements.txt (line 1)) (3.0.1)
Requirement already satisfied: feedgenerator>=1.9 in /usr/local/lib/python3.9/site-packages (from pelican->-r source/requirements.txt (line 1)) (1.9.1)
Requirement already satisfied: blinker>=1.4 in /usr/local/lib/python3.9/site-packages (from pelican->-r source/requirements.txt (line 1)) (1.4)
Requirement already satisfied: pytz>=2020.1 in /usr/local/lib/python3.9/site-packages (from pelican->-r source/requirements.txt (line 1)) (2021.1)
Requirement already satisfied: unidecode>=1.1 in /usr/local/lib/python3.9/site-packages (from pelican->-r source/requirements.txt (line 1)) (1.2.0)
Requirement already satisfied: docutils>=0.16 in /usr/local/lib/python3.9/site-packages (from pelican->-r source/requirements.txt (line 1)) (0.17.1)
Requirement already satisfied: pygments>=2.6 in /usr/local/lib/python3.9/site-packages (from pelican->-r source/requirements.txt (line 1)) (2.9.0)
Requirement already satisfied: python-dateutil>=2.8 in /usr/local/lib/python3.9/site-packages (from pelican->-r source/requirements.txt (line 1)) (2.8.1)
Requirement already satisfied: six in /usr/local/lib/python3.9/site-packages (from feedgenerator>=1.9->pelican->-r source/requirements.txt (line 1)) (1.16.0)
Requirement already satisfied: MarkupSafe>=2.0 in /usr/local/lib/python3.9/site-packages (from jinja2>=2.7->pelican->-r source/requirements.txt (line 1)) (2.0.1)
Requirement already satisfied: soupsieve>1.2 in /usr/local/lib/python3.9/site-packages (from BeautifulSoup4->-r source/requirements.txt (line 3)) (2.2.1)
Requirement already satisfied: chardet<5,>=3.0.2 in /usr/local/lib/python3.9/site-packages (from requests->-r source/requirements.txt (line 6)) (4.0.0)
Requirement already satisfied: certifi>=2017.4.17 in /usr/local/lib/python3.9/site-packages (from requests->-r source/requirements.txt (line 6)) (2020.12.5)
Requirement already satisfied: idna<3,>=2.5 in /usr/local/lib/python3.9/site-packages (from requests->-r source/requirements.txt (line 6)) (2.10)
Requirement already satisfied: urllib3<1.27,>=1.21.1 in /usr/local/lib/python3.9/site-packages (from requests->-r source/requirements.txt (line 6)) (1.26.4)
WARNING: You are using pip version 21.1.1; however, version 21.1.2 is available.
You should consider upgrading via the '/usr/local/opt/python@3.9/bin/python3.9 -m pip install --upgrade pip' command.
TOOLS: /Users/davewave/Development/pelican
Using theme directory /tmp/www/source/theme/apache...
Building web site with: ('/bin/bash', '-c', 'source bin/activate; cd source && (pelican content -t /tmp/www/source/theme/apache -o /tmp/www/build/output)')
-----
asfdata
...
-----
metadata[site_url] = "https://www.apache.org"
metadata[code_lines] = "227M"
metadata[code_changed] = "4.2B"
metadata[code_commits] = "4.1M"
metadata[asf_members] = 820
metadata[asf_members_rounded] = 800
metadata[asf_committers] = "8,100"
metadata[asf_contributors] = "40,000"
metadata[asf_people] = "488,000"
metadata[com_initiatives] = 350
metadata[com_projects] = 300
metadata[com_podlings] = 37
metadata[com_downloads] = "~2 Petabytes"
metadata[com_emails] = "24M"
metadata[com_mailinglists] = "1,400"
metadata[com_pageviews] = "35M"
metadata[board] is a sequence.
metadata[officers] is a sequence.
metadata[committees] is a sequence.
metadata[ci] is a dictionary.
metadata[projects] is a sequence.
metadata[featured_projs] is a sequence.
metadata[pl_0] is a sequence.
metadata[pl_1] is a sequence.
metadata[pl_2] is a sequence.
metadata[pl_3] is a sequence.
metadata[pl_4] is a sequence.
metadata[pl_5] is a sequence.
metadata[podlings] is a sequence.
metadata[featured_pods] is a sequence.
metadata[eccn] is a sequence.
metadata[twitter] is a sequence.
metadata[foundation] is a sequence.
metadata[planet] is a sequence.
metadata[conferences] is a sequence.
-----
licenses/index.md - Licenses
    #apache-licenses
    #distributions
    #clas
    #2.0
    #grants
    #trademarks
    #1.0
    #contributor-license-agreements
    #crypto
    #questions
    #other-legal-info
    #submitting
    #1.1
...
{{board[0].name}} -> Bertrand Delacretaz
{{board[1].name}} -> Roy T. Fielding
{{board[2].name}} -> Sharan Foga
{{board[3].name}} -> Justin Mclean
{{board[4].name}} -> Sam Ruby
{{board[5].name}} -> Craig L Russell
{{board[6].name}} -> Roman Shaposhnik
{{board[7].name}} -> Sander Striker
{{board[8].name}} -> Sheng Wu
{{ci[boardchair][roster]}} -> Sander Striker
{{ci[vicechair][roster]}} -> Shane Curcuru
{{ci[president][roster]}} -> David Nalley
{{ci[execvp][roster]}} -> Ruth Suehle
{{ci[treasurer][roster]}} -> Myrle Krantz
{{ci[assistanttreasurer][roster]}} -> Trevor Grant
{{ci[secretary][roster]}} -> Matt Sicker
{{ci[assistantsecretary][roster]}} -> Craig L Russell
{{ci[legal][chair]}} -> Roman Shaposhnik
{{ci[assistantvplegalaffairs][roster]}} -> Justin Mclean
{{ci[security][chair]}} -> Mark J. Cox
{{ci[dataprivacy][chair]}} -> Christian Grobmeier
{{ci[w3crelations][roster]}} -> Andy Seaborne
{{ci[brand][chair]}} -> Mark Thomas
{{ci[concom][chair]}} -> Rich Bowen
{{ci[diversity][chair]}} -> Griselda Cuevas
{{ci[fundraising][chair]}} -> Daniel Ruggeri
{{ci[infrastructure][roster]}} -> David Nalley
{{ci[marketingandpublicity][chair]}} -> Sally Khudairi
{{ci[tac][chair]}} -> Gavin McDonald
{{ci[infrastructureadministrator][roster]}} -> Greg Stein
{{ci[sponsorrelations][roster]}} -> Sally Khudairi
foundation/index.ezmd - Foundation Project
    #how-are-the-asf-and-apache-projects-governed
    #officers
    #how-did-the-asf-and-apache-projects-grow
    #pmc-chairs
    #what-is-the-role-of-asf-members
    #what-is-the-asf
    #who-runs-the-asf
    #board-members
...
dev/project-requirements.md - Apache Project Minimum Requirements
  ToC
    #brand
    #governance
    #legal
    #incubator
    #community
    #funding
    #technical
    #other
    #press
dev/git.md - Git access to Apache codebases
info/referer-dotcom.md - Welcome
    #welcome-to-the-apache-software-foundation
Done: Processed 0 articles, 0 drafts, 212 pages, 0 hidden pages and 0 draft pages in 16.86 seconds.
222 html files. To test output: cd /tmp/www/build; pelican -l
Web site successfully generated!
```
