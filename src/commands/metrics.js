// @flow

import {Command, flags} from 'cli-engine-heroku'
import {openApp} from '../misc'

export default class Metrics extends Command {
  static topic = 'dashboard'
  static command = 'metrics'
  static description = 'opens dashboard to the metrics page'
  static help = 'opens the dashboard to an application\'s metrics page'
  static needsAuth = true

  static flags = {
    remote: flags.remote(),
    app: flags.app({required: true}),
    type: flags.string({
      description: 'Process type formation to open to (default: web)',
      parse: (input, cmd) => {
        if (input === undefined) return 'web'
        return input
      }
    })
  }

  async run () {
    let resp = await this.heroku.get(`/apps/${this.flags.app}/formation/${this.flags.type}`)
    openApp(this.heroku, this.flags.app, `metrics/${resp.body.type}`)
  }
}
