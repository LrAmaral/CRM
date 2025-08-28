import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DefaultSignupLayoutComponent } from '../../components/default-signup-layout/default-signup-layout.component';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [DefaultSignupLayoutComponent, ReactiveFormsModule, PrimaryInputComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm: FormGroup;
  constructor() {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(),
      confirmPassword: new FormControl(),
    });
  }
}
