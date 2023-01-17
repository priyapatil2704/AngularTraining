import { Component } from "@angular/core";

@Component({
  selector:'app-root',
  /* inline template
  template:`<h1>Hi
    Angular tutorial
  </h1>`
  */
 templateUrl:'./app.component.html',
 styles:['h1 {font-style:italic}']
})
export class AppComponent{
  title='hii';
}