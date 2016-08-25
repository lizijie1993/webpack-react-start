import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/HelloWorld/HelloWorld';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <HelloWorld />
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);