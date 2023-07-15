Title: Mailing Lists
license: https://www.apache.org/licenses/LICENSE-2.0

# {{title}}

Publicly archived mailing lists are critical to the operation of the Apache Software
Foundation (ASF) and to our many [Apache
Projects](http://projects.apache.org/).  Apache projects use mailing lists to coordinate
development of their software and administer their organization. Mailing
lists also serve as a primary support channel where users can help each
other learn to use the software.

Mailing list participants are expected to abide by the well-established rules of
"netiquette", as well as the ASF's published [Code of Conduct](/foundation/policies/conduct.html).
 We also have [Tips for email
contributors](../dev/contrib-email-tips.html).

Please be aware that email sent to Apache developer or user mailing lists is subject to our 
[Public Forum Archive Policy](public-archives.html). 

Note that some Apache mailing lists are not public; they are often but not always named 
**private@**. Be sure not to take emails from private discussions or mailing lists 
into a public forum or list unless there is agreement by all parties to the conversation.

## Moderation of posts

Most lists require a poster to be subscribed.
If you are not subscribed, your post requires moderation.
This may take hours or days, so it's best to subscribe (as described below) before posting.

## Subscribing and Unsubscribing  {#subscribing}

Unless otherwise noted, ASF lists are managed by
[ezmlm](http://untroubled.org/ezmlm/), which lets users subscribe or unsubscribe by sending an email to a special address.
This works as follows:

* Send the request to the appropriate address (see below)
* ezmlm sends a reply; either a confirmation request or an error message (e.g. if you are not subscribed)
* Reply to the confirmation message

ASF committers can also use the Whimsy [Mailing List Self-subscription](https://whimsy.apache.org/committers/subscribe) service.

## Request addresses for [un]subscribing

If you want to subscribe
to <code><em>list</em>@apache.org</code>, you need to send a message to

<pre>
<em>list</em>-subscribe@apache.org
</pre>

To get off a list, send a message to

<pre>
<em>list</em>-<b>un</b>subscribe@apache.org
</pre>

To unsubscribe a different e-mail - e.g.
you used to be subscribed as **`user@oldname.example`** - send a message
to

<pre>
<em>list</em>-unsubscribe-<b>user=oldname.example</b>@apache.org
</pre>

_The list moderators can also do this._

If you do not recall the address you used when you subscribed, view the full headers
of any email you received from the list and examine the `Return-Path`,
`Received`, and `List-ID` headers; these should embed both the address you are
subscribed as and the address of the mailing list.

Note: Spam filters don't like messages with empty Subjects; just put
"subscribe" or "unsubscribe" in the header field. Spam filters are also more likely to reject
HTML-formatted messages; please use plain text.

## Request confirmation

After you send the subscribe or unsubscribe request, the list manager
sends you a confirmation e-mail in reply. **You must reply to this e-mail to
complete the process.** If you have not received the confirmation request,
check that it has not been marked as spam.

**Note: private lists generally require a moderator to confirm the subscription**.
This may take a day or two. If necessary, try again after a few days.
For this reason we recommend that ASF and PMC members use
[the self-subscribe app](https://whimsy.apache.org/committers/subscribe) to avoid having to wait for the human moderators to check and green-light your subscription request.

## Other list commands

To find out more about a list's features, including how to contact the list owner (moderator),
send a message to 

<pre>
<em>list</em>-help@apache.org
</pre>

Ezmlm lists also generally provide subscribers with a way to request
specific past messages or ranges of messages: send mail to the list's help
address to find out more. This can act as a sort of 'poor man's archive' if
the normal archives are inaccessible or don't exist.

All ASF committers can get a list of (a) what email addresses are known to the
ASF as belonging to them (b) what mailing lists they are moderating, and (c)
what mailing lists they are subscribed to by going to the following page:

  [https://whimsy.apache.org/roster/committer/\_\_self\_\_](https://whimsy.apache.org/roster/committer/__self__)

## Digest Subscriptions

You can also subscribe to most mailing lists in digest form. To do this for <tt>*list*@apache.org</tt>, send a message to

<pre>
<em>list</em>-digest-subscribe@apache.org
</pre>

To get off a digest list, send a message to

<pre>
<em>list</em>-digest-<b>un</b>subscribe@apache.org
</pre>

If you need to unsubscribe a different email or get help with a digest list the same instructions as for subscribing/unsubscribing 
above apply. Just remember to add *-digest* after the list name and before the *-subscribe* or *-unsubscribe*.

## Moderators  {#moderators}

Each mailing list generally has several moderators who look after the list.
For further information, see the
[Committers FAQ - Mail Questions](/dev/committers.html#mail)

## Mailing List Archives  {#archives}

Archives for public mailing lists are available at a number of locations,
including:

-  [Apache mail archives](https://lists.apache.org/) 

-  [MarkMail](http://apache.markmail.org/) 

-  [MARC](http://marc.info/) 

-  [mail-archive.com](http://mail-archive.com/) 

## Project Mailing Lists

Links to project-specific mailing list info can be found on the [project
resources page](http://projects.apache.org/projects.html).

Tip: if you have a technical question of any kind, the best place to ask is the 
user@ or dev@ list for the relevant project - Foundation level mailing lists 
or other Apache contact emails (including individuals' emails) will not be able to help you

## Foundation-wide Mailing Lists

-  [Apache News and Announcements](#foundation-announce) 

-  [Conference Announcements list](#foundation-apachecon) 

-  [Community discussions](#foundation-community) 

-  [Infrastructure assistance](#foundation-infrastructure) 

-  [Legal discussions](#foundation-legal) 

## Apache News and Announcements  {#foundation-announce}

The Apache Announcements list contains news and announcements about the
foundation and its projects. It includes announcements of major software releases, new
projects, and other important news. This list only includes Messages posted by the Foundation; there is no discussion.  

You may also be interested in 
our official [@TheASF Twitter](https://twitter.com/TheASF) account, or the 
[official ASF Blog](https://blogs.apache.org/foundation/).

| Volume: | Low |
|---------|-----|
| Subscription address: |  [announce-subscribe@apache.org](mailto:announce-subscribe@apache.org)  |
| Unsubscription address: |  [announce-unsubscribe@apache.org](mailto:announce-unsubscribe@apache.org)  |
| Archives: | [Web archives](http://lists.apache.org/list.html?announce@apache.org)<br />[archives](http://www.mail-archive.com/announce@apache.org/) |
| Getting help with the list: |  [announce-help@apache.org](mailto:announce-help@apache.org)  |

## Apache Conference Announcements  {#foundation-apachecon}

The Apache Conference planning committee uses the `announce@ApacheCon.Com` mailing list to make announcements about conferences, conventions,
and trade shows in which the Foundation is participating. Only the Foundation posts Messages on this list; there is no discussion.

You may also be interested in our official [@ApacheCon Twitter](https://twitter.com/ApacheCon) account, or the 
[official ApacheCon Conferences blog](https://blogs.apache.org/conferences/).

| Volume: | Very low |
|---------|----------|
| Subscription address: |  [announce-subscribe@ApacheCon.Com](mailto:announce-subscribe@ApacheCon.Com)  |
| Unsubscription address: |  [announce-unsubscribe@ApacheCon.Com](mailto:announce-unsubscribe@ApacheCon.Com)  |
| Archives: | Available back to 13 October 1999. Send a message to [announce-help@ApacheCon.Com](mailto:announce-help@ApacheCon.Com) for information about accessing the archives. |
| Getting help with the list: |  [announce-help@ApacheCon.Com](mailto:announce-help@ApacheCon.Com)  |

## Apache Conference Planning and Discussions  {#foundation-apachecon-discuss}

The `apachecon-discuss@apache.org` mailing list is for discussions of the future of ApacheCon, and future 
ApacheCons. (Discussions of current and upcoming ApacheCons which have been approved occur on other lists.)

| Volume: | Moderate |
|---------|----------|
| Subscription address: |  [apachecon-discuss-subscribe@apache.org](mailto:apachecon-discuss-subscribe@apache.org)  |
| Unsubscription address: |  [apachecon-discuss-unsubscribe@apache.org](mailto:apachecon-discuss-unsubscribe@apache.org)  |
| Archives: | [Web archives](http://lists.apache.org/list.html?apachecon-discuss@apache.org) |
| Getting help with the list: |  [apachecon-discuss-help@apache.org](mailto:apachecon-discuss-help@apache.org)  |

The `small-events-discuss@apache.org` mailing list is for discussions on future small events, such as 
BarCampApaches, Meetups, Retreats and Hackathons. It is for discussing and planning small events that are 
not yet ready to seek final approval.


| Volume: | Moderate |
|---------|----------|
| Subscription address: |  [small-events-discuss-subscribe@apache.org](mailto:small-events-discuss-subscribe@apache.org)  |
| Unsubscription address: |  [small-events-discuss-unsubscribe@apache.org](mailto:small-events-discuss-unsubscribe@apache.org)  |
| Archives: | [Web archives](http://lists.apache.org/list.html?small-events-discuss@apache.org) |
| Getting help with the list: |  [small-events-discuss-help@apache.org](mailto:small-events-discuss-help@apache.org)  |

## Community Mailing List  {#foundation-community}

Participants in the ASF use the `dev@community.apache.org` mailing list to discuss community-related foundation-wide 
topics. Participation in this list is open to everyone, and public archives
are available.

This replaces the old `community@a.o`mailing list, disabled in 2014.

| Volume: | Moderate |
|---------|----------|
| Subscription address: |  [dev-subscribe@community.apache.org](mailto:dev-subscribe@community.apache.org)  |
| Archives: | [Web archives](https://lists.apache.org/list.html?dev@community.apache.org) |

## Foundation Infrastructure Mailing List  {#foundation-infrastructure}

The ASF Infrastructure team uses the `users@infra.apache.org` mailing list to discuss issues concerning operation of the
overall Apache Software Foundation systems. Only committers to ASF projects can participate in this list.
Non-committers may send mail to this address to report problems with ASF
systems, however see the notes about <a href="https://infra.apache.org/stats.html" target="_blank">system status</a> before
you do. See also information about other ways to <a href="https://infra.apache.org/contact.html" target="_blank">contact Infra</a>.

## Repository Mailing List  {#foundation-repository}

Use the `repository@apache.org` mailing list to discuss 
foundation-wide issues relating to software distribution repositories, including 
our Apache Maven repository of other software releases. Participation in this list is open to everyone, and public archives
are available.


| Volume: | Moderate |
|---------|----------|
| Subscription address: |  [repository-subscribe@apache.org](mailto:repository-subscribe@apache.org)  |
| Archives: | [Web archives](https://lists.apache.org/list.html?repository@apache.org) |

## Foundation Legal Discussion Mailing List  {#foundation-legal}

The `legal-discuss@apache.org` is a forum for questions (even FAQs) that
have a legal aspect. These questions may concern (for example)
licensing, third party packages, contributor agreement questions and
trademark issues. This list will build into an ad-hoc knowledge base about
those thorny legal issues that most commonly effect Apache projects. Please
keep speculation to a minimum and avoid making authoritative statements
without genuine knowledge of the subject.

Volunteers willing to codify discussions into a FAQ are welcome.

| Volume: | Moderate |
|---------|----------|
| Subscription address: |  [legal-discuss-subscribe@apache.org](mailto:legal-discuss-subscribe@apache.org)  |
| Unsubscription address: |  [legal-discuss-unsubscribe@apache.org](mailto:legal-discuss-unsubscribe@apache.org)  |
| Archives: | Raw gzipped [mbox files](/mail/legal-discuss/)<br />[Web archives](http://lists.apache.org/list.html?legal-discuss@apache.org) |
