function ListGroup(){
    let items = [
        'New York', 'Los Angeles', 'Nashvillie', 'Captown'
      ];
      //items= [];
      return (
      <>
      {items.length === 0 ? <p>Not Found</p> : null}
      <h1>LIST</h1><ul className="list-group">
          {items.map(item => <li className="list-group-item" key={item}>{item}</li>)}
        </ul></>);
}

export default ListGroup;