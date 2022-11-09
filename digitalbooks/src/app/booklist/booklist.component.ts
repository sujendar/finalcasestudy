import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookdetails } from '../bookdetails';
import { NgserviceService } from '../ngservice.service';
import { Responseparams } from '../responseparams';
import { Subscribebook } from '../subscribebook';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
subscribebook:Subscribebook=new Subscribebook();
responseparms:Responseparams=new Responseparams();
  booklist: Array<Bookdetails> = [];
  constructor(private _route: Router, private _service: NgserviceService) { }
  ngOnInit(): void {
   
    this.getBooks();
  }

  getBooks() {
    this._service.fetchBookListFromRemote().subscribe(
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

  goToSubscribeBook(bookid:number){
    let userId =localStorage.getItem('userDetails')!;
    this.subscribebook.bookId=bookid;
    this.subscribebook.userId=Number(userId);
    this._service.addSubdcribedBookToRemote(this.subscribebook).subscribe
(
data =>{
  this.responseparms=data;
  if(this.responseparms.errorcode=="200"){
  alert("Book subscribed successfully");
  }else{
    alert(this.responseparms.errormessage);
  }
  this._route.navigate(['/readerdashboard']);
},

error =>{
  console.log("Error"+error);
  this._route.navigate(['/readerdashboard']);
}
)
  }
  goToExit(){
    this._route.navigate(['/readerdashboard']);
  }
}

 


 


