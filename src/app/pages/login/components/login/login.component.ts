import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from 'src/app/core/services/loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  constructor(private fb:FormBuilder, private router: Router,private loginService: LoginService, public translateService: TranslateService,){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      isAdmin: [false],
    })
  }

    // Get all Form Controls
    get form() {
      return this.loginForm.controls ;
    }

  submit(): void{
    if(this.loginForm.valid && this.loginValidation()){
       if(this.form['isAdmin'].value){
        this.loginService.setRole("admin");
        localStorage.setItem("role", "admin");
        this.router.navigate(['../admin']);
       }else{
        this.loginService.setRole("user");
        localStorage.setItem("role", "user")
        this.router.navigate(['../user']);
       }
    }
  }

  loginValidation(): boolean{
    const userName = this.form['username'].value.trim().toLowerCase();
    const password = this.form['password'].value.trim().toLowerCase();
    if (userName && password === 'user'){
      return true
    } 
    if (userName && password === 'admin') {
      this.form['isAdmin'].setValue(true);
      return true
    } 
    this.setUnAuthorizedError(true);
    return false;
  }

  setUnAuthorizedError(userStatus: boolean): void{
    this.loginForm.setErrors({'notAuthorized': userStatus});
  }
}
