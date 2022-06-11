'use strict'

import NeuralNetwork from '../../nn';

const NAME = 'hopfield';

class hopfield extends NeuralNetwork {
    constructor(params) {
        super(params);
        this.name = NAME;
    }
}

export default hopfield;
