'use strict'

import * as arrowRegular from './arrow-regular'
import * as arrowMedium from './arrow-medium'
import * as arrowBold from './arrow-bold'
import * as arrowOval from './arrow-oval'

import * as arrowMirroringLight from './arrow-mirroring-bold'
import * as arrowMirroringMedium from './arrow-mirroring-medium'
import * as arrowMirroringBold from './arrow-mirroring-bold'
import * as arrowMirroringExtraBold from './arrow-mirroring-extrabold'

import * as checkRegular from './check-regular'
import * as checkMedium from './check-medium'
import * as checkBold from './check-bold'

export default {
  ...arrowBold, ...arrowMedium, ...arrowRegular, ...arrowOval,
  ...arrowMirroringLight, ...arrowMirroringMedium, ...arrowMirroringBold, ...arrowMirroringExtraBold,

  ...checkRegular, ...checkMedium, ...checkBold
}
