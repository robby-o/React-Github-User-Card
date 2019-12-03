import React from "react";
import UserList from "./components/UserList";

class App extends React.Component {
  state = {
    myData: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/robby-o")
      .then(res => res.json())
      .then(data => {
        this.setState({ myData: [data] });
      });
    fetch("https://api.github.com/users/robby-o/followers")
      .then(res => res.json())
      .then(data => {
        this.setState({ myData: [...this.state.myData, ...data] });
      });
  }

  render() {
    return (
      <>
        <UserList users={this.state.myData} />
      </>
    );
  }
}

export default App;
