import React from 'react'
import Image from 'next/image';
import { FaCheckCircle, FaUserShield, FaLock, FaFileAlt, FaSyncAlt, FaEnvelope } from 'react-icons/fa';

const contactEmail = "Agsysteminformation@gmail.com";
const TerminosCondiciones = () => {
  return (
    <div className="font-sans bg-gray-50">
      <section className="overflow-hidden bg-slate-900 text-white p-6 sm:grid sm:grid-cols-2 sm:items-center shadow-sky-500 shadow-sm">
        <div className="sm:p-10 md:p-12 lg:px-20 lg:py-20">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-5xl">
              Términos y Condiciones
            </h2>
            <p className="hidden md:mt-4 md:block md:text-xs lg:text-base">
              Con este apartado, obtienes una comprensión clara y completa de las reglas y pautas que rigen el uso de la app. Asegúrate de leer y entender estos términos para disfrutar de una experiencia segura y satisfactoria en nuestra app.
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
            Estos términos están diseñados para garantizar tu seguridad, proteger tus derechos y promover un ambiente respetuoso para todos los usuarios. Te invitamos a revisarlos detenidamente.
            </p>
          </div>

          <div className="space-y-8">
            <Section title="1. Aceptación de los Términos" icon={FaCheckCircle}>
            Al acceder y utilizar nuestra aplicación, aceptas automáticamente cumplir con estos Términos y Condiciones en su totalidad. Tu decisión de continuar utilizando nuestra aplicación implica tu consentimiento y acuerdo con cada uno de los términos aquí establecidos. Sin embargo, si no estás de acuerdo con algún aspecto de estos términos, te pedimos que te abstengas de utilizar nuestra plataforma. Es fundamental para nosotros que cada usuario esté plenamente informado y comprometido con nuestros términos y condiciones.            </Section>

            <Section title="2. Uso Responsable" icon={FaUserShield}>
            Debes comprometerte a utilizar nuestra aplicación de manera responsable, ética y legal. Esto implica respetar los derechos de otros usuarios, así como los recursos y la integridad de nuestra plataforma. No debes realizar acciones que puedan dañar, interrumpir o comprometer la seguridad de la aplicación, de otros usuarios, o que violen las leyes locales, nacionales o internacionales. Estamos comprometidos con la creación de un entorno seguro y acogedor para todos, y esperamos que cada usuario contribuya positivamente a esta misión.            </Section>

            <Section title="3. Privacidad" icon={FaLock}>
            Nos tomamos muy en serio tu privacidad y la seguridad de tus datos personales. Queremos que te sientas seguro al utilizar nuestra aplicación, por lo que hemos implementado medidas para proteger tus datos y garantizar su confidencialidad. Te invitamos a revisar nuestra <a className='text-cyan-500 hover:text-blue-600' href="Politicas_privacidad">Política de Privacidad </a> para obtener información detallada sobre cómo recopilamos, utilizamos y protegemos tus datos personales. Al usar nuestra aplicación, consientes el procesamiento de tus datos personales de acuerdo con nuestra Política de Privacidad.            </Section>

            <Section title="4. Contenido Generado por el Usuario" icon={FaFileAlt}>
            Valoramos la contribución de nuestros usuarios al contenido de nuestra aplicación. Sin embargo, es importante que cualquier contenido que compartas en nuestra plataforma sea apropiado, respetuoso y cumpla con nuestros estándares de comunidad. Nos reservamos el derecho de eliminar cualquier contenido que consideremos inapropiado, ofensivo, ilegal o que infrinja los derechos de otros usuarios. Al publicar contenido en nuestra aplicación, nos otorgas una licencia no exclusiva, mundial, libre de regalías, para utilizar, reproducir, modificar y distribuir dicho contenido en cualquier medio.            </Section>

            <Section title="5. Modificaciones de los Términos" icon={FaSyncAlt}>
            Entendemos que nuestras políticas y términos pueden necesitar actualizaciones periódicas para reflejar cambios en nuestra aplicación o en las leyes y regulaciones pertinentes. Por lo tanto, nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento y por cualquier motivo. Te notificaremos sobre cualquier cambio significativo a través de nuestra aplicación o por otros medios de contacto proporcionados por ti. Te recomendamos revisar estos términos periódicamente para estar al tanto de cualquier actualización. El uso continuado de nuestra aplicación después de la publicación de los cambios constituye tu aceptación de dichos cambios.            </Section>

            <Section title="Contáctanos" icon={FaEnvelope}>
            Si tienes alguna pregunta, comentario o inquietud sobre estos Términos y Condiciones, por favor, no dudes en ponerte en contacto con nosotros a través del correo <a className='text-blue-600' href={`mailto:${contactEmail}`}>{contactEmail}</a>. Estamos aquí para brindarte apoyo y resolver cualquier duda que puedas tener sobre nuestra aplicación y sus políticas.
            Esperamos que esta información te brinde la claridad y la confianza necesarias para disfrutar plenamente de tu experiencia en nuestra aplicación. Tu seguridad y satisfacción son nuestra máxima prioridad, y estamos comprometidos a proporcionarte una experiencia positiva y enriquecedora en nuestra plataforma.  
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, icon: Icon, children }) => (
  <div className="border-b-2 border-blue-500 pb-4">
    <h3 className="text-xl font-bold text-slate-900 mt-4 flex items-center">
      <Icon className="text-sky-500 mr-2" />
      {title}
    </h3>
    <p className="text-sm sm:text-base font-medium text-slate-900 mt-2">
      {children}
    </p>
  </div>
);


export default TerminosCondiciones;
