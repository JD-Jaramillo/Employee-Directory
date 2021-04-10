import axios from 'axios';

const BASEURL = "https://randomuser.me/api/";
const INCLUDEONLY = "?inc=name,picture,email,dob,phone";
const NUMRESULTS = "&results=15";

// Seaeches the RANDOM USER API returning 15 results and only getting the name, picture, email, phone and DOB
const API = {
    search: function (query) {
        return axios.get(BASEURL + INCLUDEONLY + NUMRESULTS);
    }
};

export default API; 