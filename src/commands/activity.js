// @flow

import {open} from 'heroku-cli-util'
import {Command, flags} from 'cli-engine-heroku'
import {DashboardAppsURL} from '../misc'

export default class Activity extends Command {
  static topic = 'dashboard'
  static command = 'activity'
  static description = "opens dashboard to the activity page"
  static help = 'opens the dashboard to an application\'s activity page'
  static needsAuth = true

  static flags = {
    remote: flags.remote(),
    app: flags.app()
  }

  async run () {
    let app = await this.heroku.get(`/apps/${this.flags.app}`)
    open(`${DashboardAppsURL}/${app.name}/activity`)
  }
}
