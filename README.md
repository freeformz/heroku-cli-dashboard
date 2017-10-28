heroku dashboard

Opens up the dashboard for you

# Install

## From Git
heroku plugins:install https://github.com/freeformz/heroku-cli-dashboard

## From NPM
heroku plugins:install heroku-cli-dashboard


# Help

```console
$ heroku dashboard --help
Usage: heroku dashboard:open [flags]

open dashboard

Aliases:
  $ heroku dashboard

Flags:
 -a, --app     (required) app to run command against
 -r, --remote  git remote of app to use

opens the dashboard to the current application

heroku dashboard commands: (get help with heroku help dashboard:COMMAND)
 dashboard:metrics  open metrics dashboard
 dashboard:open     open dashboard
```