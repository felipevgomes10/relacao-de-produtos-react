import React from 'react'
import { useParams } from 'react-router-dom';
import {GlobalContext} from '../GlobalContext';
import Head from './Head';
import Loading from './Loading';
import styles from './Produto.module.css';

const Produto = () => {

  const {produtos} = React.useContext(GlobalContext);
  const {id} = useParams();
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    if (produtos.length !== 0) {
      const produtoFinal = produtos.find((item) => item.id === id);
      setProduto(produtoFinal);
    }
  }, [id, produtos])

  if (!produto) return <Loading />
  return (
    <section className={styles.produto + ' animLeft'}>
      <Head page={id} place={`Produto | ${id}`} />
      <div className={styles.containerImg}>
        {produto.fotos.map((foto) => <img key={foto.titulo} className={styles.img} src={foto.src} alt={produto.id}/>)}
      </div>
      <div className={styles.info}>
          <h3>{produto.nome}</h3>
          <span>{`R$ ${produto.preco}`}</span>
          <p>{produto.descricao}</p>
        </div>
    </section>
  )
}

export default Produto
