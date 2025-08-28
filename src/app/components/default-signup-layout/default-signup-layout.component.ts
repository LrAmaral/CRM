import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-signup-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-signup-layout.component.html',
  styleUrl: './default-signup-layout.component.scss',
})
export class DefaultSignupLayoutComponent {
  @Input() signup: string = '';
  @Input() primaryBtnText: string = '';
  @Input() secondaryBtnText: string = '';
}
