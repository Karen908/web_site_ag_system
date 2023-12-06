import React from 'react'
import ProfileCards from './ProfileCards'
function Info_Equipo() {
  return (
    <div>
          <div  className="flex flex-wrap justify-center">
      <ProfileCards
        imgSrc="/img/Equipo/jerry.png"
        name="Ivan Sepulveda"
        role="Analista-desarollador"
        portfolioLink=""
        githubLink="https://github.com/sepu2"
        linkedinLink="https://www.linkedin.com/in/santsp15"
      />
      <ProfileCards
        imgSrc="/img/Equipo/joseph.png"
        name="Joseph Lopez"
        role="CEO-Director ejecutivo"
        portfolioLink=""
        githubLink="https://github.com/ElGonDo"
        linkedinLink="https://www.linkedin.com/in/joseph-lopez-henao"
      />
      <ProfileCards
        imgSrc="/img/Equipo/KarenP.jpeg"
        name="Karen Perez"
        role="Gerente de producto"
        portfolioLink=""
        githubLink="https://github.com/Karen908"
        linkedinLink="https://www.linkedin.com/in/karenperez135/"
      />
      <ProfileCards
        imgSrc="/img/Equipo/andres.png"
        name="Andres Matuk"
        role="Director de proyecto"
        portfolioLink=""
        githubLink=""
        linkedinLink=""
      />
      <ProfileCards
        imgSrc="/img/Equipo/armando1.png"
        name="Armando Torrez"
        role="Director de desarrollo"
        portfolioLink=""
        githubLink=""
        linkedinLink=""
      />
       </div>
    </div>
  )
}

export default Info_Equipo
