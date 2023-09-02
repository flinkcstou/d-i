import { Injectable } from '@angular/core';
import { IFactoryPatternMenu } from './abstract-factory-pattern.service';

@Injectable()
export class PastaService implements IFactoryPatternMenu {
  get(): any[] {
    return [
      'Паста с креветками',
      'Паста с курицей'
    ];
  }


}
