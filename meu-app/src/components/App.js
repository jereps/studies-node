import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
        <p>paragraph</p>
        <p>paragraph2</p>
        <p>{new Date().toLocaleDateString('pt-BR')}</p>
      </>
    );
  }
}

export default App;