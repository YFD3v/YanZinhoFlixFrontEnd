import api from "./api";

//Passo 16 - Conectando o backend com o registro

interface RegisterParams {
  firstName: string;
  lastName: string;
  birth: string;
  phone: string;
  email: string;
  password: string;
}

interface LoginParams {
  email: string;
  password: string;
}

const authService = {
  register: async (params: RegisterParams) => {
    const res = await api.post("/auth/register", params).catch((err) => {
      //Erro para e-mail já cadastrado
      if (err.response.status === 400) return err.response;
      return err;
    });
    return res;
  },
  //Passo 18 - Conexão do backend para login
  login: async (params: LoginParams) => {
    const res = await api.post("/auth/login", params).catch((err) => {
      if (err.response.status === 400 || err.response.status === 401)
        return err.response;
      return err;
    });
    if (res.status === 200) {
      sessionStorage.setItem("yanzinhoflix-token", res.data.token);
    }
    return res;
  },
};

export default authService;
