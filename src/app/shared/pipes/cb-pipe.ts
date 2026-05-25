import { Pipe, PipeTransform } from '@angular/core';
import { CiviliteType } from '../civilite.type';


@Pipe({
  name: 'civilite',
})
export class CbPipe implements PipeTransform {
  transform(value: CiviliteType): string{
    return value === 'Mr' || value === 'H' ? 'Monsieur' : 'Madame';
  }
}
