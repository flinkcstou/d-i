import {Component, Optional} from '@angular/core';
import {OptionalService} from '../services/optional.service';

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.css']
})

export class OptionalComponent {
  constructor(@Optional() public optional?: OptionalService) {
    console.error(optional);

  }
}

// The OptionalService isn't provided here, in the @Injectable()
// providers array, or in the NgModule. If you remove @Optional()
// from the constructor, you'll get an error.



