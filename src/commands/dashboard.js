// @flow

import {Command, flags} from 'cli-engine-heroku'
import {openApp} from '../misc'

export default class Dashboard extends Command {
  static topic = 'dashboard'
  static command = 'open'
  static description = 'opens dashboard to the overview page'
  static help = 'opens the dashboard to an application\'s overview page'
  static aliases = ['dashboard']
  static needsAuth = true

  static flags = {
    remote: flags.remote(),
    app: flags.app({required: true})
  }

  run () {
    openApp(this.heroku, this.flags.app, '')
  }
}
