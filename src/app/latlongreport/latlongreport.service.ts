import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule ,HttpClient, HttpErrorResponse, HttpParams ,HttpResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { environment }   from '../../environments/environment';
import { reportmodel }   from '../models/reportmodel';
import {formatDate} from '@angular/common';
import {ddlistreport,ddlregion,ddllocation} from '../models/ddllistreport';

@Injectable({
  providedIn: 'root'
})
export class LatlongreportService {

  constructor(private http: HttpClient) { }

  public getLatlongreport(objreport :reportmodel)
  {
  
    let url= environment.apiEndpoint + "Latlong/GetLatlongReport";

    let sfromdate = formatDate(objreport.fromdate, 'yyyy/MM/dd', 'en');
    let stodate = formatDate(objreport.todate, 'yyyy/MM/dd', 'en');

    const param = new HttpParams({});
    const params = new HttpParams().set('fromdate',sfromdate).set('todate', stodate)
    .set('user', objreport.user).set('region',objreport.region).set('location',objreport.location)
     return this.http.get<any>(url,{params}).pipe(tap(data => data),
     catchError(this.handleError));

  }

  public getLatlongreportnew(objreport :reportmodel)
  {
  
    let url= environment.apiEndpoint + "Latlong/GetLatlongReportnew";

    let sfromdate = formatDate(objreport.fromdate, 'yyyy/MM/dd', 'en');
    let stodate = formatDate(objreport.todate, 'yyyy/MM/dd', 'en');

    const param = new HttpParams({});
    const params = new HttpParams().set('fromdate',sfromdate).set('todate', stodate)
    .set('user', objreport.user).set('region',objreport.region).set('location',objreport.location)
     const options = {params, responseType: 'blob' as 'blob'};
     this.http.get(url,options)
      .subscribe((Response)=>{
       console.log(95959595);
        console.log(Response);
        var a = document.createElement("a");
        let blob = new Blob([Response], { type: "application/octet-stream"});
        a.href = URL.createObjectURL(blob);
        a.download = "LatLongReport.xlsx";
        // start download
        a.click();
      })

  }


  public getreportddlist(region:string)
  {
    let url= environment.apiEndpoint+"Latlong/getddlistreport";

    const param = new HttpParams({});
    const params = new HttpParams().set('region',region);
    
    return this.http.get<any>(url,{params}).pipe(tap(data => data),
    catchError(this.handleError));
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
