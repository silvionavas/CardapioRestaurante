export function ItemCardapio(props) {
  return <div className='container-item-cardapio'>
      <div>
        <h2 className='titulo-item-cardapio'>{props.nome}</h2>
        <p className='preco-item-cardapio'>{props.preco}</p>
        <p className='descricai-item-cardapio'>{props.descricao}</p>
      </div>
      <img src={props.imagem} alt="" />
  </div>
}