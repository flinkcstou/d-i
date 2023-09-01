import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectConfigService {

  size: 'sm' | 'md' | 'lg' | 'lglg' = 'sm';

  placement: 'top' | 'bottom' | 'right' | 'left' = 'top';


}

export function setSelectConfigService(selectConfgiService: Partial<SelectConfigService>) {
  return {
    ...new SelectConfigService(),
    ...selectConfgiService
  };
}
