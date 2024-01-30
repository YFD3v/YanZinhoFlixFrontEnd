"use client";
import courseService, { CourseType } from "@/services/courseService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
//Passo 32 - backend da pagina de curso
const CourseContainer = () => {
  const { id } = useParams();

  const [course, setCourse] = useState<CourseType>();

  const getCourse = async () => {
    if (typeof id !== "string") return;
    const res = await courseService.getEpisodes(id);
    if (res.status === 200) {
      setCourse(res.data);
    }
  };

  useEffect(() => {
    getCourse();
  }, [id]);

  return (
    <>
      <p>{course?.name}</p>
    </>
  );
};

export default CourseContainer;
