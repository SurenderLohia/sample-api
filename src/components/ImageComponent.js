import React from 'react';
import axios from 'axios';
import '../style.css';

export default class ImageComponent extends React.Component {

  state = {
    dogImages: null
  }

  componentDidMount() {
    axios.get(`https://dog.ceo/api/breeds/image/random/2`).then(res => {
      console.log(res);
      this.setState({ dogImages: res.data.message })
    })
  }

  render() {
    const { dogImages } = this.state;
    return(
      <ul>
        {dogImages && dogImages.map(dogImage => (
          <li key={dogImage.id}><img src={dogImage} width="200" /></li>
        ))}
      </ul>
    )
  }
};