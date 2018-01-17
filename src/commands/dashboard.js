// @flow

import {open} from 'heroku-cli-util'
import {Command, flags} from 'cli-engine-heroku'
import {DashboardAppsURL} from '../misc'

export default class Dashboard extends Command {
  static topic = 'dashboard'
  static command = 'open'
  static description = 'opens dashboard to the overview page'
  static help = 'opens the dashboard to an application\'s overview page'
  static needsAuth = true
  static aliases = ['dashboard']

  static flags = {
    remote: flags.remote(),
    app: flags.app()
  }

  async run () {
    let app = await this.heroku.get(`/apps/${this.flags.app}`)
    open(`${DashboardAppsURL}/${app.name}`)
  }
}
