Title: New PMC Chair Onboarding Guide
license: https://www.apache.org/licenses/LICENSE-2.0


Congratulations on being appointed by the Board as a project VP and Chair of your PMC, and thanks for volunteering to help represent your project to the Board!  The ASF relies on volunteers like you to help the Board provide the required oversight for our many projects.

Please run through the following checklist **now** to take action to accept your role, and read on for details about all the duties and responsibilities of a PMC Chair, or read a high-level overview of [what a PMC is](https://apache.org/foundation/governance/pmcs).

## PMC Chair First Steps - Required  {#first-steps}

- Update the [affiliations.txt file](#affiliations) with your new ASF role and any personal affiliations.  This is required for ASF corporate filings.
- Chairs are [responsible for ensuring quarterly reports to the Board](https://apache.org/dev/pmc#ensure-the-projects-quarterly-board-report-is-submitted) are submitted.  While any PMC members may help, the Board holds the chair responsible for ensuring reports get filed.
  - Review the [Reporting Guidelines](https://apache.org/foundation/board/reporting) so you understand what should be in your project reports.
  - Consider using the [Board Reporter Wizard](https://reporter.apache.org/) tool, which helps you draft and submit reports.
- Chairs are responsible for sharing any Board feedback with your PMC, and ensuring any Board questions for your are answered.
  - Chairs may [subscribe to the privately-archived board@ mailing list](https://apache.org/dev/pmc.html#subscribe-to-the-board-mailing-list-if-desired), if desired; reading board@ mails sometimes helps provide perspective on how the Board interacts with all ASF projects.
- If your project graduated from the Incubator, be sure to [complete the graduation handoff steps](https://incubator.apache.org/guides/transferring.html).
- Also recall that newly graduated projects from the Incubator will report *monthly* for the first three months.

## Other PMC Chair Responsibilities And Tips  {#other}

- Read the complete [guide on duties of a PMC Chair](https://apache.org/dev/pmc.html#chair).
  - While any PMC member can handle some PMC updates, in some cases only the Chair may have permissions to make roster updates.
  - PMC Chairs are also appointed as [Vice Presidents of the ASF](https://apache.org/dev/pmc.html#is-a-pmc-chair-an-officer-or-member-of-the-asf), although you will rarely use the officer title.
- Chairs may attend [monthly Board meetings](https://apache.org/foundation/board/meeting#attend), and many Chairs have found it useful to see how Board meetings work.
- You may want to review these *private* repositories for more information about the Board, reporting, and PMC governance.  These directories are private to ASF officers and ASF Members only, so do not share this information elsewhere.  You can use Subversion to checkout the directories below, or simply use your browser to login with your ASF credentials and view files.
  - `https://svn.apache.org/repos/private/foundation/officers` - data files and some tools about ICLAs and other records.
  - `https://svn.apache.org/repos/private/foundation/board` - current Board meeting *agendas*, or see all past [Board *minutes*](https://whimsy.apache.org/board/minutes/).
  - `https://svn.apache.org/repos/private/committers/board` - official Board calendar and PMC committee-info.txt listings.
- If your project website lists PMC members, be sure to update your name as the Chair. 
- This is also a great time to *thank the outgoing PMC Chair* for their work!

## How To Update affiliations.txt  {#affiliations}

All newly appointed officers or directors need to update the affiliations.txt file by adding one line about themselves to the file, following the format defined in the top of the text file.  If you've checked out the foundation/officers repository, simply edit and checkin the file there.  If you still need to checkout the directory to edit, you can do this:

```shell
svn checkout https://svn.apache.org/repos/private/foundation/officers --depth files
cd officers
*(edit affiliations.txt file to add your line)*
svn commit affiliations.txt -m "Add my affiliations for new PMC role"
```

There is also a Whimsy tool to [update the affiliations file](https://whimsy.apache.org/officers/update_affiliations.cgi).
