// @flow

import {open} from 'heroku-cli-util'
import {Command, flags} from 'cli-engine-heroku'
import {DashboardAppsURL} from '../misc'

export default class Metrics extends Command {
    static topic = 'dashboard'
    static command = 'metrics'
    static description = 'open metrics dashboard'
    static help = 'opens the dashboard to the current application\'s metrics page'
    static needsAuth = true
  
    static flags = {
      remote: flags.remote(),
      app: flags.app({required: true}),
    }
  
    async run () {
      let app = await this.heroku.get(`/apps/${this.flags.app}`)
      open(`${DashboardAppsURL}/${app.name}/metrics/web`)
    }
  }