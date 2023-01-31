import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _builder :FormBuilder,private _userAuth : UserAuthService,private _router:Router) { }

  ngOnInit(): void {
  }

  users:any

  loginForm=this._builder.group({
    username:["",[Validators.required]],
    password:["",[Validators.required]]
  })

  invalid=false
  loading=false
  handleLogin(){
     this.invalid=false
    let username =this.loginForm.value.username;
    let password=this.loginForm.value.password;

    this._userAuth.getUsers().subscribe(data=>{
      let userFound=false;
      let user: any;
      data.forEach((e:any)=>{
        if (e.name.toLowerCase()===username?.toLowerCase() && e.password===password) {
          userFound=true
          user=e
        }
      })

      if (userFound) {
        this.loading=true
        setTimeout(() => {

          localStorage.setItem("loggedInUser",JSON.stringify(user))
            this._router.navigate(['profile'])
          
        }, 2000);
      }
      else{
        this.loading=true
        setTimeout(() => {
          
          this.invalid=true;
          this.loading=false
        }, 2000);
      }

      
    })
  }
}
