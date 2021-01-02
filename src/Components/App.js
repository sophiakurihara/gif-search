import React from 'react';
import '../App.css';
import axios from 'axios';

import SearchForm from './SearchForm';
import GifList from './GifList';

function App() {
    // componentDidMount() {
        // axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
        //   //Axios automatically parses response into JSON
        //     .then(response => {
        //         this.setState({ gifs: response.data.data})
        //     })
        //     .catch(error => {
        //          console.log('Error fetching and parsing data', error);
        //      });

        // fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
        //     .then((response) => response.json())
        //     .then((responseData) => {
        //         this.setState({ gifs: responseData.data})
        //     })
        //     .catch(error => {
        //         console.log('Error fetching and parsing data', error);
        //     });
    //     this.performSearch();
    // }

    // performSearch = (query = 'cats') => {
    //     axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
    //     //Axios automatically parses response into JSON
    //         .then(response => {
    //             this.setState({
    //                 gifs: response.data.data,
    //                 loading: false
    //             })
    //         })
    //         .catch(error => {
    //             console.log('Error fetching and parsing data', error);
    //         });
    // }

    return (
      <>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm/>
          </div>
        </div>
        <div className="main-content">
        </div>
      </>
    );
}

export default App;
