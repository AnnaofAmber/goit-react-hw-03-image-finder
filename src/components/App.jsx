import React, { Component } from 'react';
import css from './App.module.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

import Notiflix from 'notiflix';
import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38875476-56470004daa575dac0a90faa7';
// axios.defaults.baseURL = "https://pixabay.com/api/?q=cat&page=1&key=38875476-56470004daa575dac0a90faa7&image_type=photo&orientation=horizontal&per_page=12"

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    isMore: false,
    isModal: false,
    modalImage: {},
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (this.state.query === '') {
      return Notiflix.Notify.failure(
        'Sorry, the field is empty. Please try again.'
      );
    }

    if (prevState.query !== query || prevState.page !== page) {
      try {
        const response = await axios.get(BASE_URL, {
          params: {
            key: API_KEY,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            q: this.state.query,
            page: this.state.page,
          },
        });
        const data = response.data.hits;
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...data],
            isMore: true,
            isLoading: true,
          };
        });
        if (page === 1) {
          Notiflix.Notify.success(
            `"Hooray! We found ${response.data.totalHits} images."`
          );
        }
      } catch (error) {
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      query: e.target.elements.query.value.trim(),
      page: 1,
      images: [],
    });
  };

  onLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  showModalImage = image => {
    this.setState({
      modalImage: image,
      isModal: true,
    });
  };

  closeModal = e => {
    if (e.target.nodeName === 'DIV' || e.code === 'Escape') {
      this.setState({
        modalImage: {},
        isModal: false,
      });
    }
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          images={this.state.images}
          showModalImage={this.showModalImage}
        />
        {this.state.isLoading && <Loader />}
        {this.state.isMore && <Button onLoadMore={this.onLoadMore} />}
        {this.state.isModal && (
          <Modal largeImage={this.state.modalImage} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}
