import React from 'react';
import {GlobalContext} from '../GlobalContext';
import styles from './Contato.module.css';
import Head from './Head';
import Loading from './Loading';

const Contato = () => {
  
  const {produtos} = React.useContext(GlobalContext);

  if (produtos.length === 0) return <Loading />
  return (
    <section className={styles.contato + ' animLeft'}>
      <Head page='Contato' place='Pagina de contatos' />
      <img className={styles.contatoImg} src={produtos[0].fotos[0].src} alt={produtos[0].nome}/>
      <div>
        <h3 className={styles.heading}>Entre em contato</h3>
        <p className={styles.info}>felipe@gmail.com</p>
        <p className={styles.info}>99999-9999</p>
        <p className={styles.info}>Rua Bem Ali, 222</p>
      </div>
    </section>
  )
}

export default Contato
