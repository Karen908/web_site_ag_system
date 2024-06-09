import React from 'react';
import Image from 'next/image';
import { FaCheckCircle} from 'react-icons/fa';

const contactEmail = "Agsysteminformation@gmail.com";

function Politicas_privacidad() {
    return (
        <div className="font-sans bg-gray-50">
          <section className="overflow-hidden bg-slate-900 text-white p-6 sm:grid sm:grid-cols-2 sm:items-center shadow-sky-500 shadow-sm">
            <div className="sm:p-10 md:p-12 lg:px-20 lg:py-20">
              <div className="mx-auto max-w-xl text-center sm:text-left">
                <h2 className="text-2xl font-bold md:text-3xl lg:text-5xl">
                  Politicas de Privacidad
                </h2>
                <p className="hidden md:mt-4 md:block md:text-xs lg:text-base">
                  Tu privacidad es nuestra prioridad. Descubre cómo protegemos tus datos personales y cómo los utilizamos para mejorar tu experiencia en nuestra aplicación.
                </p>
              </div>
            </div>
            <Image
            className="bg-slate-50"
            src="/img/Cn_mecab/Logos/LargoCNMecab.png"
            alt="Background Image"
            width={660}
            height={660}
            quality={50}
            priority 
            style={{ width: 'auto', height: 'auto' }} 
            />    
          </section>

          <div className="w-full py-10 px-6 sm:px-12 lg:px-44">
            <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-slate-900">Última actualización: 23 de agosto de 2023</h2>
                <p className="text-sm sm:text-base font-medium text-slate-900 mt-2">
                  Nuestra política de privacidad está diseñada para salvaguardar tu privacidad, proteger tus derechos y fomentar un entorno seguro y respetuoso para todos nuestros usuarios. Te animamos a revisarla cuidadosamente para comprender cómo protegemos tus datos personales y garantizamos tu seguridad en nuestra plataforma.
                </p>
              </div>

              <div className="space-y-8">
                <Section title="1. Datos que recopilamos" icon={FaCheckCircle}>
                  <ul>
                    <li>
                      <h3 className="ml-12 text-lg font-bold text-slate-900">Información de Registro:</h3>
                      <p className='ml-12'>Al crear una cuenta en nuestra aplicación, necesitamos recopilar cierta información básica, como tu nombre, dirección de correo electrónico y contraseña. Esta información es fundamental para garantizar la seguridad de tu cuenta y para personalizar tu experiencia dentro de la aplicación.</p>
                      <h3 className="ml-12 text-lg font-bold text-slate-900">Datos de uso</h3>
                      <p className='ml-12 '>Observamos y analizamos cómo interactúas con nuestra aplicación. Esto incluye las acciones que realizas dentro de la aplicación, el tiempo que pasas en ella y cualquier otra actividad que nos ayude a entender cómo podemos mejorar nuestros servicios para ti y para todos nuestros usuarios.</p>
                      <h3 className="ml-12 text-lg font-bold text-slate-900">Datos de dispositivo</h3>
                      <p className='ml-12 '>Recopilamos información técnica sobre tu dispositivo, como el modelo, la versión del sistema operativo y la dirección IP. Esta información nos ayuda a garantizar la compatibilidad de nuestra aplicación con una amplia gama de dispositivos y a detectar y solucionar posibles problemas técnicos.</p>
                    </li>
                  </ul>
                </Section>
              </div>
              <div className="space-y-8">
                <Section title="2. Uso de tus Datos" icon={FaCheckCircle}>
                  <p>Utilizamos tus datos para:</p>
                  <ul>
                    <li>
                      <h3 className="ml-12 text-lg font-bold text-slate-900">Proporcionar y Mantener el Servicio: </h3>
                      <p className='ml-12 '> Nuestro principal objetivo es ofrecerte una experiencia óptima dentro de nuestra aplicación. Utilizamos tus datos para garantizar el funcionamiento adecuado de todos nuestros servicios y para proporcionarte las actualizaciones y mejoras necesarias para una experiencia de usuario satisfactoria.</p>
                      <h3 className="ml-12 text-lg font-bold text-slate-900">Mejorar el Servicio:</h3>
                      <p className='ml-12 '> Analizamos detenidamente los datos recopilados para identificar áreas de mejora en nuestra aplicación. Esta información nos ayuda a comprender mejor tus necesidades y preferencias y a implementar cambios que hagan que nuestra aplicación sea más útil, eficiente y fácil de usar para ti y para todos nuestros usuarios.</p>
                      <h3 className="ml-12 text-lg font-bold text-slate-900">Comunicación:</h3>
                      <p className='ml-12 '> Mantenerte informado es importante para nosotros. Por eso, utilizamos tu dirección de correo electrónico para enviarte comunicaciones relacionadas con el servicio, como actualizaciones sobre cambios en nuestros términos y condiciones, nuevas funciones disponibles y cualquier otra información relevante que pueda afectar tu experiencia dentro de la aplicación.</p>
                      <h3 className="ml-12 text-lg font-bold text-slate-900">Seguridad:</h3>
                      <p className='ml-12 '> La seguridad de tus datos es una de nuestras principales prioridades. Utilizamos medidas de seguridad avanzadas para proteger tus datos personales contra el acceso no autorizado, la pérdida, el uso indebido o la alteración. Además, estamos constantemente revisando y actualizando nuestras políticas de seguridad para garantizar que tu información esté siempre protegida.</p>
                    </li>
                  </ul>
                </Section>
              </div>
              <div className="space-y-8">
                <Section title="3. Compartir tus Datos" icon={FaCheckCircle}>
                  <p>Respetamos tu privacidad y nos comprometemos a no compartir tus datos personales con terceros, excepto en las siguientes circunstancias:</p>
                  <ul>
                    <li>
                      <h3 className="ml-12 text-lg font-bold text-slate-900">Cumplimiento Legal:</h3>
                      <p className='ml-12 '>En determinadas situaciones, podemos estar legalmente obligados a divulgar tus datos personales, por ejemplo, en respuesta a una orden judicial o una solicitud de las autoridades gubernamentales.</p>
                      <h3 className="ml-12 text-lg font-bold text-slate-900">Protección de Derechos: </h3>
                      <p className='ml-12 '>Nos reservamos el derecho de compartir tus datos personales si consideramos que es necesario para proteger nuestros derechos legales, tu seguridad o la seguridad de otros usuarios de nuestra aplicación.</p>
                    </li>
                  </ul>
                </Section>
              </div>
              <div className="space-y-8">
                <Section title="4. Tus Derechos" icon={FaCheckCircle}>
                  <p>Como usuario de nuestra aplicación, tienes ciertos derechos en relación con tus datos personales:</p>
                  <ul>
                    <li>
                      <h3 className=" ml-12 text-lg font-bold text-slate-900">Acceso: </h3>
                      <p className='ml-12 '>Tienes derecho a acceder a la información personal que tenemos sobre ti y a recibir una copia de tus datos personales.</p>
                      <h3 className="ml-12 text-lg font-bold text-slate-900">Rectificación:  </h3>
                      <p className='ml-12 '>Si los datos personales que tenemos sobre ti son inexactos o están incompletos, tienes derecho a solicitar su corrección o actualización.</p>
                      <h3 className="ml-12 text-lg font-bold text-slate-900">Supresión: </h3>
                      <p className='ml-12 '>Puedes solicitar la eliminación de tus datos personales de nuestros sistemas en cualquier momento y por cualquier motivo.</p>
                      <h3 className="ml-12 text-lg font-bold text-slate-900">Oposición al Procesamiento:  </h3>
                      <p className='ml-12 '>En ciertas circunstancias, tienes derecho a oponerte al procesamiento de tus datos personales por razones relacionadas con tu situación particular.</p>
                    </li>
                  </ul>
                </Section>
              </div>
              <div className="space-y-8">
                <Section title="3. Cambios en la Política de Privacidad" icon={FaCheckCircle}>
                  <p>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento y sin previo aviso. Cualquier cambio significativo en esta política se publicará en nuestra aplicación para que estés debidamente informado.
                    Si tienes alguna pregunta o inquietud sobre nuestra política de privacidad, no dudes en ponerte en contacto con nosotros atravez del correo <a className='text-blue-600' href={`mailto:${contactEmail}`}>{contactEmail}</a>.
                    Gracias por confiar en nuestra aplicación y por tu compromiso con la protección de tus datos personales.</p>
                </Section>
              </div>
            </div>
          </div>
        </div>
      );
    };

    const Section = ({ title, icon: Icon, children }) => (
      <div className="border-b-2 border-blue-500 pb-4">
        <h3 className="text-2xl font-bold text-slate-900 mt-4 flex items-center">
          <Icon className="text-sky-500 mr-2" />
          {title}
        </h3>
        <div>{children}</div> 
      </div>
    );

    export default Politicas_privacidad;
