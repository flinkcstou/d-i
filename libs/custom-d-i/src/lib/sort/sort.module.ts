/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_SORT_HEADER_INTL_PROVIDER } from './mat-sort-header-intl';
import { MatSortDirective } from './mat-sort.directive';

@NgModule({
  imports: [CommonModule,],
  declarations: [MatSortDirective],
  exports: [MatSortDirective],
  providers: [MAT_SORT_HEADER_INTL_PROVIDER],
})
export class MatSortModule {
}
