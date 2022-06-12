'use strict'


export default class JSNN {
    constructor(props) {
    }
}


//import perceptron from './arch/perceptron/nn';
//import hopfield from './arch/hopfield/nn';

// New returns a new neural network instance.
/*function New(...args) {
    if (args.length > 0) {
        const arc = args[0].trim();
        switch (typeof arc) {
            case 'string':
                return new perceptron(arc);
            default:
                break;
        }
    }
    return getArc('perceptron');
}

function getArc(name) {
    switch (name) {
        case 'perceptron':
            return new perceptron(name);
        case 'hopfield':
            return new hopfield(name);
        default:
            break;
    }
}

function getFileExt(name) /!*Filer*!/ {
    const index = name.lastIndexOf('.');
    if (index > 0 && index < name.length - 1) {
        name = name.substr(index);
        switch (name) {
            case '.json':
                return name//&FileJSON{name};
            case '.yml':
            case '.yaml':
                return name//&FileYAML{name};
            default:
                return 'error'//&FileError{Err: fmt.Errorf("extension isn't defined: %s", ext)}
        }
    }
}*/

/*const (
Perceptron = perceptron.Name
Hopfield   = hopfield.Name
)

// Get.
func Get(title string) pkg.NeuralNetwork {
    var err error
    d := utils.GetFileExt(title)
    if _, ok := d.(error); !ok {
        switch v := d.GetValue("name").(type) {
        case error:
                err = v
        case string:
                if n := Get(v); n != nil {
                if err = d.Decode(n); err == nil {
                    n.Init(d)
                    return n
                }
            }
        }
    } else {
        switch strings.ToLower(title) {
            case Perceptron:
                return perceptron.New()
            case Hopfield:
                return hopfield.New()
            default:
                err = fmt.Errorf("neural network is %w", pkg.ErrNotRecognized)
        }
    }

    if err != nil {
        log.Println("get architecture: %w", err)
    }
    return nil
}*/

//export default New;
