function PersonForm() {

}

/**
 * The HTML Element where the form will be created
 * @type {HTMLElement}
 */
PersonForm.prototype.formElement = null;

/**
 * Callback handler for form being saved
 * @type {function|null}
 */
PersonForm.prototype.onformsave = null;

/**
 * HTMLElement for <input surname>
 * @type {HTMLElement}
 * @private
 */
PersonForm.prototype._surnameInput = null;

/**
 * HTMLElement for <input forename>
 * @type {HTMLElement}
 * @private
 */
PersonForm.prototype._forenameInput = null;

// Getters and Setters

/**
 * Get current value of surname from form
 * @returns {string}
 */
PersonForm.prototype.getSurname = function() {
    return this._surnameInput.value;
};

/**
 * Get current value of forename from form
 * @returns {string}
 */
PersonForm.prototype.getForename = function() {
    return this._forenameInput.value;
};

/**
 * Update input element with new surname value
 * @param {string} surname
 */
PersonForm.prototype.setSurname = function(surname) {
    this._surnameInput.value = surname;
};

/**
 * Update input element with new forename value
 * @param {string} forename
 */
PersonForm.prototype.setForename = function(forename) {
    this._forenameInput.value  = forename;
};