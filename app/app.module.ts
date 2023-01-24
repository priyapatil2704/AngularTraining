import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';


const route:Routes=[
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'users',component:UsersComponent},
  //  {path:'user/:id',component:UserComponent,
  //  children:[
  //   {path:'address',component:AddressComponent},
  //   {path:'company',component:CompanyComponent}
  //  ]},
  {path:'contact',component:ContactComponent},
  {path:'**',redirectTo:'contact'}];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ContactComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
