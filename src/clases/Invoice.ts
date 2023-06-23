import { HasFormatter } from "../interface/HasFormatter";

export class Invoice implements HasFormatter {
  constructor(
    public client: string,
    private details: string,
    readonly amount: number
  ) {}

  format() {
    return `${this.client} - ${this.amount} تومان بدهکار برای ${this.details} `;
  }
}
