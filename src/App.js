import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

/* Componente funcional

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <h1>Ola mundo</h1>
    <a>ABC</a>
    </>
  );
}

export default App; */

/*  Componente classe  */

class App extends Component {

  //Removendo o CONSTRUCTOR
  //FUNÇÕES EXECUTAM COM ARROW FUNCTION
  //É declarado somente o state sem o this.
  state = {
    name: "John Bueno",
    priceValue: 0,
  };


  //Quando for utilizar o constructor precisa chamar a func super do Component extendido e da class
  //Isolando o Constructor para trabalhar somente com state e metodos usando Arrow functions
  /*constructor(props) {
    super(props);

    //Bind da func showName()
    //this.showName = this.showName.bind(this);
    //this.alterName = this.alterName.bind(this);

    this.state = {
      name: "John Bueno",
      priceValue: 0,
    };
  } */

  //Função "declarada" com bind
  //showName() {
  showName = () => {
    const { name } = this.state;
    console.log(`O nome é ${name}`);
    alert(`Nome: ${name}`);
  }

  //Função "declarada" com bind
  alterName = () => {
    this.setState({ name: 'Bueno John' });
    alert(`Nome alterado!`);
  }

  //Hack para acessar o THIS sem precisar criar o Bind
  //utilizando Arrow Function

  //Previnindo evento previstos no sistema
  countLink = (event) => {

    //Pega o Event / Para Previnir o evento de link href / target page
    event.preventDefault();

    const { priceValue } = this.state;
    const nextValue = priceValue + 1;
    this.setState({ priceValue: nextValue });
  }

  render() {

    const nameUser = this.state.name;

    //desestruturação pegando o valor de dentro do State
    //Pode desestruturar e pegar mais de um valor ao mesmo tempo
    const { name, priceValue } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={
            //Arrow Function Javascript
            () => console.log("O nome foi clicado!")}>
            Nome: {nameUser}
          </p>
          <br />
          <button onClick={this.alterName}>Alterando via setState() </button>
          <br />
          {/* Para funcionar o this.state passando dados para a funcão showName precisa criar um bind para o metodo ter acesso ao this.state*/}
          <p>
            Nome com Desestruturação: {name}
          </p>
          <br />
          <button onClick={this.showName}>Acessando via Bind o this.State</button>
          { /*<button onClick={}></button> */}
          <br />

          <a onClick={this.countLink}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >Click aqui! Contador: {priceValue}</a>
          <br />
          <br />
          { /*
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */}

        </header>
      </div>
    );
  }

}

//Tanto componente funcional como componente classe precisa dar um export default para poder ser executado em outro ponto da aplicação.
export default App;
