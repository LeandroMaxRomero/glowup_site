import { useEffect, useContext } from "react";
import QuestionCard from '../QuestionCard/QuestionCard';
import { SurveyContext } from '../../Context/SurveyContext';
import { LenguaContext } from "../../Context/LangProvider";
import { BackGroundTerms } from "./BackGroundTerms";
import { Footer } from "../Footer/Footer";


export const PrivacyPolicy = () => {
  const { setShowCard, showCard } = useContext(SurveyContext);
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  useEffect(() => {
    const isCompleted = localStorage.getItem('surveyCompleted');
    const isClosedWithoutCompletion = localStorage.getItem('surveyClosedWithoutCompletion');


    if (!isCompleted && isClosedWithoutCompletion) {
      setShowCard(true);
    }
    
  }, [setShowCard]);

  return (

    <div>
      <QuestionCard />
      <BackGroundTerms />
      {lang!=='castellano'
      ?
        <div className={(showCard===true?'blur':'')+" terms__content"}>
          <h2>PRIVACY POLICY</h2>
          <p>{`This Privacy Policy outlines how Glow Up Media Group ("we," "us," or "our") collects, utilizes, and shares data gathered through your interaction with our website, applications, email and newsletter communications, and online services (collectively, the "Site").`}</p>

          <h3>Table of Contents</h3>
          <p>1. Collection of Data</p>
          <p>2. Use of Collected Data</p>
          <p>3. Third-Party Websites and Services</p>
          <p>4. Sharing of Collected Data</p>
          <p>5. Transfer of Collected Data</p>
          <p>6. Data Security</p>
          <p>7. Data Retention</p>
          <p>8. Children and Parents</p>
          <p>9. Our “Do Not Track” (DNT) Policy</p>
          <p>10. Your Data Preferences</p>
          <p>11. Contact Us</p>

          <h3>1. Collection of Data</h3>

          <p>We collect information from you when you fill out a form on our website. This information may include your name, email address, or phone number. While browsing our site, you have the option to remain anonymous.</p>

          <h3>2. Use of Collected Data</h3>

          <p>We employ collected information to enhance customer service by effectively addressing your inquiries and support needs.</p>

          <h3>3. Third-Party Websites and Services</h3>

          <p>Occasionally, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We bear no responsibility or liability for the content and activities of these linked sites.</p>

          <h3>4. Sharing of Collected Data</h3>

          <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. However, we may share information with trusted third parties who assist us in operating our website or servicing you, provided they agree to keep this information confidential.</p>

          <h3>5. Transfer of Collected Data</h3>

          <p>Your data may be transferred to, stored, and processed in the United States or other jurisdictions as necessary. We take appropriate measures to ensure your data is treated securely and in accordance with this Privacy Policy.</p>

          <h3>6. Data Security</h3>

          <p>We implement various security measures to safeguard your personal information when you enter, submit, or access it on our website.</p>

          <h3>7. Data Retention</h3>

          <p>We retain data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by applicable laws and regulations.</p>

          <h3>8. Children and Parents</h3>

          <p>We comply with COPPA (Children’s Online Privacy Protection Act) and do not collect information from anyone under 13 years of age. Parents concerned about their {`child's`} data can contact us for assistance.</p>

          <h3>9. Our “Do Not Track” (DNT) Policy</h3>

          <p>We do not currently respond to DNT signals or similar mechanisms.</p>

          <h3>10. Your Data Preferences</h3>

          <p>You have the autonomy to adjust your data preferences, including opting out of certain data uses, by contacting us directly or utilizing available tools provided on the Site.</p>

          <h3>11. Contact Us</h3>

          <p>For any inquiries, concerns, or to exercise your data preferences, please {`don't`} hesitate to reach out to us through our website.</p>

        </div>
      :
        <div className={(showCard===true?'blur':'')+" terms__content"}>
          <h2>POLÍTICA DE PRIVACIDAD</h2>
          <p>{`Esta Política de Privacidad describe cómo Glow Up Media Group ("nosotros", "nos" o "nuestro") recopila, utiliza y comparte datos obtenidos a través de su interacción con nuestro sitio web, aplicaciones, comunicaciones por correo electrónico y boletines, y servicios en línea (colectivamente, el "Sitio").`}</p>

          <h3>Tabla de Contenidos</h3>
          <p>1. Recopilación de Datos</p>
          <p>2. Uso de los Datos Recopilados</p>
          <p>3. Sitios Web y Servicios de Terceros</p>
          <p>4. Compartir los Datos Recopilados</p>
          <p>5. Transferencia de los Datos Recopilados</p>
          <p>6. Seguridad de los Datos</p>
          <p>7. Retención de Datos</p>
          <p>8. Niños y Padres</p>
          <p>9. Nuestra Política de {`"No Rastrear"`} (DNT)</p>
          <p>10. Sus Preferencias de Datos</p>
          <p>11. Contáctenos</p>

          <h3>1. Recopilación de Datos</h3>

          <p>Recopilamos información cuando usted completa un formulario en nuestro sitio web. Esta información puede incluir su nombre, dirección de correo electrónico o número de teléfono. Mientras navega por nuestro sitio, tiene la opción de permanecer anónimo.</p>

          <h3>2. Uso de los Datos Recopilados</h3>

          <p>Utilizamos la información recopilada para mejorar el servicio al cliente, abordando de manera efectiva sus consultas y necesidades de soporte.</p>

          <h3>3. Sitios Web y Servicios de Terceros</h3>

          <p>Ocasionalmente, podemos incluir u ofrecer productos o servicios de terceros en nuestro sitio web. Estos sitios de terceros tienen políticas de privacidad independientes y separadas. No asumimos ninguna responsabilidad por el contenido y las actividades de estos sitios enlazados.</p>

          <h3>4. Compartir los Datos Recopilados</h3>

          <p>No vendemos, comerciamos ni transferimos de otra manera a terceros su información de identificación personal. Sin embargo, podemos compartir información con terceros de confianza que nos ayudan a operar nuestro sitio web o a prestarle servicios, siempre que acuerden mantener esta información confidencial.</p>

          <h3>5. Transferencia de los Datos Recopilados</h3>

          <p>Sus datos pueden ser transferidos, almacenados y procesados en los Estados Unidos u otras jurisdicciones según sea necesario. Tomamos medidas apropiadas para asegurar que sus datos sean tratados de manera segura y de acuerdo con esta Política de Privacidad.</p>

          <h3>6. Seguridad de los Datos</h3>

          <p>Implementamos varias medidas de seguridad para proteger su información personal cuando usted la ingresa, envía o accede a ella en nuestro sitio web.</p>

          <h3>7. Retención de Datos</h3>

          <p>Retenemos los datos solo durante el tiempo necesario para cumplir con los propósitos descritos en esta Política de Privacidad o según lo requerido por las leyes y regulaciones aplicables.</p>

          <h3>8. Niños y Padres</h3>

          <p>Cumplimos con COPPA (Ley de Protección de la Privacidad Infantil en Línea) y no recopilamos información de nadie menor de 13 años. Los padres preocupados por los datos de su hijo pueden contactarnos para recibir asistencia.</p>

          <h3>9. Nuestra Política de {`"No Rastrear"`} (DNT)</h3>

          <p>Actualmente, no respondemos a señales DNT u otros mecanismos similares.</p>

          <h3>10. Sus Preferencias de Datos</h3>

          <p>Usted tiene la autonomía para ajustar sus preferencias de datos, incluyendo optar por no participar en ciertos usos de datos, contactándonos directamente o utilizando las herramientas disponibles en el Sitio.</p>

          <h3>11. Contáctenos</h3>

          <p>Para cualquier consulta, inquietud o para ejercer sus preferencias de datos, por favor no dude en contactarnos a través de nuestro sitio web.</p>

        </div>
      }

      

      <Footer />
    </div>
  )
}
