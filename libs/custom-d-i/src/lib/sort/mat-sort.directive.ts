import {Directive} from '@angular/core';
import {MatSortHeaderIntl} from './mat-sort-header-intl';

@Directive({
  selector: '[matMatSort]',
  exportAs: 'matSort',
})
export class MatSortDirective {


  constructor(private matSort: MatSortHeaderIntl) {
    // console.error(matSort);
  }
}
