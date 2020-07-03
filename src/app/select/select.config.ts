import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SelectConfig {
  size: 'sm' | 'md' | 'lg' = 'md';
  placement: 'top' | 'bottom' | 'right' | 'left' = 'bottom';
}

export function setSelectConfig(config: Partial<SelectConfig>): SelectConfig {
  return {
    ...new SelectConfig(),
    ...config
  };
}
