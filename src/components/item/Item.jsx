function Item({ item }) {
  return (
    <>
      <div className="collection__item">
        <img className="collection__img" src={item.links && item.links[0].href} alt={item.data[0].title}/>
      </div>
    </>
  );
}

export default Item;