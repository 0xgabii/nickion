import * as React from 'react';
import './App.css';

interface Props {

}

interface State {
  name: string;
}

class App extends React.Component<Props, State> {
  state: State = {
    name: 'App',
  };

  handleClick = (): void => {
    alert(this.state.name);
  }

  render() {
    return (
      <div className="App">
        App
        <button onClick={() => this.handleClick()}>click</button>
      </div>
    );
  }
}

export default App;
