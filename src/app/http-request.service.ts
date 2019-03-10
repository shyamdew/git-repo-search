import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  constructor(private http: HttpClient) {
    console.log("Http service request initialized successfully")
   }
   public get(url, callback, errCallback?) {
     this.http.get(url).subscribe(
      (data) => {
        callback(data);
      },
      (error) => {
        errCallback(error);
      });
  }
}
