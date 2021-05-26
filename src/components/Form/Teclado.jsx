import { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

class Teclado extends Component {
    onChange = (input) => {
        console.log('Input changed', input);
    };

    onKeyPress = (button) => {
        console.log('Button pressed', button);
    };

    render() {
        return <Keyboard onChange={this.onChange} onKeyPress={this.onKeyPress} />;
    }
}

export default Teclado
