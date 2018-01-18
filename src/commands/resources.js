// @flow

import {Command, flags} from 'cli-engine-heroku'
import {openApp} from '../misc'

export default class Resources extends Command {
  static topic = 'dashboard'
  static command = 'resources'
  static description = 'opens dashboard to the resources page'
  static help = 'opens the dashboard to an application\'s resources page'
  static needsAuth = true

  static flags = {
    remote: flags.remote(),
    app: flags.app({required: true})
  }

  run () {
    openApp(this.heroku, this.flags.app, 'resources')
  }
}
