Title: Briefing: The Apache Way

# {{title}}

Ask <a href="/foundation/governance/members.html">The Apache Software Foundation’s Members</a> about The Apache Way and you’ll get as many answers as to what it is. In fact, we surveyed the greater Apache user and developer community and were fascinated with their responses</p>

<hr>
<h5>“The Apache Way to me…”</h5>
<p style="border-style:solid;border-width:2px;padding:5px;">
<strong id="awtm"></strong>
<script>
var quotes;
function storeQuote(json)  {
  quotes=json;
  setQuote();
}
function setQuote() {
  let quote = quotes[parseInt(Math.random()*quotes.length)];
  awtm.innerText = '"' + quote['quote'] + '"\n' + '—' + quote['author'];
  window.setTimeout(setQuote, 30000);
}
fetch('./quotes.json')
    .then((response) => response.json())
    .then((json) => storeQuote(json));
</script>
<noscript>
Please enable JavaScript to see a related quote ...
</noscript>
</p>

<hr>

## What makes The Apache Way so hard to define?

The Apache Way is a living, breathing interpretation of one’s experience with our community-led development process. Apache projects and their communities are unique, diverse, and focused on the activities needed at a particular stage of the project’s lifetime, including nurturing communities, developing great code, and building awareness. What is important is that they embrace:

  - <strong><em>Earned Authority:</em></strong> all individuals are given the opportunity to participate, but their influence is based on publicly earned merit – what they contribute to the community. Merit lies with the individual, does not expire, is not influenced by employment status or employer, and is non-transferable (merit earned in one project cannot be applied to another). <a href="/foundation/how-it-works.html#meritocracy">More on merit</a>.
  - <strong><em>Community of Peers:</em></strong> individuals participate at the ASF, not organizations. The ASF’s flat structure dictates that roles are equal irrespective of title, votes hold equal weight, and contributions are made on a volunteer basis (even if paid to work on Apache code). The Apache community is expected to treat each other with respect in adherence to our <a href="/foundation/policies/conduct.html">Code of Conduct</a>. Domain expertise is appreciated; Benevolent Dictators For Life are disallowed. <a href="/foundation/how-it-works.html#hats">More on individual participation</a>.
  - <strong><em>Open Communications:</em></strong> as a virtual organization, the ASF requires all communications related to code and decision-making to be publicly accessible to ensure asynchronous collaboration, as necessitated by a globally-distributed community. Project mailing lists are archived, publicly accessible, and include:

    - dev@ (primary project development)
    - user@ (user community discussion and peer support)
    - commits@ (automated source change notifications)
    - occasionally supporting roles such as marketing@ (project visibility)

  ...as well as restricted, day-to-day operational lists for Project Management Committees. Private decisions on code, policies, or project direction are disallowed; off-list discourse and transactions must be brought on-list. More on <a href="/dev/pmc.html#mailing-list-naming-policy">communications</a> and the<a href="/foundation/mailinglists.html"> use of mailing lists</a>.
  - <strong><em>Consensus Decision Making:</em></strong> Apache Projects are overseen by a self-selected team of active volunteers who are contributing to their respective projects. Projects are auto-governing with a heavy slant towards driving consensus to maintain momentum and productivity. Whilst total consensus is not possible to establish at all times, holding a vote or other coordination may be required to help remove any blocks with binding decisions, such as when declaring a release. <a href="/foundation/how-it-works.html#decision-making">More on decision making and voting</a>.
  - <strong><em>Responsible Oversight:</em></strong> The ASF governance model is based on trust and delegated oversight. Rather than detailed rules and hierarchical structures, ASF governance is principles-based, with self-governing projects providing reports directly to the Board. Apache Committers help each other by making peer-reviewed commits, employing mandatory security measures, ensuring license compliance, and protecting the Apache brand and community at-large from abuse. <a href="/foundation/governance/pmcs">More on responsibility</a>.

## Important:

  - <strong><u>Independence:</u></strong> the ASF is strictly vendor neutral. No organization is able to gain special privileges or control a project’s direction, irrespective of employing Committers to work on Apache projects or sponsorship status. More on <a href="http://community.apache.org/projectIndependence.html">project independence</a>.
  - <strong><u>Community Over Code:</u></strong> the maxim "Community Over Code" is frequently reinforced throughout the Apache community, as the ASF asserts that a healthy community is a higher priority than good code. Strong communities can always rectify problems with their code, whereas an unhealthy community will likely struggle to maintain a codebase in a sustainable manner. More on healthy <a href="https://community.apache.org/">community development</a>.

There is no "one way" to The Apache Way. The ASF is not dictatorial and will never compel a rigid path to implement our process, as we believe flexibility is integral to <a href="https://s.apache.org/GhnI">The Apache Way to Sustainable Open Source Success</a>.

<strong><em>"The unbroken success of Apache still has important lessons to teach us... The Apache community has succeeded not just in developing great code, it has managed to distil the essence of the development process and ethos in such a way that other cognate projects can adopt and adapt it."</em></strong> — Glyn Moody, "Learning from The Apache Way"</p>

Our model, refined over the past 20 years, has produced some of the largest and longest-lived Open Source projects that have revolutionized the industry. We welcome constructive discussion on The Apache Way and look forward to doing so in person at a <a href="https://www.apachecon.com/">future Apache event</a>.
