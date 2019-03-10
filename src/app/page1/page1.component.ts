import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../http-request.service';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  private page: number = 1;
  private error: boolean = false;
  private repoSearchInput: string;
  private loading: boolean;
  private repoList: any;
  private numberOfPages;
  constructor(public httpRequestService: HttpRequestService) { 
    // this.repoSearchInput = "TEST";
    // this.searchRepository();
  }
  private searchRepository(){
    console.log("repoSearchInput", this.repoSearchInput);
    if(!this.repoSearchInput || !this.repoSearchInput.trim()){
      console.error("User has not entered anything")
      return;
    }
    this.loading = true;
    this.error = false;
    this.repoList = null;
    this.httpRequestService.get("https://api.github.com/search/repositories?q="+this.repoSearchInput,(resp)=>{
      this.loading = false;
      if(!resp.incomplete_results){
        this.repoList = resp.items;
        this.numberOfPages = (window.innerWidth > 991) ? 2 : 1;
      } else {
        this.error = true;
        // Handle for error response
      }
      console.log(resp);
    },(err)=>{
      this.loading = false;
      console.log(err);
      this.error = true;
    })
  }
  ngOnInit() {
  }
  openWebsiteInNewTab(url){
    console.log(url);
    if(!url){
      return;
    }
    var win = window.open(url, '_blank');
    win.focus();
  }
  pageChanged(resp){
    console.log(resp);
    this.page= resp;
  }
}
