'use strict'

import {init} from './init.js';

const nn = New('perceptron', 'config.json');

nn.Init('ppp3');//
nn.Train();
nn.Verify();
nn.Query();

//
function New(...args) {
    return new NN(args)
}

function NN(...args) {
    this.Init = init;/*function () {
        return console.log('Init:', args);
    }*/

    this.Train = function () {
        return console.log('Train:', args);
    }

    this.Verify = function () {
        return console.log('Verify:', args);
    }

    this.Query = function () {
        return console.log('Query:', args);
    }
}

//export {New};
