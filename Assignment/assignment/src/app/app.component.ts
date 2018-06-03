import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //@addItem() isResetting = false;
  

  constructor(
  ) { }

  @ViewChild('loginForm') loginForm: NgForm;
  

  ngOnInit() {
    
  }
  reset(){
  
    window.location.reload();
    
    
    }
  
  addItem() {
    alert("Login Success")
  }
  nameList=[    
       
    {    
      "Id": 1,    
      "Name": "Basic"    
    },    
    {    
      "Id": 2,    
      "Name": "Pro"    
    },    
    {    
      "Id": 3,    
      "Name": "Advanced"    
    },    
      
  ]    
  
}
