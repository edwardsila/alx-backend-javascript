import Currency from './3-currency';

/**
 * Class representing pricing with amount and currency.
 */

export default class Pricing {
  /**
    * Creates an instance of Pricing.
    * @param {number} amount - The amount of the pricing.
    * @param {Currency} currency - The currency object (instance of Currency class).
    */

  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }
  /**
    * Getter for amount attribute.
    * @returns {number} The current value of amount.
    */

  get amount() {
    return this._amount;
  }

  /**
    * Setter for amount attribute.
    * @param {number} value - The new value to set for amount.
    */

  set amount(value) {
    this._amount = value;
  }

  /**
    * Getter for currency attribute.
    * @returns {Currency} The current currency object.
    */
  get currency() {
    return this._currency;
  }

  /**
    * Setter for currency attribute.
    * @param {Currency} value - The new currency object to set.
    */

  set currency(value) {
    this._currency = value;
  }
  /**
    * Method to display full price with currency details.
    * @returns {string} Formatted string displaying amount and currency details.
    */

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }
  /**
    * Static method to convert price using a conversion rate.
    * @param {number} amount - The amount to convert.
    * @param {number} conversionRate - The conversion rate to apply.
    * @returns {number} The converted amount.
    */

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
