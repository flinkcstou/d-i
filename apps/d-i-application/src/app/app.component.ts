import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'd-i-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'd-i-application';

  constructor(public route: ActivatedRoute,
              public router: Router) {
  }

  goToFolder() {
    this.router.navigate(['/folder/fsdfsd']).then();
  }

  goToFolderMobile() {
    this.router.navigate(['/folder-mobile/fsdfsd']).then();
  }
}
