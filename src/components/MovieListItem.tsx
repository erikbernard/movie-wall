import { useContext, useEffect, useState } from 'react';
import { AddMovieContext } from '../contexts/AddMovieContext';
import styles from '../styles/components/MovieListItem.module.css';


interface MovieListProps{
    children: ChildrenData;
}

interface ChildrenData{
    title?: string;
    url?: string;
    idItem?: number;
}


export function MovieListItem(props: MovieListProps){
    const { listMovieItens, setViewMovieValues, setListMovieItens} = useContext(AddMovieContext);
    const { title, url, idItem} = props.children;

    function youTubeGetID(url){
        var ID = '';
        url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if(url[2] !== undefined) {
            ID = url[2].split(/[^0-9a-z_\-]/i);
            ID = ID[0];
        }
        else {
            ID = url;
        }
            return ID;
    }

    function watchMovie(){
        setViewMovieValues({
            title: `${title}`,
            url: youTubeGetID(url)+`?rel=0&modestbranding=0&autohide=1&mute=0&showinfo=0&controls=0&autoplay=`+1,
        })
    }
    function pauseMovie(){
        setViewMovieValues({
            title:`${title}`,
            url:url+`?rel=0&modestbranding=0&autohide=1&mute=0&showinfo=0&controls=0&autoplay=`+0
        });
    }
    
    function closeItemAndRemove(){
        setViewMovieValues({
            title: '',
            url: null,
        });
        let newListMovieItens = listMovieItens.filter(item => item.id !== idItem);
        setListMovieItens(newListMovieItens);
    }
    "https://img.youtube.com/vi/$ytID/default.jpg";
    return(
        <div style={{
                backgroundImage:`url(https://i.ytimg.com/vi_webp/${youTubeGetID(url)}/0.webp)`,
            }} 
            className={styles.movieListItemConatiner}>
            <div className={styles.containerTitle}>
                <span>{title}</span>
                <img onClick={closeItemAndRemove} src="/icons/close.svg" alt="Close" />
            </div>
            <div  className={styles.containerBtn}>
                <button 
                    onClick={watchMovie}
                    type="button" 
                    className={styles.startMovie}>Watch
                    <img src="/icons/play.svg" alt="Play" />
                </button>
            </div>
        </div>
    );
}