import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Responseparams } from '../responseparams';

@Component({
  selector: 'app-readerviewbook',
  templateUrl: './readerviewbook.component.html',
  styleUrls: ['./readerviewbook.component.css']
})
export class ReaderviewbookComponent implements OnInit {
  id!: number;
  responseParams =new Responseparams();
  constructor(private _route:Router, private _service: NgserviceService, private _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._activatedRouter.snapshot.params['id'];
    console.log(this.id);
   this._service.fetchBookContentByIdFromRemote(this.id).subscribe(
    data=>{
      console.log("data received");
      this.responseParams = data;
    },
      error => console.log("Exception Occured")
    )
  }
  gotoReaderdashboard(){
    this._route.navigateByUrl('readerdashboard');
  }

}
