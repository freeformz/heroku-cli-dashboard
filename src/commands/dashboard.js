// @flow

import {open} from 'heroku-cli-util'
import {Command, flags} from 'cli-engine-heroku'
import {DashboardAppsURL} from '../misc'

export default class Dashboard extends Command {
  static topic = 'dashboard'
  static command = 'open'
  static description = 'open dashboard'
  static help = 'opens the dashboard to the current application'
  static needsAuth = true
  static aliases = ['dashboard']

  static flags = {
    remote: flags.remote(),
    app: flags.app({required: true})
  }

  async run () {
    let app = await this.heroku.get(`/apps/${this.flags.app}`)
    open(`${DashboardAppsURL}/${app.name}`)
  }
}

