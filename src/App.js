import React from 'react';
import './App.css';
import SearchForm from "./components/searchForm";
import GifList from "./components/gifList";
import { connect } from "react-redux";
import { getGifs } from "./actions/index";
import { useEffect } from "react";



function App(props) {

  const {loading, getGifs, error} = props; 

  useEffect(() => {
    getGifs("dogs")
  }, [])

  return (
    <div className="App">
      <h1>
        Welcome to Gifs Finder
      </h1>
      <SearchForm />
      {
      (error) && <h3> error : {error} </h3>
      }
      {
      loading ? <h3> Loading Search</h3> : <GifList />
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, { getGifs })(App);


// api key = 9XsIGZklsewlHkJJH5dcjNTWoup273qG
// api search = api.giphy.com/v1/gifs/search
// Link = http://api.giphy.com/v1/gifs/search?api_key9XsIGZklsewlHkJJH5dcjNTWoup273qG&q=dogs