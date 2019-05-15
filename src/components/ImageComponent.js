import React from 'react';
import axios from 'axios';
import '../style.css';

export default class ImageComponent extends React.Component {

  state = {
    dogImages: null,
    errorMsg: "",
    isLoading: false,
  }

  componentDidMount() {
    this.fetchDogs();
  }

  fetchDogs() {
    this.setState({ isLoading: true })
    axios.get(`https://dog.ceo/api/breeds/image/random/1`).then(res => {
      console.log(res);
      this.setState({ dogImages: res.data.message, isLoading: false })
    }).catch(err => {
      console.log(err);
      this.setState({ errorMsg:" No results found"})
    });
  }
 
  render() {
    const { dogImages, errorMsg, isLoading } = this.state;
    return(
      <div className="dogSingleImage">
        { errorMsg && <p>{errorMsg}</p> }
        <div className="container">
          { dogImages ?  <img src={dogImages} alt="dogs" /> : <p>Loading.....</p> }
        </div>
        <button onClick={() => this.fetchDogs()}>{ isLoading ? "Fetching..." : "Fetch" }</button>
      </div>
    )
  }
};