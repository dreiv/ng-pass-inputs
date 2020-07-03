import { Component, OnInit } from '@angular/core';

import { SelectConfig, setSelectConfig } from '../select/select.config';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  providers: [
    {
      provide: SelectConfig,
      useValue: setSelectConfig({
        size: 'sm'
      })
    }
  ]
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
