/**
 * Person Class - Model for storing details of a person
 * @param {string} [surname]
 * @param {string} [forename]
 * @constructor
 */
function Person(surname, forename){
    if (typeof surname === "string") {
        this.surname = surname;
    }
    if (typeof  forename === "string") {
        this.forename = forename;
    }
}

/**
 * Surname of a person
 * @type {string}
 */
Person.prototype.surname  = "Person";

/**
 * Forename of a person
 * @type {string}
 */
Person.prototype.forename = "New";

/**
 * Date person was added to system
 * @type {Date}
 */
Person.prototype.dateCreated = new Date();

/**
 * Get a formatted name in full - 'forename surname'
 * @returns {string}
 */
Person.prototype.getFullName = function() {
    return this.forename + " " + this.surname;
};

/**
 * Get a short date formatted - dd/mm/yyyy (localised)
 * @returns {string}
 */
Person.prototype.getFormattedDate = function() {
    return this.dateCreated.toDateString();
};