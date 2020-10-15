import React from 'react';

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {

  const [produtos, setProdutos] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  
  React.useEffect(() =>{
    const fetchProdutos = async () => {
      setLoading(true);
      const produtosResolve = await fetch(`https://ranekapi.origamid.dev/json/api/produto`);
      const produtosJson = await produtosResolve.json();
      setLoading(false);
      setProdutos(produtosJson);
    }
    fetchProdutos()
  }, []);

  return (
    <GlobalContext.Provider value={{produtos, loading}}>
      {children}
    </GlobalContext.Provider>
  );
}