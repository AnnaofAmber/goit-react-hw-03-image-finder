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
    query: "",
    page: 1,
    error: false,
    isLoading: false,
    isMore: false,
  }

  async componentDidUpdate(prevProps, prevState){
    const {page, query } = this.state;

    if ( prevState.query !== query || prevState.page !== page) {
      try {
        const response = await axios.get(BASE_URL, {
          params: 
          {key: API_KEY,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          q: this.state.query,
          page: this.state.page
        }
        });
        const data = response.data.hits
        this.setState(prevState=>{ 
         return {
          images: [...prevState.images, ...data],
          isMore: true,
          isLoading:true, }
          });

}

       catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

 onSubmit = (e) => {
 e.preventDefault()
    this.setState({
     query: e.target.elements.query.value.trim(),
     
    });
  };
 
  onLoadMore = ()=>{
this.setState(prevState => {
 return {page: prevState.page +1 }
})
  }

 render (){
  return (
    <div className={css.app}>
    
    <Searchbar onSubmit={this.onSubmit} />
    <ImageGallery images={this.state.images}/>
    {/* <Loader/> */}
    <Button onLoadMore={this.onLoadMore} isMore={this.state.isMore}/>
    </div>
  );
 }
};
