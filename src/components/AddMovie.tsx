import React, { useContext } from 'react';
import { AddMovieContext } from '../contexts/AddMovieContext';
import styles from '../styles/components/AddMovie.module.css';

export function AddMovie(){
    const {listMovieItens , statusVisibility } = useContext(AddMovieContext);

    function add(){
        statusVisibility('flex');
    }

    return(
        <>
        <div className={styles.AddMovieContainer}>
            <div onClickCapture={add} >
                <img src="/icons/Upload.svg" alt="Upload" />
                <span>Add Movie</span>
            </div>
        </div>
        {listMovieItens.map((movieList) =>{ return movieList.components})}
        </>
    );
} 