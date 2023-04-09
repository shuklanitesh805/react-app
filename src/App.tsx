import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App(){
    //return <div><Message /></div>;
    const items = [
      'New York', 'Los Angeles', 'Nashvillie', 'Captown'
    ];
    return (
    <><h1>LIST</h1><ul className="list-group">
        {items.map(item => <li className="list-group-item">{item}</li>)}
      </ul></>);
}

export default App;