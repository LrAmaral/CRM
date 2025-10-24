import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [MatIconModule, ReactiveFormsModule],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss',
})
export class InputSearchComponent {
  searchForm = new FormGroup({
    search: new FormControl('', [
      Validators.required,
      Validators.nullValidator,
    ]),
  });

  search() {
    if(this.searchForm.invalid) return
    // Lógica para pesquisa...
  }
}
