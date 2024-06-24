import Page1 from "./Components/Contenido/Home";
import Footer1 from "./Components/Header/Footer1";
import Page2 from "./Components/Objetivos/PrincipalObj";
import Page3 from "./Components/QueOfrecemos/PrincipalOfr";

const page = () => {
  return (
    <div>
      <Page1 />
      <Page2 />
      <Page3 />
      <Footer1 />
    </div>
    );
};

export default page;