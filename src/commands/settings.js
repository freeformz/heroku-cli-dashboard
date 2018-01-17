// @flow

import {open} from 'heroku-cli-util'
import {flags} from 'cli-engine-heroku'
import {DashboardAppsURL} from '../misc'

import Dashboard from './dashboard'

export default class Activity extends Dashboard {
  static topic = 'dashboard'
  static command = 'settings'
  static description = 'opens dashboard to the settings page'
  static help = 'opens the dashboard to an application\'s settings page'
  static needsAuth = true

  static flags = {
    remote: flags.remote(),
    app: flags.app()
  }

  async run () {
    let app = await this.heroku.get(`/apps/${this.flags.app}`)
    open(`${DashboardAppsURL}/${app.name}/settings`)
  }
}
