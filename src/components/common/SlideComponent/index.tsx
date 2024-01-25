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
  return (
    <>
      <div>
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            perMove: 2,
            pagination: false,
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
