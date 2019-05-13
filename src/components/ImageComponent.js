import React from 'react';
import axios from 'axios';
import '../style.css';

export default class ImageComponent extends React.Component {

  state = {
    dogImage: null,
    isLoading: true,
    hasError: false
  }

  componentDidMount() {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then(res => {
      this.setState({ dogImages: res.data.message })
    }).catch(error => {
      this.setState({hasError: true});
    }).finally(() => {
      this.setState({ isLoading: false })
    });
  }

  render() {
    const { dogImages, isLoading, hasError } = this.state;
    return(
      <div>
        {isLoading && <div>Loading...</div>}

        {
          !isLoading && (
            !hasError &&
              <div>
                <img src={dogImages} width="200" />
              </div>
          )
        }

        {
          !isLoading && (
            hasError &&
              <div>
                Unable to get Image
              </div>
          )
        }
      </div>
    )
  }
};