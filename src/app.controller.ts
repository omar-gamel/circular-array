import { Controller, Get } from '@nestjs/common';
import { CircularArray } from './circular-array';

@Controller()
export class AppController {
  @Get('circularArray')
  circularArray() {
    const gizmos = new CircularArray();

    gizmos.push('gizmo1'); //   [gizmo1]
    console.log(gizmos);

    gizmos.push('gizmo2'); //   [gizmo1, gizmo2]
    console.log(gizmos);

    gizmos.push('gizmo3'); //   [gizmo1, gizmo2, gizmo3]
    console.log(gizmos);

    gizmos.push('gizmo4'); //   [gizmo2, gizmo3, gizmo4]
    console.log(gizmos);

    gizmos.unshift('gizmo5'); // [gizmo5, gizmo2, gizmo3]
    console.log(gizmos);
  }
}
