import { HasFormatter } from "../interface/HasFormatter";

export class Payment implements HasFormatter {
  constructor(
    public recipient: string,
    private details: string,
    readonly amount: number
  ) {}

  format() {
    return `${this.recipient} - ${this.amount} تومان طلبکار برای ${this.details} `;
  }
}
