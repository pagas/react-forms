import validator from "validator";

export function ValidateData(data, rules) {
    let errors = {};
    for (let field of Object.keys(data)) {
        if (!rules.hasOwnProperty(field)) {
            continue;
        }
        let fieldErrors = [];
        const fieldValue = data[field];
        const fieldRules = rules[field];

        if (fieldRules.required && validator.isEmpty(fieldValue)) {
            fieldErrors.push('Value required');
        }

        if (!validator.isEmpty(fieldValue)) {
            if (fieldRules.minlength && !validator.isLength(fieldValue, fieldRules.minlength)) {
                fieldErrors.push(`Enter at least ${fieldRules.minlength} characters`);
            }

            if (fieldRules.alpha && !validator.isAlpha(fieldValue)) {
                fieldErrors.push("Enter only letters");
            }

            if (fieldRules.email && !validator.isEmail(fieldValue)) {
                fieldErrors.push("Enter valid email address");
            }
        }

        if (fieldErrors.length > 0) {
            errors[field] = fieldErrors;
        }
    }
    ;
    return errors;
}
