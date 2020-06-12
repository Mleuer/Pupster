import React from "react";
import API from "../../Utils/API";

class Discover extends React.Component {
  state = {
    dog: {},
    friends: 0,
  };

  componentDidMount() {
    this.getDog();
  }

  async getDog() {
    const result = await API.getDog();

    this.setState({
      dog: result.data,
    });
  }

  tryToMakeFriends = () => {
    const chanceOfFriend = 1;

    if(chanceOfFriend > .2) {
        this.setState({
            friends: this.state.friends + 1
        })
    }
    this.getDog();
  }

  noFriends = () => {
      this.getDog();
  }

  render() {
    return (
      <>
        <h2>Make New Friends</h2>
        <img src={this.state.dog.message} />
        <button type="button" className="btn btn-primary" onClick={this.tryToMakeFriends}>
          Upvote
        </button>
        <button type="button" className="btn btn-danger" onClick={this.noFriends}>
          Downvote
        </button>
        <h2>{this.state.friends}</h2>
      </>
    );
  }
}

export default Discover;
