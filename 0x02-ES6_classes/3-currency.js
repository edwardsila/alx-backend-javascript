/**
 * Currency class to represent a currency with code and name.
 */
export default class Currency {
  /**
   * Creates an instance of Currency.
   * @param {string} code - The code of the currency.
   * @param {string} name - The name of the currency.
   * @throws {TypeError} If code or name is not a string.
   */

  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * Gets the code of the currency.
   * @returns {string} The code of the currency.
   */

  get code() {
    return this._code;
  }

  /**
   * Sets the code of the currency.
   * @param {string} value - The new code of the currency.
   * @throws {TypeError} If value is not a string.
   */

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  /**
   * Gets the name of the currency.
   * @returns {string} The name of the currency.
   */

  get name() {
    return this._name;
  }

  /**
   * Sets the name of the currency.
   * @param {string} value - The new name of the currency.
   * @throws {TypeError} If value is not a string.
   */

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be string');
    }
    this._name = value;
  }

  /**
   * Returns the full currency description in the format "name (code)".
   * @returns {string} The full currency description.
   */

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
