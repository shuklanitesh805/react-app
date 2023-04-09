import { MouseEventHandler, useState } from "react";

interface PropsListGroup{
  items: string[];
  heading: string;
}

function ListGroup(propsListGroup: PropsListGroup){
  
    //let items = [ 'New York', 'Los Angeles', 'Nashvillie', 'Captown'];
      //items= [];
      const [selectedIndex, setSelectedIndex] = useState(-1);
      //const handleSelectedIndex = (item: string): MouseEventHandler => {console.log(item)};
      return (
      <>
      {propsListGroup.items.length === 0 ? <p>Not Found</p> : null}
      <h1>LIST</h1><ul className="list-group">
          {propsListGroup.items.map((item, index) => <li className = {selectedIndex === index ? "list-group-item active" : "list-group-item" } key={item} onClick={ () => setSelectedIndex(index)}>{item}</li>)}
        </ul></>);
}

export default ListGroup;