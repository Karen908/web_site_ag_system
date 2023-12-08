import Header from "./Components/Header/Navbar";
import Contenido from "./Components/Contenido/Contenido";
import Imagenes from "./Components/Contenido/Imagenes"
const page = () => {
    return (
        <div className=" dark:bg-black">
      <Header />
      <Contenido />
      <Imagenes />

        </div>
    );
};

export default page;