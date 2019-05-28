import React from 'react';
import axios from 'axios';
import '../style.css';

export default class ImageComponent extends React.Component {

  state = {
    dogImage: null,
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
      this.setState({ dogImage: res.data.message, isLoading: false })
    }).catch(err => {
      console.log(err);
      this.setState({ errorMsg:" No results found"})
    });
  }

  Loading() {
    return <p>Loading.....</p>;
  }

  Content(errorMsg, dogImage) {
    let dynamicContent;
    if(errorMsg) {
      dynamicContent = <p>{errorMsg}</p>;
    } else {
      dynamicContent = <img src={dogImage} alt="dogs" />;
    }


    return <div>
      {dynamicContent}
      <button onClick={() => this.fetchDogs()}>Fetch</button>
    </div>
  }

  render() {
    const { dogImage, errorMsg, isLoading } = this.state;
    return(
      <div className="dogSingleImage">
        <div className="container"> 
          { isLoading ? this.Loading() : this.Content(errorMsg, dogImage) }
        </div>
      </div>
    )
  }
};