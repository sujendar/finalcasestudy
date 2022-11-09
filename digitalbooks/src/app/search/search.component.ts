import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Search } from '../search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search = new Search();
  constructor(private _route: Router,private _service: NgserviceService) { }

  ngOnInit(): void {
  }

  searchformsubmit()
{
  this._route.navigate(['/readerlistbook', this.search.title,this.search.category,this.search.author,this.search.publisher]);
/*this._service.fetchBookListByserachFromRemote(this.search).subscribe
(
  data =>{
    console.log("Data added successfully");
    this._route.navigate(['studentlist']);
  },
  error =>console.log("Error")
)*/
}


  gotolist() {
    this._route.navigate(['studentlist']);
  }

}
