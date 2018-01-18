// @flow

import {open} from 'heroku-cli-util'

export const DashboardAppsURL = 'https://dashboard.heroku.com/apps'

export async function openApp (heroku, app, t) {
  let resp = await heroku.get(`/apps/${app}`)
  let tgt = `${DashboardAppsURL}/${resp.body.name}`
  if (t) {
    tgt = `${tgt}/${t}`
  }
  open(tgt)
}
