# Feature Branches

For large changes it will often be necessary to make a feature branch, work on it with others, stage the results, and review separately. This document will present a step-by-step outline for creating `feature` branches.

Replace `feature` with a name of your choice. Several feature branches are possible.

## Create Branches

From `main` create `feature` branch

From `asf-site` create `asf-feature` branch 

## Update each branches .asf.yaml files.

In `feature` branch edit `.asf.yaml` to look like

```yaml
pelican:
  notify: id@apache.org
  autobuild: true
  target: asf-feature
  theme: theme/apache
  whoami: feature
```

In `asf-feature` branch edit `.asf.yaml` to look like

```yaml
staging:
  profile: feature
  whoami: asf-feature
```

## Building

After you make a commit to your `feature` branch the pelican build should happen automatically. You will get an email sent to `id@apache.org`.

A successful build will be found at https://www-feature.staged.apache.org/

## Complete

Once your feature is complete you submit a PR from `feature` to `main`. Make sure that you exclude `.asf.yaml`.
