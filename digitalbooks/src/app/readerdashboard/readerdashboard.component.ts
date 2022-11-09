import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Bookdetails } from '../bookdetails';
import { NgserviceService } from '../ngservice.service';
import { Responseparams } from '../responseparams';

@Component({
  selector: 'app-readerdashboard',
  templateUrl: './readerdashboard.component.html',
  styleUrls: ['./readerdashboard.component.css']
})
export class ReaderdashboardComponent implements OnInit {
  responseparms:Responseparams=new Responseparams();
  booklist: Array<Bookdetails> = [];
  constructor(private _route: Router, private _service: NgserviceService,public authoraddbook: MatDialog) { }
  ngOnInit(): void {
   
    this.getBooks();
  }

  getBooks() {
    let userId =localStorage.getItem('userDetails')!;
    this._service.fetchSubdcribedBookListFromRemote(userId).subscribe(
      data => this.booklist = data, error => console.log("Exception occurred "+error),
    )
  }
  isEmpty()
  {
    if (this.booklist == null)
    {
      return true;
    }
    else { return false; }
  }

 

  goToUnsubscribeBook(bookid: number) {
    let userId =localStorage.getItem('userDetails')!;
    this._service.unSubscribedBookToRemote(bookid,userId).subscribe
(
data =>{
  this.responseparms=data;
  if(this.responseparms.errorcode=="200"){
  alert("Book unsubscribed successfully");
  }else{
    alert(this.responseparms.errormessage);
  }
  this.getBooks();
},

error =>{
  console.log("Error"+error);
  this.getBooks();
}
)
  }
  goToSubscribebook() {
    this._route.navigateByUrl("/booklist");
  }
  goToSearchbook() {
    this._route.navigateByUrl("/search");
  }
  goToViewBook(id: number){
    this._route.navigate(['/readerviewbook', id]);

  }
  Logout(){
    this._route.navigateByUrl('/login');
     }
}
