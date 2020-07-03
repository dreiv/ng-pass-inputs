import { Component, Input } from '@angular/core';
import { SelectConfig } from './select.config';

@Component({
  selector: 'app-select',
  template: `
    <p><b>Size</b> {{ size }}</p>
    <p><b>Placement:</b> {{ placement }}</p>
  `
})
export class SelectComponent {
  @Input()
  size: SelectConfig['size'];
  @Input()
  placement: SelectConfig['placement'];

  constructor(private config: SelectConfig) {
    this.size = config.size;
    this.placement = config.placement;
  }
}
