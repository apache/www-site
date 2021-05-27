# Preview Feature Branches

For large changes it will often be necessary to make a preview feature branch, work on it with others, stage the results, and review separately. This document will present a step-by-step outline for creating `preview/feature` branches.

Replace `feature` with a name of your choice. Several feature branches are possible.

## [Create preview/feature branch](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)

From `main` create `preview/feature` branch

## Building

After you make a commit to your `preview/feature` branch the pelican build should happen automatically. You will get an email sent to `id@apache.org`.

A successful build will be found at https://www-feature.staged.apache.org/

## [Merging preview/feature back to main](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request#creating-the-pull-request)

Once your feature is complete you submit a PR from `preview/feature` to `main`. Once the PR is merged the site is updated to include the updated features.

## Example

1. Create `preview/bootstrap5`

2. Work on `preview/bootstrap5` branch to update bootstrap to version 5 with preview builds staged at https://www-bootstrap5.staged.apache.org/

3. Submit PR to merge `preview/bootstrap` back to `main`

## [.asf.yaml](../.asf.yaml) settings

These settings do the automatic staging of preview branches.

```yaml
pelican:
  autobuild: preview/*
  target: asf-site
  theme: theme/apache
  whoami: main

staging:
  profile: ~
  autostage: preview/*
```
