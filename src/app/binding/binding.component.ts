import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  pageTitle:string="Data binding in angular";
  imageUrl1:string="assets/images/bengaluru.avif";
  imageUrl2:string="assets/images/singapore.png";
  buttonStatus:boolean=false;
  username:string='';
  constructor() { }

  ngOnInit(): void {
  }
  changeTitle(){
    this.pageTitle="data binding";
  }
}
