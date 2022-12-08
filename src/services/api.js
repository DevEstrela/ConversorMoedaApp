import axios from "axios";

//https://economia.awesomeapi.com.br/json/
//> rota para buscar EUR>BRL =  all/USD-BRL

const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json/'
})