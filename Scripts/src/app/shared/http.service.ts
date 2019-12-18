import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getMethod(getUrl: string, model) {
    //TODO: Figure out how to abstract the get methods
    // this.http.get<model[]>(getUrl);
    // .subscribe(data => {
    //   this.collections = data
    // });
  }

  postMethod(postUrl: string, body) {
    //https://stackoverflow.com/questions/51566355/angular-6-post-request-to-net-core-api
    const headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(postUrl, JSON.stringify(body), {
      headers: headerOptions
    })
      .subscribe(
      (val) => {
          console.log('POST call successful value returned in body', val);
      },
      (err: HttpErrorResponse) => {
          console.log('POST call in error', err);
          if (err.error instanceof ErrorEvent) {
            console.error('Client Side Error :', err.error.message);
         } else {
           console.error('Server Side Error :', err);
         }

         //TODO: Implement this?
        // return throwError('There is a problem with the service. We are notified & working on it.Please try again later.');
      },
      () => {
          console.log('The POST observable is now completed.');
      });
  }
}
