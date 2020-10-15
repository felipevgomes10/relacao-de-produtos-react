import React from 'react'
import { Link } from 'react-router-dom';
import {GlobalContext} from '../GlobalContext';
import Head from './Head';
import styles from './Home.module.css';
import Loading from './Loading';

const Home = () => {

  const {produtos, loading} = React.useContext(GlobalContext);
 
  if (produtos.length === 0 && loading) return <Loading />
  return (
    <section className={styles.sectionProducts + ' animLeft'}>
      <Head page='Home' place='Pagina Inicial' />
      {produtos.map(({id, nome, fotos}) => (
        <figure className={styles.produtoCont} key={id}>
          <Link to={`produto/${id}`}><img className={styles.produtoImg} src={fotos[0].src} alt={nome} /></Link>
          <figcaption className={styles.produtoCaption}>{nome}</figcaption>
        </figure>
      ))}
    </section>
  )
}

export default Home
