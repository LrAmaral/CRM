import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputSearchComponent } from '../input-search/input-search.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, InputSearchComponent, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
