import React, { useState, useContext, FormEvent } from 'react';
import { AddMovieContext } from '../contexts/AddMovieContext';
import styles from '../styles/components/ModalInput.module.css';
import { MovieListItem } from './MovieListItem';

const clearValue ={
    title: '',
    url: '',
}

export function ModalInput(){

    const [ clear, setClear] = useState(clearValue);
    const [ idItem, setIdItem] = useState<number>(1);
    const { visible, valuesForm, listMovieItens, setValuesForm, setListMovieItens, statusVisibility } = useContext(AddMovieContext);

    function close(){
        statusVisibility('none');
        setClear(clearValue);        
    }

    function onSubmitForm (ev: FormEvent) {
    const { title, url } = valuesForm;

    ev.preventDefault();
    statusVisibility('none');
    setIdItem(idItem+1);
    setListMovieItens(listMovieItens.concat(
        [
            {
                components: [<MovieListItem key={idItem}>{{title, url,idItem}}</MovieListItem>], 
                id: idItem
            }
        ]));
        setClear(clearValue); 
    }

    function handleEvent(ev){
        const {name, value} = ev.target;
        setValuesForm({...valuesForm, [name]: value});
        setClear({...clear, [name]: value});
    }


    return (
        <div style={{display: visible}} className={styles.modalContainer}>
            <div>
                <div className={styles.modalContainerTitle}>
                    <span className={styles.modalTitle}>Title</span>
                    <img onClick={close} className={styles.modalImage} src="/icons/close.svg" alt="Close" />
                </div>
                <form id="modalForm" onSubmit={onSubmitForm}>
                    <div className={styles.containerForm}>
                        <span>Title movie</span>
                        <input
                            value={clear.title}
                            onChange={handleEvent}
                            name="title"
                            type="text" 
                            required
                            maxLength={30}
                        />
                        <span>URL</span>
                        <input
                            value={clear.url}
                            onChange={handleEvent}
                            name="url"
                            type="text"
                            required
                            
                        />
                    </div>
                    <div className={styles.containerBtn}>
                        <button  type="button" onClick={close} value="Cancel">Cancel</button>
                        <button type="submit" value="Ok">Ok</button>
                    </div>
                </form>
            </div>
        </div>
    );
}