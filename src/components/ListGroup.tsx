function ListGroup(){
    const items = [
        'New York', 'Los Angeles', 'Nashvillie', 'Captown'
      ];
      return (
      <><h1>LIST</h1><ul className="list-group">
          {items.map(item => <li className="list-group-item" key={item}>{item}</li>)}
        </ul></>);
}

export default ListGroup;