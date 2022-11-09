import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-authoraddbook',
  templateUrl: './authoraddbook.component.html',
  styleUrls: ['./authoraddbook.component.css']
})
export class AuthoraddbookComponent implements OnInit {
  logo!:string;
  imageUrl!:string;
  bookForm!:FormGroup;
  selectedFile!: File;
  filebytes:any;
  event:any;
    constructor(private formBuilder:FormBuilder,private _route: Router,private _service: NgserviceService,private dialogRef:MatDialogRef<AuthoraddbookComponent>) { }
  
    ngOnInit(): void {
      let userId =localStorage.getItem('userDetails');
      this.bookForm=this.formBuilder.group({
        title:['',Validators.required],
        logo:['',Validators.required],
        category:['',Validators.required],
        publisheddate:['',Validators.required],
        price:['',Validators.required],
        publisher:['',Validators.required],
        active:['',Validators.required],
        author:['',Validators.required],
        contents:['',Validators.required],
        authorId:[userId],
        filedata:['']
        
      
      })
  
    }
    public onFileChanged(event) {
      //Select File
      this.selectedFile = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = () => {
          this.filebytes=reader.result;
          console.log(this.filebytes);
      };
    }
    addBook(){
      console.log(this.bookForm.value);
      this.bookForm.patchValue({
        filedata:this.filebytes
      });
      console.log(this.bookForm.value);
      //this.bookForm.get(filedata).setValue(this.selectedFile.arrayBuffer);
      //this.bookForm.filedata=this.selectedFile.arrayBuffer;
      this._service.addBookToRemote(this.bookForm.value).subscribe
(
  data =>{
    alert("Book added successfully");
    this.dialogRef.close();
    this._service.fetchBookListFromRemote();
  },
  error =>console.log("Error"+error)
)
    }
    exit(){
      console.log("its in page");
      this._route.navigateByUrl('/authordashboard');
    }
}
