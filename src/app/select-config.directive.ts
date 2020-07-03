import { Directive } from '@angular/core';
import { SelectConfig, setSelectConfig } from './select/select.config';

@Directive({
  selector: '[selectConfig]',
  providers: [{
    provide: SelectConfig,
    useValue: setSelectConfig({
      size: 'lg',
      placement: 'right'
    })
  }]
})
export class SelectConfigDirective {

  constructor() { }

}
