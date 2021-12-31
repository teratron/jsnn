'use strict'

import NeuralNetwork from '../nn';

const NAME = 'perceptron';

class perceptron extends NeuralNetwork {
    constructor(params) {
        super(params);
        this.name = NAME;
        this.Bias = false;
        this.Hidden = [];
    }

    //
    SetBias = () => {
        return true
    }

    //
    SetHiddenLayer = () => {
        return true
    }

    //
    SetLearningRate = () => {
        return true
    }
}

export default perceptron;
