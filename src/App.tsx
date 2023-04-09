//import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App(){
    //return <div><Message /></div>;
    let items = ['New York', 'Los Angeles', 'Nashvillie', 'Captown'];
    const handleSelectItem = (item:string) =>{
        console.log(item);
    }
    return <><div><ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/> 
    <Alert >
        <span>Hello Workers!!</span>
    </Alert></div></>
    
}

export default App;