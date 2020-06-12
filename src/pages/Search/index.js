import React from "react";
import API from "../../Utils/API";

class Search extends React.Component {
  state = {
    dogs: [],
    breed: "",
  };

  searchDogByBreed = (event) => {
    event.preventDefault();

    this.getDogByBreed(this.state.breed);
  };

  async getDogByBreed(breed) {
    const result = await API.getDogByBreed(breed);

    this.setState({
      dogs: result.data.message,
    });
  }

  handleInput = (event) => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Dog Breed</label>
            <input
              name="breed"
              value={this.state.breed}
              onChange={this.handleInput}
              className="form-control"
            ></input>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.searchDogByBreed}
          >
            Submit
          </button>
        </form>
        {this.state.dogs.map((dog) => (
          <img src={dog} />
        ))}
      </>
    );
  }
}

export default Search;
