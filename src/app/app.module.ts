import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpRequestService } from './http-request.service';


const routes: Routes = [
  { path: 'page1', component: Page1Component }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,NgxPaginationModule
                , RouterModule.forRoot(routes, { enableTracing: true } // <-- debugging purposes only
    ) ],
  declarations: [ AppComponent, routes.map((re)=>{return re.component}) ],
  providers:[HttpRequestService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
