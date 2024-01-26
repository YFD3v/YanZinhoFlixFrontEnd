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

const authService = {
  register: async (params: RegisterParams) => {
    const res = await api.post("/auth/register", params).catch((err) => {
      //Erro para e-mail já cadastrado
      if (err.response.status === 400) return err.response;
      return err;
    });
    return res;
  },
};

export default authService;
