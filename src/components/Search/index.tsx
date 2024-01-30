"use client";
import courseService, { CourseType } from "@/services/courseService";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ContainerSearch() {
  const query = useSearchParams();
  const searchName: any = query.get("name");
  const [searchResult, setSearchResult] = useState<CourseType[]>([]);
  const searchCourses = async () => {
    const res = await courseService.getSearch(searchName);
    setSearchResult(res.data.courses);
  };

  useEffect(() => {
    searchCourses();
  }, [searchName]);

  return (
    <>
      {searchResult?.map((course) => (
        <div key={course.id}>
          <p>{course.name}</p>
        </div>
      ))}
    </>
  );
}
