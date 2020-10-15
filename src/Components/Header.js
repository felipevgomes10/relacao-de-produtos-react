import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <button className={styles.link}><NavLink activeClassName={styles.active} to='/' end>Produtos</NavLink></button>
        <button className={styles.link}><NavLink activeClassName={styles.active} to='contato'>Contato</NavLink></button>
      </nav>
    </header>
  )
}

export default Header
