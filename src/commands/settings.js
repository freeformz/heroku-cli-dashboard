// @flow

import {Command, flags} from 'cli-engine-heroku'
import {openApp} from '../misc'

export default class Settings extends Command {
  static topic = 'dashboard'
  static command = 'settings'
  static description = 'opens dashboard to the settings page'
  static help = 'opens the dashboard to an application\'s settings page'
  static needsAuth = true

  static flags = {
    remote: flags.remote(),
    app: flags.app({required: true})
  }

  run () {
    openApp(this.heroku, this.flags.app, 'settings')
  }
}
