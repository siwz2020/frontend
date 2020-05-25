import {NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export class DateFormatter extends NgbDateParserFormatter {
    format(date: NgbDateStruct): string {
        if (date === null) {
            return '';
        }

        return `${date.year}-${date.month}-${date.day}`;
    }

    parse(value: string): NgbDateStruct {
      const date = value.split('-');
      
      return {
        year: +date[0], 
        month: +date[1], 
        day: +date[2]
      };
    }
}