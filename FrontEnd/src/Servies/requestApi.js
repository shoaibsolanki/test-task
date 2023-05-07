import http from "./http-common";

class DataService {
    registertion(data){
        return http.post('/api/createuser',data);
    }
    TableData(){
        return http.get('/api/getData');
    }
}
export default new DataService();