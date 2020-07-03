import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html'
})
export class SelectComponent {
  @Input()
  size: 'sm' | 'md' | 'lg' = 'md';
  @Input()
  placement: 'top' | 'bottom' | 'right' | 'left' = 'bottom';
}
