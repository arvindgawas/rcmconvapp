import { Component, OnInit } from '@angular/core';
import { reportmodel} from '../models/reportmodel';
import {formatDate} from '@angular/common';
import { LatlongreportService } from '../latlongreport/latlongreport.service';
import {ddlistreport,ddlregion,ddllocation} from '../models/ddllistreport';

@Component({
  selector: 'app-latlongreport',
  templateUrl: './latlongreport.component.html',
  styleUrls: ['./latlongreport.component.css']
})
export class LatlongreportComponent implements OnInit {

  reportmodel : reportmodel = new reportmodel();
  ddlistreport : ddlistreport = new ddlistreport();
 

  constructor(public latlongreportser:LatlongreportService) { }

  ngOnInit(): void {
    this.reportmodel.fromdate  = new Date();
    this.reportmodel.todate  = new Date();

    this.latlongreportser.getreportddlist("")
    .subscribe({
      next: (data) =>  {
        this.ddlistreport=data.data;
        console.log(data.data);
        console.log(this.ddlistreport.lstregionmast);
      },
      complete: () => {},
      error: (error) => {
            alert(error);
            console.log("Error Validating User.", error);
      }
      });
 
  }

  regionchange()
  {
    this.latlongreportser.getreportddlist(this.reportmodel.region)
    .subscribe({
      next: (data) =>  {
        this.ddlistreport=data.data;
        console.log(data.data);
        console.log(this.ddlistreport.lstregionmast);
      },
      complete: () => {},
      error: (error) => {
            alert(error);
            console.log("Error Validating User.", error);
      }
      });

  }


  reportsubmit()
  {
    this.latlongreportser.getLatlongreportnew(this.reportmodel);
    /*
    this.latlongreportser.getLatlongreport(this.reportmodel)
    .subscribe({
      next: (data) =>  {
        console.log(data.data);
      
      },
      complete: () => {},
      error: (error) => {
            alert(error);
            console.log("Error Validating User.", error);
      }
      });
      */
  }
}
