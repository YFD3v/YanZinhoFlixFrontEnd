import { CourseType } from "@/services/courseService";
import {
  Splide,
  SplideSlide,
} from "../../../../node_modules/@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import SlideCard from "../SlideCard";
//Passo 8 - criando a seção de slides
//Instalando @splidejs/react-splide
//Passo 10 - finalização da estrutura dos slides
interface props {
  courses: CourseType[];
}

const SlideComponent = ({ courses }: props) => {
  let slideCount = courses.length >= 4 ? 4 : courses.length;

  return (
    <>
      <div className="d-flex flex-column align-items-center py-4">
        <Splide
          options={{
            type: "loop",
            perPage: slideCount,
            perMove: 2,
            width: slideCount * 300,
            pagination: false,
            arrows: slideCount >= 4 ? true : false,
            drag: slideCount >= 4 ? true : false,
            breakpoints: {
              1200: {
                perPage: slideCount >= 2 ? 2 : 1,
                perMove: 1,
                width: slideCount >= 2 ? 600 : 300,
                arrows: slideCount >= 2 ? true : false,
                drag: slideCount >= 2 ? true : false,
              },
              600: {
                perPage: 1,
                width: 300,
                arrows: slideCount >= 1 ? true : false,
                drag: slideCount >= 1 ? true : false,
              },
              300: {
                width: 240,
              },
            },
          }}
        >
          {courses?.map((course) => (
            <SplideSlide key={course.id}>
              <SlideCard course={course} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default SlideComponent;
