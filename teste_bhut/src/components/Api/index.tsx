import axios from "axios";

const API = axios.create({
  baseURL: "https://api-test.bhut.com.br:3000/api/cars/",
});

export default API;
