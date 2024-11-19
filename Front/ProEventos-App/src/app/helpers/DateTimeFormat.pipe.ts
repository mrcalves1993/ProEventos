import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../util/constants';
import moment from 'moment';

@Pipe({
  name: 'DateFormatPipe'
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {

  override transform(value: any, args?: any): any {
    
    if(!value) return;

    const dateMoment: moment.Moment = moment(value, 'DD/MM/YYYY hh:mm:ss');

    const dateJS: Date = dateMoment.toDate();

    return super.transform(dateJS, Constants.DATE_TIME_FMT);
  }

}
