import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DefaultSignupLayoutComponent } from '../../components/default-signup-layout/default-signup-layout.component';
import { SecondaryInputComponent } from '../../components/secondary-input/secondary-input.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultSignupLayoutComponent,
    ReactiveFormsModule,
    SecondaryInputComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signUpForm: FormGroup;
  constructor() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }
}
