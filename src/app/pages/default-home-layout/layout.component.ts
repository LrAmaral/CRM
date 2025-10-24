import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent],
  templateUrl: './default-home-layout.component.html',
  styleUrl: './default-home-layout.component.scss',
})
export class DefaultHomeLayoutComponent {}
