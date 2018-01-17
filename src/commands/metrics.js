// @flow

import {open} from 'heroku-cli-util'
import {flags} from 'cli-engine-heroku'
import {DashboardAppsURL} from '../misc'

import Dashboard from './dashboard'

export default class Metrics extends Dashboard {
  static command = 'metrics'
  static description = 'opens dashboard to the metrics page'
  static help = 'opens the dashboard to an application\'s metrics page'

  static flags = Object.assign(
    {type: flags.string({
      description: 'Process type formation to open to (default: web)',
      parse: (input, cmd) => {
        if (input === undefined) return 'web'
        return input
      }
    })}, Dashboard.flags)

  async run () {
    let app = await this.heroku.get(`/apps/${this.flags.app}`)
    let formation = await this.heroku.get(`/apps/${app.name}/formation/${this.flags.type}`)
    open(`${DashboardAppsURL}/${app.name}/metrics/${formation.type}`)
  }
}
