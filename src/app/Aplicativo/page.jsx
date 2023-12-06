import Header from "./Components/Header/Navbar";
import Contenido from "./Components/Contenido/Contenido";
import Imagenes from "./Components/Contenido/Imagenes"

import DarkMod from "./Components/Home/DarkMode";

const page = () => {
    return (
        <div>
      <Header />
      <Contenido />
      <Imagenes />

        </div>
    );
};

export default page;