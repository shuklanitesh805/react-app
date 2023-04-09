//import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App(){
    //return <div><Message /></div>;
    let items = ['New York', 'Los Angeles', 'Nashvillie', 'Captown'];
    const handleSelectItem = (item:string) =>{
        console.log(item);
    }
    return <div><ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/></div>
    
}

export default App;