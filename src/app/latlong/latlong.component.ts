import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { LatlongService } from '../latlong/latlong.service';
import { LatlongModel } from '../models/latlong';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-latlong',
  templateUrl: './latlong.component.html',
  styleUrls: ['./latlong.component.css']
})
export class LatlongComponent implements OnInit {

  LatlongModels: LatlongModel[];
  lstacceptLatlong: LatlongModel[]=[];
  gendate: Date = new Date();
  userdata : any ;
  sgendate:string;
  dataSource: any;
  @ViewChild(MatSort,{static: true}) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator ;


  displayedColumns: string[] = ['callno','gendate','region','location','hublocation','custcustomercode','clientname','callstatus','flagAllowLocException']
  

  constructor(public LatlongService:LatlongService) { }

  ngOnInit(): void {
    
    this.userdata = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.sgendate = formatDate(this.gendate, 'yyyy/MM/dd', 'en');
    this.LatlongService.getLatlong(this.sgendate,this.userdata.name)
    .subscribe({
      next: (data) =>  {
        console.log(data.data);
        this.LatlongModels = [];
        this.LatlongModels = data.data;
        this.dataSource = new MatTableDataSource(this.LatlongModels);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      complete: () => {},
      error: (error) => {
            alert(error);
            console.log("Error Validating User.", error);
      }
      });
  }

  onFocusOutEvent()
  {
    this.LatlongService.getLatlong(this.gendate.toString(),this.userdata.name)
    .subscribe({
      next: (data) =>  {
        console.log(data.data);
        this.LatlongModels = data.data;
        this.dataSource = new MatTableDataSource(this.LatlongModels);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      complete: () => {},
      error: (error) => {
            alert(error);
            console.log("Error Validating User.", error);
      }
      });
  }

  editedselet(element : LatlongModel)
  {
    console.log(element);
    if (this.lstacceptLatlong.some((a => a.callno ==  element.callno)) )
    {
      
      this.lstacceptLatlong = this.lstacceptLatlong.filter( a=> a.callno != element.callno);
     
      if (element.flagAllowLocException)
      {
        this.lstacceptLatlong.push(element);
      }
    }
    else
    {
      
        this.lstacceptLatlong.push(element);
    }
    console.log( this.lstacceptLatlong);
  }

  applyFilter(filterValue: string)
  {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  acceptsubmit()
  {
    this.LatlongService.UpdateLatLong(this.lstacceptLatlong)
    .subscribe({
      next: (data) =>  {
        console.log(data.data);
        alert("Data Saved Successfully.");
        ////this.ngOnInit();
      },
      complete: () => {},
      error: (error) => {
            alert(error);
            console.log("Error Updating Latlong.", error);
      }
      });
  }

  Refresh()
  {
    this.ngOnInit();
  }
}


