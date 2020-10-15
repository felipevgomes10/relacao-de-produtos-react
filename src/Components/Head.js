import React from 'react'

const Head = ({page, place}) => {

  React.useEffect(() => {
    document.title = `Loja | ${page}`;
    document.querySelector('meta[name="description"]')
      .setAttribute('content', place)
  }, [page, place]);

  return (
    <>
      
    </>
  )
}

export default Head
