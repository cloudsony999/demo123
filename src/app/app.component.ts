import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  anudip = 'OUR APP';

  ename="amitava";
  age=50;

  display()
  {
    alert('Welcome to Anudip!!!!')
  }
  uname=new FormControl("");
  updateName()
  {
    this.uname.setValue("amitava");
  }

  leds:any=
  {
    title:"55 inch led",
    brand:"Sony",
    price:'45000',
    description:'This is a Google TV'
  }

  audio:any=
  [
    {
    title:"home theater",
    brand:"Sony",
    price:'40000',

    },
    {
    title:"headphone",
    brand:"Bose",
    price:'30000',


    },
    {
    title:"party speaker",
    brand:"JBL",
    price:'30000',


    }

  ]








  



}
