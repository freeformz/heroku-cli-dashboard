// @flow

import {Command, flags} from 'cli-engine-heroku'
import {openApp} from '../misc'

export default class Activity extends Command {
  static topic = 'dashboard'
  static command = 'activity'
  static description = 'opens dashboard to the activity page'
  static help = 'opens the dashboard to an application\'s activity page'
  static needsAuth = true

  static flags = {
    remote: flags.remote(),
    app: flags.app({required: true})
  }

  run () {
    openApp(this.heroku, this.flags.app, `activity`)
  }
}
