import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule ,HttpClient, HttpErrorResponse, HttpParams ,HttpResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { environment }   from '../../environments/environment';
import { LatlongModel }   from '../models/latlong';


@Injectable({
  providedIn: 'root'
})
export class LatlongService {

  constructor(private http: HttpClient) { }

  public getLatlong(gendate:string,UserId:string)
  {
  
    let url= environment.apiEndpoint + "Latlong";

    const param = new HttpParams({});
    const params = new HttpParams().set('gendate', gendate).set('UserId', UserId);;
     return this.http.get<any>(url,{params}).pipe(tap(data => data),
     catchError(this.handleError));

  }


  public  UpdateLatLong(objlst:LatlongModel[])
  {
    console.log(objlst);

    

    let url= environment.apiEndpoint +"Latlong/UpdateLatlong";
    return this.http.post<any>(url, objlst).pipe(tap(data => data),
              catchError(this.handleError)
              );
  }
  
  private handleError(error: HttpErrorResponse) {
    console.log(error.error.message);
    if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };
}
