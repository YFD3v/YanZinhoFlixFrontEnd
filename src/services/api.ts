import axios from "axios";

//Passo 9 - conexão com o backEnd
//Criando a conexão com axios, com base na variavel do .env que leva para o link do backEnd
const baseURL = process.env.NEXT_PUBLIC_BASEURL;
const api = axios.create({
  baseURL,
});

export default api;
