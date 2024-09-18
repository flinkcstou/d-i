import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppComponent} from '../../app.component';


@Component({
  selector: 'mybpm-bo-instance-form-folder-mobile',
  templateUrl: './folder-mobile.component.html',
  styleUrls: ['./folder-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class FolderMobileComponent {


  constructor(private route: ActivatedRoute,
              private router: Router,
              private appComponent: AppComponent
  ) {
  }
}
