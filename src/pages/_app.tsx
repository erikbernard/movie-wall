import '../styles/global.css';
import React from 'react';
import { AddMovieProvider } from '../contexts/AddMovieContext';

function MyApp({ Component, pageProps }) {
  return (
    <AddMovieProvider>
      <Component {...pageProps} />
    </AddMovieProvider>
  )
}

export default MyApp
