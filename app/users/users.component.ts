import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any[]=[
    {id:1,uname:'Priyanka',city:'Kalyan'},
    {id:2,uname:'Sneha',city:'Thane'},
    {id:3,uname:'Pooja',city:'Mulund'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
