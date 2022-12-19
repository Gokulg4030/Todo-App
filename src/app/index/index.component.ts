import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  user="";
  task="";
  uname="";

  show=""

  uname1=""
  task1:any

  constructor(private ds:DataService) { 
  this.user=this.ds.currentuser
  this.uname1=this.ds.currentuser
  this.task1=this.ds.getTask(this.uname1)
  console.log(this.task1);
  }

  ngOnInit(): void {
  }

  add()
  {
   var task = this.task
   var uname = this.uname

   const result = this.ds.add(task,uname);

   if(result)
   {
    alert('Task added successfully')
   }
   else{
    alert('Enter Registered Name')
   }
  }

  logout()
  {
    var user = this.user;
    const result =this.ds.logout(user);

    if(result)
    {
      alert('Task Deleted Permanently')
    }
    else{
      alert('Failed')
    }

  }
  }
