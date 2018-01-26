const isEmpty = value => value === undefined || value === null || value === '';
const join = rules => (value, data, params) => rules.map(rule => rule(value, data, params)).filter(error => !!error)[0];

export function email(value) {
    // Let's not start a debate on email regex. This is just for an example app!
    if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Невалиден email адрес';
    }
}

export function required(value) {
    if (isEmpty(value)) {
        return 'Задължително';
    }
}

export function minLength(min) {
    return value => {
        if (!isEmpty(value) && value.length < min) {
            return `Полето трябва да е с минимум ${min} символа`;
        }
    };
}


export function day(value) {
    const maxDays = 31;
    parseInt(value);
    return value => {
        if (!isEmpty(value) && value < maxDays) {
            return `Must be between 0 and  ${maxDays}`;
        }
    };
}

export function month(value) {
    parseInt(value);
    const maxMonths = 12;
    return value => {
        if (!isEmpty(value) && value < maxMonths) {
            return `Must be between 0 and  ${maxMonths}`;
        }
    };
}

export function year(value) {
    const currentYear = new Date().getFullYear();
    const minimumValidYear = currentYear - 150;
    parseInt(value);

    return value => {
        if (!isEmpty(value) && value < currentYear && value > minimumValidYear) {
            return `Must be between ${minimumValidYear} and  ${currentYear}`;
        }
    };
}

export function maxLength(max) {
    return value => {
        if (!isEmpty(value) && value.length > max) {
            return `Must be no more than ${max} characters`;
        }
    };
}

export function integer(value) {
    if (!isEmpty(value) && !Number.isInteger(Number(value))) {
        return 'Must be an integer';
    }
}

export function oneOf(enumeration) {
    return value => {
        if (!~enumeration.indexOf(value)) {
            return `Must be one of: ${enumeration.join(', ')}`;
        }
    };
}

export function match(field) {
    return (value, data) => {
        if (data) {
            if (value !== data[field]) {
                return 'Do not match';
            }
        }
    };
}

export function textField(value) {
    if (!isEmpty(value) && !/[^,@$#-_]/.test(value)) {
        return 'Невалидни символи в текстовот поле';
    }
}

export function createValidator(rules, params) {
    return (data = {}) => {
        const errors = {};
        Object.keys(rules).forEach(key => {
            const rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
            const error = rule(data[key], data, {key, ...params});
            if (error) {
                errors[key] = error;
            }
        });
        return errors;
    };
}
