import api from "./api";

//Passo 26 - fazendo a conexão com o backend do usuário

interface UserParams {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  createdAt: string;
}

const profileService = {
  fetchCurrent: async () => {
    const token = sessionStorage.getItem("yanzinhoflix-token");

    const res = await api
      .get("/users/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => err.response);
    return res.data;
  },
  userUpdate: async (params: UserParams) => {
    const token = sessionStorage.getItem("yanzinhoflix-token");

    const res = await api
      .put("/users/current", params, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        if (err.response.status === 400 || err.response.status === 401)
          return err.response;

        return err;
      });
    return res.status;
  },
};

export default profileService;
