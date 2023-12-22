import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from '../../highlight.directive';
import { ConfirmDirective } from '../../confirm.directive';
import { NoOpenDirective } from '../../no-open.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HighlightDirective,
    ConfirmDirective,
    NoOpenDirective,
  ],
  templateUrl: './app.component.html',

  styles: [],
})
export class AppComponent {
  title = 'Sandbox';
}
