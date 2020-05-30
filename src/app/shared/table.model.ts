export class Table {
  _id?: string;
  number: number;
  capacity: number;
  isTaken: boolean;
  isReserved: boolean;
  reservationDate: Date;
  public toString = (): string => {
    return `Number: (${this.number})`;
  }
}
