function Item({ item }) {
  return (
    <>
      <div className="card">
        <img className="card__img" src={item.links && item.links[0].href} alt={item.data[0].title}/>
      </div>
    </>
  );
}

export default Item;