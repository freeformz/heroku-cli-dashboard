// @flow

import {open} from 'heroku-cli-util'
import {flags} from 'cli-engine-heroku'
import {DashboardAppsURL} from '../misc'

import Dashboard from './dashboard'

export default class Resources extends Dashboard {
  static topic = 'dashboard'
  static command = 'resources'
  static description = 'opens dashboard to the resources page'
  static help = 'opens the dashboard to an application\'s resources page'
  static needsAuth = true

  static flags = {
    remote: flags.remote(),
    app: flags.app()
  }

  async run () {
    let app = await this.heroku.get(`/apps/${this.flags.app}`)
    open(`${DashboardAppsURL}/${app.name}/resources`)
  }
}
