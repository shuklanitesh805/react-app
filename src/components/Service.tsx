import axios from 'axios';

function Service() {
   console.log("Import Service");
}

export async function getData(): Promise<any>{
    const response = await axios.get('https://reqres.in/');
    console.log(response);
    return response?.data;
}


export default Service;

