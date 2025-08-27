import { Component, Input } from '@angular/core';
// import logo from '../../../assets/images/logo.svg';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss',
})
export class DefaultLoginLayoutComponent {
  @Input() login: string = '';
  @Input() primaryBtnText: string = '';
  @Input() secondaryBtnText: string = '';
}
