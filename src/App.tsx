//import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Table from "./components/Table";

function App(){
    //return <div><Message /></div>;
    let items = ['New York', 'Los Angeles', 'Nashvillie', 'Captown'];
    const handleSelectItem = (item:string) =>{
        console.log(item);
    }
    return <><div><ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/> </div>
    <Alert >
        <span>Hello Workers!!</span>
    </Alert>
    <Table heading="Table Heading" rowNumber={84378}></Table></>
    
}

export default App;