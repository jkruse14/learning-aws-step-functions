'use strict';
const Promise = require('bluebird');

module.exports.hello = (input, context) => {
    const success = input.success === true;
    return Promise.resolve({ msg: 'Hello,', name: input.name, success });
};

module.exports.world = (input, context) => {
    return Promise.resolve({ msg: 'world!', waitSeconds: 5, hello: input});
}

module.exports.fromUsername = (input, context) => {
    const name = input.hello.name || 'Someone';
    const msg = `${input.hello.msg} ${input.msg} ${name} greets you!`;
    return Promise.resolve({msg});
}
