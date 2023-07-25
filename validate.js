const validate = require('jsonschema').validate;

const schema = require('./fahrplan.schema.json');
const data = require('./sessions.json');

const errors = validate(data, schema).errors;

if (errors.length === 0) {
    console.log('file is valid, good job.');
} else {
    console.error(errors);
    process.exit(2);
}
