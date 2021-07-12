import React, { Fragment } from 'react';

class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: undefined,
      txtNome: ''
    }
  }
  changetxtName = (event) => {
    this.setState({ txtNome: event.target.value });
  }

  persistTxtName = () => {
      this.setState({ nome: this.state.txtNome });
  }

  render() {
      
    const renderForm = () => {
          return (
          <>
           Nome: <input type="text" onChange={this.changetxtName}></input>
           <button onClick={this.persistTxtName}>Salvar</button>
          </>
          )
        };
      
      const renderTxt = () => {
          return (
              <>
                <p>Olá {this.state.nome}</p>
              </>
        )
    };

      return !this.state.nome ? renderForm() : renderTxt();
    
  }
}

export default App4;