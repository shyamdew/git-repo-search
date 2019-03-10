import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Page1Component } from './page1/page1.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(public router: Router ){
    this.router.navigate(["page1"]);
  }
}
