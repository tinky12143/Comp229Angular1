import { Component, OnInit } from '@angular/core';
import { LoginService } from '../app-services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private loginService: LoginService) {
    this.username = '';
    this.password = '';
  }
  
  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loginService.loginUser({username: this.username, password: this.password})
      .subscribe(
        response => {
          console.log(response);
          // Here you would usually store the token and redirect the user
        },
        error => console.error('Error!', error)
      );
  }
}
