import WebFont from 'webfontloader'

import * as assets from './assets'
import * as wait from './await'
import * as cards from './cards'
import * as content from './content'
import * as dummy from './dummy'
import * as form from './form'
import * as layout from './layout'
import * as list from './list'
import * as navigation from './navigation'
import * as progress from './progress'

WebFont.load({
  google: {
    families: ['Nunito Sans:400,600,800', 'sans-serif', 'Source Sans Pro:400,700']
  }
})

export default {
  assets,
  await: wait,
  cards,
  content,
  dummy,
  form,
  layout,
  list,
  navigation,
  progress
}
