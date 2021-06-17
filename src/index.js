'use strict'

import {init} from './init.js';

const nn = New('perceptron', 'config.json');

nn.Init('ppp5');//
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

class NeuralNetwork {
    constructor(args) {
        this.args = args;
        this.isInit = false;

    }

    Init() {
        return console.log('class Init:', this.args);
    }

    Train() {
        return console.log('class Train:', this.args);
    }

    Verify() {
        return console.log('class Verify:', this.args);
    }

    Query() {
        return console.log('class Query:', this.args);
    }
}

let user = new NeuralNetwork('perceptron');

user.Init();


//export {New};
