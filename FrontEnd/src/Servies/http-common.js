import axios from 'axios'

export const BASEURL = {
   ENDPOINT_URL: "//localhost:5000/",
}

const authToken = localStorage.getItem('token');

export default axios.create({
    baseURL: `${BASEURL.ENDPOINT_URL}`,
    headers: {
        "Access-Control-Allow-Origin":"*",
        "authtoken": `${authToken}`
    }
});
