import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  userName!:string;
  constructor(private _route: Router) { }

  ngOnInit(): void {
     this.userName =JSON.parse(localStorage.getItem('userName')!);
  }
  Logout(){
    this._route.navigateByUrl('/login');
     }
}
