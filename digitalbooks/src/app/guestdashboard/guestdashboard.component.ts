import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-guestdashboard',
  templateUrl: './guestdashboard.component.html',
  styleUrls: ['./guestdashboard.component.css']
})
export class GuestdashboardComponent implements OnInit {
  title!:string;
  category!:string;
  constructor(private _route:Router, private _service: NgserviceService, private _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = this._activatedRouter.snapshot.params['title'];
    this.category = this._activatedRouter.snapshot.params['category'];
    console.log('title:'+this.title+'category:'+this.category);
  }

}
