import { Component } from 'react';
import './App.css';

import Characters from './components/Characters';

class App extends Component {

  state = {
    characters: [],
    page: 1,
    firstPage: true,
    lastPage: false
  };

  getChars = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.page}`)
    .then(response => response.json())
    .then(response => this.setState({characters: response.results}));
  }

  handleFirst = () => {
    if (this.state.page === 1) {
      this.setState({firstPage: true})
    } else {
      this.setState({firstPage: false})
    }
  }

  handleLast = () => {
    if (this.state.page === 42) {
      this.setState({lastPage: true})
    } else {
      this.setState({lastPage: false})
    }
  }

  handleAdd = () => {
    const { page } = this.state;
    this.setState({page: page + 1});
  }

  handleSub = () => {
    const { page } = this.state;
    this.setState({page: page - 1});
  }

  componentDidMount() {
    this.getChars();
  }

  componentDidUpdate(_, prevState) {
    if (this.state.page !== prevState.page) {
      this.getChars();
      this.handleFirst();
      this.handleLast();
    }
  }

  render() {
    const {characters, page, firstPage, lastPage} = this.state;

    return (
      <div className="App">
      <div className="App-header">
        <Characters characters={characters}/>
        <div className="box-buttons">
          <button onClick={this.handleSub} disabled={firstPage}>Prev</button>
          <span>
            {page}
          </span>
          <button onClick={this.handleAdd} disabled={lastPage}>Next</button>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
