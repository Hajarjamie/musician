import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginDto } from './models/login-dto';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    console.log("it will work when page open");
  }

  onLogin() {
    const dto: any = new LoginDto();
    dto.email = this.form.controls.email.value;
    dto.password = this.form.controls.password.value;
    
    this.authService.login(dto).subscribe(res => {
      if (res) {
        this.router.navigateByUrl('home');
      }
    });
  }

}
