import { add, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export class dateTimeUtils {
  private static readonly DATE_FORMAT = 'dd/MM/yyyy HH:mm:ss xxx';
  private static readonly LOCALE = ptBR;

  static toLocalDateTime(value: Date): string | null {
    if (!value) {
      return null;
    }
    return format(value, this.DATE_FORMAT, { locale: this.LOCALE });
  }

  static getOtpExpiration(): number {
    return add(new Date(), { minutes: 10 }).getTime();
  }
}
