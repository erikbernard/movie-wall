import React from 'react';
import { AddMovie } from '../components/AddMovie';
import { AppTitle } from '../components/AppTitle';
import { ModalInput } from '../components/ModalInput';
import { ViewMovie } from '../components/ViewMovie';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div id="clickScreen" className={styles.container}>
      <ModalInput/>
      <AppTitle />
      <section>
        <div className={styles.containerMovie}>
          <ViewMovie />
        </div>
        <div className={styles.containerList}>
          <AddMovie />
        </div>
      </section>
    </div>
  ) 
}
