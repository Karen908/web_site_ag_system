
import Header from "../Header/Navbar";
import Contenido from "./Contenido";
import Imagenes from "./Imagenes"
const Page1 = () => {
    return (
        <div className=" dark:bg-black">
      <Header />
      <Contenido />
      <Imagenes />
        </div>
    );
};

export default Page1;