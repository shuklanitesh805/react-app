import { getData} from "./Service";
function ApiData(): any {
 const data = getData();
 return data;
};

export default ApiData;