import { Injectable } from '@angular/core';
import { TourService } from 'ngx-tour-core';

import { INgxmStepOption } from './step-option.interface';
import { TourBackdropService } from './tour-backdrop.service';
import { Router } from '@angular/router';

@Injectable()
export class NgxmTourService extends TourService<INgxmStepOption> {

  constructor(
    router: Router,
    private tourBackdrop: TourBackdropService
  ) {
    super(router);
  }

  protected hideStep(step): void {
    const anchor = this.anchors[step && step.anchorId];
    if (!anchor) {
      this.tourBackdrop.close();
    } else {
      anchor.hideTourStep();
      this.stepHide$.next(step);
    }
  }
}
