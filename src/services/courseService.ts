import api from "./api";

export type EpisodeType = {
  id: number;
  name: string;
  synopsis: string;
  order: number;
  videoUrl: string;
  secondsLong: number;
};
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
  allIds: async () => {
    const res = await api.get("/courses/allids").catch((err) => err.response);
    return res;
  },
};

export default courseService;
