//import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App(){
    //return <div><Message /></div>;
    let items = ['New York', 'Los Angeles', 'Nashvillie', 'Captown'];
    return <div><ListGroup items={items} heading='List'/></div>
    
}

export default App;