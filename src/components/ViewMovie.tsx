import { useContext } from 'react';
import { AddMovieContext } from '../contexts/AddMovieContext';
import styles from '../styles/components/ViewMovie.module.css'

export function ViewMovie (){
    const { viewMovieValues } = useContext(AddMovieContext);
    return (
        <div>
            <div className={styles.viewMovieContaine}>
                <span>{viewMovieValues.title || "Title"}</span>
            </div>
            <div className={styles.embed}>
                <iframe id="embed"
                    width={100+"%"} height={100+"%"}
                    allow='autoplay'
                    src={"https://www.youtube.com/embed/"+viewMovieValues.url}  
                    frameBorder="0" 
                    >
                </iframe>
            </div>
        </div>
    );
}