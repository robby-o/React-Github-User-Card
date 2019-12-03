import React from "react";
import UserList from "./components/UserList";

class App extends React.Component {
  state = {
    myData: [
      {
        login: "robby-o",
        id: 55962538,
        node_id: "MDQ6VXNlcjU1OTYyNTM4",
        avatar_url: "https://avatars3.githubusercontent.com/u/55962538?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/robby-o",
        html_url: "https://github.com/robby-o",
        followers_url: "https://api.github.com/users/robby-o/followers",
        following_url:
          "https://api.github.com/users/robby-o/following{/other_user}",
        gists_url: "https://api.github.com/users/robby-o/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/robby-o/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/robby-o/subscriptions",
        organizations_url: "https://api.github.com/users/robby-o/orgs",
        repos_url: "https://api.github.com/users/robby-o/repos",
        events_url: "https://api.github.com/users/robby-o/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/robby-o/received_events",
        type: "User",
        site_admin: false,
        name: "Robby",
        company: null,
        blog: "",
        location: "California",
        email: null,
        hireable: null,
        bio: "i like creating stuff",
        public_repos: 57,
        public_gists: 0,
        followers: 7,
        following: 8,
        created_at: "2019-09-29T22:34:05Z",
        updated_at: "2019-12-03T19:10:48Z"
      }
    ]
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
