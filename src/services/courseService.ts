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
      console.log({ message: err.message });
      return err.response;
    });
    return res;
  },
};

export default courseService;