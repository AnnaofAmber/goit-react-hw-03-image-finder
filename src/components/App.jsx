import React, { Component } from "react";
import css from "./App.module.css"

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";

import axios from "axios";
const BASE_URL = 'https://pixabay.com/api/';
 const API_KEY = '38875476-56470004daa575dac0a90faa7';
// axios.defaults.baseURL = "https://pixabay.com/api/?q=cat&page=1&key=38875476-56470004daa575dac0a90faa7&image_type=photo&orientation=horizontal&per_page=12"

export class App extends Component {

  state = {
    images: [],
  }

  async componentDidMount(){
    const response = await axios.get(BASE_URL, {
      params: 
      {key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    }
    });
    this.setState({ images: response.data.hits });

  }

 render (){
  return (
    <div className={css.app}>
    
    <Searchbar/>
    <ImageGallery images={this.state.images}/>
    {/* <Loader/> */}
    <Button/>
    </div>
  );
 }
};
