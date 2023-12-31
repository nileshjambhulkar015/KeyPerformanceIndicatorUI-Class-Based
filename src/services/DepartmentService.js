import axios from "axios";
import {Row, Pagination,PaginationItem, PaginationLink} from 'reactstrap';
const BASE_URL="http://localhost:9091/department";

const DEPARTMENT_GET_URL=BASE_URL+"";

class DepartmentService{

    getDpartmentDetails(){
        return axios.get(BASE_URL)
    }

    saveDpartmentDetails(department){
        return axios.post(BASE_URL,department)
    }

    getDepartmentById(deptId){
        console.log("grt call")
        return axios.get(BASE_URL+'/'+deptId)
    }

    updateDepartmentDetails(department){

        return axios.put(BASE_URL, department)
    }

}

export default new DepartmentService()