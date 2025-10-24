import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-default-home-layout',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent],
  templateUrl: './default-home-layout.component.html',
  styleUrl: './default-home-layout.component.scss',
})
export class DefaultHomeLayoutComponent {}
