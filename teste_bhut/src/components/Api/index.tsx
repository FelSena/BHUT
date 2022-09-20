import axios from "axios";

const API = axios.create({
  baseURL: "http://api-test.bhut.com.br:3000/api/cars/",
});

export default API;
