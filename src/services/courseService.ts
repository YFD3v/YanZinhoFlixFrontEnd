import api from "./api";
//Passo 9 - conexão com o backEnd

export type EpisodeType = {
  id: number;
  name: string;
  synopsis: string;
  order: number;
  videoUrl: string;
  secondsLong: number;
};
//Na teoria, todo curso tem os episódios, mas como na tabela de cursos não tem os episodios diretamente, por causa das relações feitas no backEnd, foi feito dessa forma.
export type CourseType = {
  id: number;
  name: string;
  thumbnailUrl: string;
  synopsis: string;
  episodes?: EpisodeType[];
};

const courseService = {
  getNewestCourses: async () => {
    const res = await api.get("/courses/newest").catch((err) => {
      return err.response;
    });
    return res;
  },
  //Passo 20 - Criação da seção de cursos em destaque
  getFeaturedCourses: async () => {
    const token = sessionStorage.getItem("yanzinhoflix-token");

    const res = await api
      .get("/courses/featured", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        return err.response;
      });
    return res;
  },
  //Passo 22 - criação da seção de slides de favorito
  addToFav: async (courseId: number | string) => {
    const token = sessionStorage.getItem("yanzinhoflix-token");
    const res = await api
      .post(
        "/favorites",
        { courseId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((err) => err.response);
    return res;
  },
  removeFav: async (courseId: number | string) => {
    const token = sessionStorage.getItem("yanzinhoflix-token");
    const res = await api
      .delete("/favorites/" + courseId, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => err.response);
    return res;
  },
  getFavCourses: async () => {
    const token = sessionStorage.getItem("yanzinhoflix-token");
    const res = await api
      .get("/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => err.response);
    return res;
  },

  //Passo 30 - backend do search
  getSearch: async (name: string) => {
    const token = sessionStorage.getItem("yanzinhoflix-token");
    const res = await api
      .get(`/courses/search?name=${name}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => err.response);
    return res;
  },
  //Passo 32 - Backend da pagine de curso
  getEpisodes: async (id: number | string) => {
    const token = sessionStorage.getItem("yanzinhoflix-token");
    const res = await api
      .get(`/courses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => err.response);
    return res;
  },
  like: async (courseId: number | string) => {
    const token = sessionStorage.getItem("yanzinhoflix-token");
    const res = await api
      .post(
        `/likes`,
        { courseId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((err) => err.response);
  },
  removelike: async (courseId: number | string) => {
    const token = sessionStorage.getItem("yanzinhoflix-token");
    const res = await api
      .delete(`/likes/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => err.response);
  },
};

export default courseService;
