import { Pipe, PipeTransform } from '@angular/core';
import { currencyType } from '../currency.type';

@Pipe({
  name: 'currencyPipe',
  standalone: true,
})
export class CurrencyPipePipe implements PipeTransform {
  transform(value:number, type:currencyType, digits:number = 2): string {
    if (value === null || value === undefined || isNaN(value)) {
      return '';
    }
    const symboles : Record<currencyType, string> ={
      EUR: '€',
      DOL: '$',
      GBP: '£',
      JPY: '¥',
    };

    const montantFormate = value.toFixed(digits);
    return `${montantFormate} ${symboles[type]}`;
  }
}
