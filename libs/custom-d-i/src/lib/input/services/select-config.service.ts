import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectConfigService {

  size: 'sm' | 'md' | 'lg' | 'lglg' = 'sm';

  placement: 'top' | 'bottom' | 'right' | 'left' = 'top';

  from = 'root';


}

export function setSelectConfigService(selectConfgiService: Partial<SelectConfigService>) {

  const asd = {
    ...new SelectConfigService(),
    ...selectConfgiService
  };
  return asd;
}
