import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'mybpm-bo-instance-form-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderComponent {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private appComponent: AppComponent
  ) {
  }

}
