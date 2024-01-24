import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

//Passo 8 - criando a seção de slides
//Instalando @splidejs/react-splide

const SlideComponent = () => {
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
          <SplideSlide></SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default SlideComponent;
