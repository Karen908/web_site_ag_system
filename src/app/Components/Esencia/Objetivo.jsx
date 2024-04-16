import React, { useState } from 'react';

function Objetivo() {
 const [isLabelVisible, setLabelVisible] = useState(false);

 return (
  <div
    className="h-screen bg-cover w-full"
    style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)),url('img/Objetivo/Objetivo.jpeg')", padding: "10%" }}
  >
    <h1 className="text-4xl text-white font-bold font-sans mb-4 transition-transform duration-500 transform hover:scale-110 mt-8">
      Objetivos 
    </h1>
    <div className="w-98 md:w-98 lg:w-98 mb-4 md:mb-0">
      <div className="bg-navy-900 rounded-17 w-full h-full relative">
        <img
          src='/img/Equipo/Team.jpeg'
          alt="Logo"
          className='object-cover w-98 h-96 rounded-17 transition-transform duration-500 transform hover:scale-110'
          onMouseEnter={() => setLabelVisible(true)}
          onMouseLeave={() => setLabelVisible(false)}
        />
        {isLabelVisible && <div className="absolute top-0 left-0 p-2 bg-white text-black">TEAM</div>}
      </div> 
    </div>


  <div class="  flex">
    <section id="card1" class="card">
      <img
        src='/img/Objetivo/Objetivo.jpeg'
        alt="Logo"
        class='object-cover w-full h-full'
      />
      <div class="card1__content">
        <p class="card1__title">Lorem Ipsum</p>
        <p class="card1__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          justo vel lorem tincidunt ultrices at non nunc. Donec in sapien
          viverra, tincidunt augue id, efficitur massa.
        </p>
      </div>
    </section>

    <div class="card-container">
  <div class="card">
  <div class="front-content">
  <img
        src='/img/Objetivo/Objetivo.jpeg'
        alt="Logo"
        class='object-cover w-full h-full'
      />
  </div>
  <div class="content">
    <p class="heading">Card Hover</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipii
      voluptas ten mollitia pariatur odit, ab
      minus ratione adipisci accusamus vel est excepturi laboriosam magnam
      necessitatibus dignissimos molestias.
    </p>
  </div>
</div>
</div>
<div className="h-screen flex">
  <div className="flex-1"></div>
  <div className="flex-1 bg-cover" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)),url('img/Objetivo/Objetivo.jpeg')", padding: "10%" }}>
  </div>
</div>

  </div>
</div>

  )
}

export default Objetivo
