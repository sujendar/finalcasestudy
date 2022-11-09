import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Bookdetails } from './bookdetails';
import { Search } from './search';
import { Subscribebook } from './subscribebook';

class Userdetails{}
@Injectable({
  providedIn: 'root'
})
export class NgserviceService {


  constructor(private _http: HttpClient) { }

  /*fetchUserDetailsFromRemote(userName: String,userPassword:string): Observable<any>{
    return this._http.post<any>('http://userservice1-env.eba-pmwuiuij.ap-northeast-1.elasticbeanstalk.com/api/v1/digitalbooks/signin/'+userName+'/'+userPassword,null);
  }
  addUserDetailsToRemote(userDetails: Userdetails): Observable<any>{
    return this._http.post<any>('http://userservice1-env.eba-pmwuiuij.ap-northeast-1.elasticbeanstalk.com/api/v1/digitalbooks/signup',userDetails);
  }
  fetchBookListFromRemote(): Observable<any>{
    return this._http.get<any>('http://bookservice-env.eba-mr3uksts.ap-northeast-1.elasticbeanstalk.com/api/v1/digitalbooks/search?category&title&author&price&publisher');
  }
  addBookToRemote(booksDetails :Bookdetails): Observable<any>{
    return this._http.post<any>('http://bookservice-env.eba-mr3uksts.ap-northeast-1.elasticbeanstalk.com/api/v1/digitalbooks/author/books',booksDetails);
  }
  updateBookToRemote(bookid:number,booksDetails :Bookdetails): Observable<any>{
    return this._http.post<any>('http://bookservice-env.eba-mr3uksts.ap-northeast-1.elasticbeanstalk.com/api/v1/digitalbooks/author/books/'+bookid,booksDetails);
  }
  fetchBookDetailsByIdFromRemote(bookid:number):Observable<any>{
    return this._http.get<any>('http://bookservice-env.eba-mr3uksts.ap-northeast-1.elasticbeanstalk.com/api/v1/digitalbooks/books/details/'+bookid);
  }
  fetchSubdcribedBookListFromRemote(userid:string):Observable<any>{
    return this._http.get<any>('http://bookservice-env.eba-mr3uksts.ap-northeast-1.elasticbeanstalk.com/api/v1/digitalbooks/readers/books/'+userid);
  }
  addSubdcribedBookToRemote(subcribedetails:Subscribebook):Observable<any>{
    return this._http.post<any>('http://bookservice-env.eba-mr3uksts.ap-northeast-1.elasticbeanstalk.com/api/v1/digitalbooks/subscribe',subcribedetails);
  }
  unSubscribedBookToRemote(bookid:number,userid:string):Observable<any>{
    return this._http.get<any>('http://bookservice-env.eba-mr3uksts.ap-northeast-1.elasticbeanstalk.com/api/v1/digitalbooks/readers/books/cancelsub/'+userid+'/'+bookid);
  }
  fetchBookContentByIdFromRemote(bookid:number):Observable<any>{
    return this._http.get<any>('http://bookservice-env.eba-mr3uksts.ap-northeast-1.elasticbeanstalk.com/api/v1/digitalbooks/readers/books/viewcontent/'+bookid);
  }
  fetchBookListByserachFromRemote(searchcompo:Search): Observable<any>{
    return this._http.get<any>('http://bookservice-env.eba-mr3uksts.ap-northeast-1.elasticbeanstalk.com/api/v1/digitalbooks/search?category='+searchcompo.category+'&title='+searchcompo.title+'&author='+searchcompo.author+'&price='+searchcompo.price+'&publisher='+searchcompo.publisher);
  }*/
  fetchUserDetailsFromRemote(userName: String,userPassword:string): Observable<any>{
    return this._http.post<any>('http://localhost:5000/api/v1/digitalbooks/signin/'+userName+'/'+userPassword,null);
  }
  addUserDetailsToRemote(userDetails: Userdetails): Observable<any>{
    return this._http.post<any>('http://localhost:5000/api/v1/digitalbooks/signup',userDetails);
  }
  fetchBookListFromRemote(): Observable<any>{
    return this._http.get<any>('http://localhost:5001/api/v1/digitalbooks/search?category&title&author&price&publisher');
  }
  addBookToRemote(booksDetails :Bookdetails): Observable<any>{
    return this._http.post<any>('http://localhost:5001/api/v1/digitalbooks/author/books',booksDetails);
  }
  updateBookToRemote(bookid:number,booksDetails :Bookdetails): Observable<any>{
    return this._http.post<any>('http://localhost:5001/api/v1/digitalbooks/author/books/'+bookid,booksDetails);
  }
  fetchBookDetailsByIdFromRemote(bookid:number):Observable<any>{
    return this._http.get<any>('http://localhost:5001/api/v1/digitalbooks/books/details/'+bookid);
  }
  fetchSubdcribedBookListFromRemote(userid:string):Observable<any>{
    return this._http.get<any>('http://localhost:5001/api/v1/digitalbooks/readers/books/'+userid);
  }
  addSubdcribedBookToRemote(subcribedetails:Subscribebook):Observable<any>{
    return this._http.post<any>('http://localhost:5001/api/v1/digitalbooks/subscribe',subcribedetails);
  }
  unSubscribedBookToRemote(bookid:number,userid:string):Observable<any>{
    return this._http.get<any>('http://localhost:5001/api/v1/digitalbooks/readers/books/cancelsub/'+userid+'/'+bookid);
  }
  fetchBookContentByIdFromRemote(bookid:number):Observable<any>{
    return this._http.get<any>('http://localhost:5001/api/v1/digitalbooks/readers/books/viewcontent/'+bookid);
  }
  fetchBookListByserachFromRemote(searchcompo:Search): Observable<any>{
    return this._http.get<any>('http://bookservice-env.eba-mr3uksts.ap-northeast-1.elasticbeanstalk.com/api/v1/digitalbooks/search?category='+searchcompo.category+'&title='+searchcompo.title+'&author='+searchcompo.author+'&price='+searchcompo.price+'&publisher='+searchcompo.publisher);
  }
}

