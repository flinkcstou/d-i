import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MatSortHeaderIntl {
  /**
   * Stream that emits whenever the labels here are changed. Use this to notify
   * components if the labels have changed after initialization.
   */
  readonly changes: Subject<void> = new Subject<void>();

  constructor() {
    // console.error('MatSortHeaderIntl init');
  }

}

/** @docs-private */
export function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl: MatSortHeaderIntl) {
  return parentIntl || new MatSortHeaderIntl();
}

/** @docs-private */
export const MAT_SORT_HEADER_INTL_PROVIDER = {
  // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
  provide: MatSortHeaderIntl,
  deps: [[new Optional(), new SkipSelf(), MatSortHeaderIntl]],
  useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY,
};
