import { Component } from '@angular/core';
import { DefaultHomeLayoutComponent } from '../default-home-layout/layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DefaultHomeLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
