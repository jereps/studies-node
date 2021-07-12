import React from 'react';

class App3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nome: ''};
    }

    changeName = (event) => {
        this.setState({nome: event.target.value});
    }

    render() {
        return (
        <div className="box">
            <input type="text" value={this.state.nome} onChange={this.changeName}></input>
            <p>
                Olá {this.state.nome}
            </p>
        </div>
        );
    }
}

export default App3;