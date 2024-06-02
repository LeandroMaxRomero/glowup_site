import { useEffect, useContext } from "react";
import QuestionCard from '../QuestionCard/QuestionCard';
import { SurveyContext } from '../../Context/SurveyContext';
import { LenguaContext } from "../../Context/LangProvider";
import { Footer } from "../Footer/Footer";
import * as Scroll from "react-scroll";
import { BackGroundTerms } from "./BackGroundTerms";


export const TermsOfUse = () => {

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

  let scroll = Scroll.animateScroll;

  useEffect(() => {
    scroll.scrollToTop();
  });

  return (
    <div>

      <QuestionCard />
      <BackGroundTerms />
      
      <div className={(showCard===true?'blur':'')+" terms__content"}>

        {lang=== 'castellano'
        ?
        <>
          <h2>TÉRMINOS DE USO</h2>
          <div>
            <p>Bienvenido al sitio web de Glow Up Media Group (el “Sitio”). Estos Términos de Uso rigen su acceso y uso del Sitio, incluidos cualquier contenido, características y servicios ofrecidos en o a través del Sitio. Al acceder o utilizar el Sitio, usted acepta estos Términos de Uso.</p>
            <br /><p><span>Si no está de acuerdo con estos Términos de Uso, no debe acceder ni usar el Sitio.</span></p>
          </div>
          
          <h3>1. Cambios en el Sitio o en los Términos</h3>

          <p>Glow Up Media Group se reserva el derecho, en cualquier momento, de modificar, suspender o descontinuar el Sitio (total o parcialmente) a su entera discreción con o sin previo aviso. También podemos revisar estos Términos de Uso o imponer nuevos términos y condiciones con respecto al acceso o uso del Sitio, el Contenido, o cualquier otro asunto, a su entera discreción. Cualquier modificación a los Términos entrará en vigencia cuando se publiquen. Su uso continuado del Sitio después de dichos cambios constituye la aceptación de los términos actualizados.</p>

          <h3>2. Vigencia y Terminación</h3>

          <p>Estos Términos de Uso permanecerán en pleno vigor y efecto mientras usted acceda y use el Sitio. Glow Up Media Group puede terminar estos Términos o descontinuar la operación del Sitio sin previo aviso, en cualquier momento y por cualquier motivo, a nuestra entera discreción, sin responsabilidad alguna, incluyendo, entre otros, si usted incumple cualquiera de estos Términos. En caso de terminación de estos Términos con respecto a usted, ya no estará autorizado para acceder o usar el Sitio o cualquier Contenido.</p>

          <h3>3. Licencia; Contenido del Sitio</h3>

          <p>Licencia: Sujeto a estos Términos, Glow Up Media Group le otorga una licencia no transferible, no exclusiva, revocable y limitada para usar y acceder al Sitio únicamente para su uso personal y no comercial. El acceso no autorizado o el uso del Sitio o del Contenido es una violación de estos Términos y puede ser una violación de la ley. Contenido del Sitio: A menos que se permita específicamente en este documento, ninguna información, materiales, archivos, videos u otro contenido (colectivamente {`"Contenido"`}) que componga, esté contenido o se distribuya a través del Sitio puede ser reproducido de ninguna forma o utilizado por usted sin el consentimiento previo por escrito de Glow Up Media Group. El Sitio y el Contenido que se encuentra en él son propiedad de Glow Up Media Group, sus licenciatarios y/o licenciadores.</p>

          <h3>4. Conducta del Usuario; Actividades Prohibidas</h3>

          <p>Usted acepta usar el Sitio solo para fines legales y de acuerdo con estos Términos de Uso. Usted acepta no publicar, cargar o enviar ningún contenido que viole las leyes aplicables, infrinja derechos de propiedad intelectual, o sea difamatorio, odioso u ofensivo. Además, usted acepta no participar en actividades prohibidas, incluyendo el acceso automatizado o la interrupción de nuestro sitio web.</p>

          <h3>5. Política de Privacidad</h3>

          <p>Su privacidad es importante para nosotros. Por favor revise nuestra Política de Privacidad para obtener información sobre cómo recopilamos, usamos y protegemos sus datos personales de acuerdo con las leyes y regulaciones aplicables.</p>

          <h3>6. Enlaces de Terceros</h3>

          <p>El Sitio puede contener enlaces a sitios web y servicios de terceros ({`"Enlaces de Terceros"`}). Tales Enlaces de Terceros no están bajo el control de Glow Up Media Group, y Glow Up Media Group no es responsable de ningún Enlace de Terceros. Su interacción con todos los Enlaces de Terceros es bajo su propio riesgo.</p>

          <h3>7. Información de Derechos de Autor y Marca Registrada</h3>

          <p>Todo el contenido y las marcas registradas en el sitio web de Glow Up Media Group están protegidos por leyes de derechos de autor y tratados internacionales. El uso no autorizado de nuestras marcas registradas o contenido está prohibido sin el consentimiento previo por escrito.</p>

          <h3>8. Renuncia de Garantías y Represent</h3>

          <p>EL SITIO Y EL CONTENIDO CONTENIDO EN Y DIFUNDIDO DESDE EL SITIO SE PROPORCIONAN {`"TAL CUAL", "SEGÚN DISPONIBILIDAD"`}, Y SIN GARANTÍA O REPRESENTACIÓN DE NINGÚN TIPO, YA SEA EXPRESA O IMPLÍCITA. USTED ASUME TODO EL RIESGO EN CUANTO A SU ACCESO Y USO DEL SITIO.</p>

          <h3>9. Limitación de Responsabilidad</h3>

          <p>HASTA EL MÁXIMO PERMITIDO POR LA LEY, EN NINGÚN CASO GLOW UP MEDIA GROUP O SUS AFILIADOS SERÁN RESPONSABLES POR DAÑOS INDIRECTOS, INCIDENTALES, CONSECUENTES, ESPECIALES O EJEMPLARES QUE SURJAN O ESTÉN RELACIONADOS CON SU USO DEL SITIO.</p>

          <h3>10. Indemnización</h3>

          <p>Usted acepta defender, indemnizar y mantener indemne a Glow Up Media Group y sus afiliados de y contra cualquier reclamo, daño, obligación, pérdida, responsabilidad, costo o deuda y gastos que surjan de su uso del Sitio.</p>

          <h3>11. Ley Aplicable y Jurisdicción</h3>

          <p>Estos Términos de Uso se regirán y serán interpretados de acuerdo con las leyes de la jurisdicción donde surja el reclamo, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Cualquier disputa que surja de o esté relacionada con estos Términos de Uso o su acceso o uso del Sitio estará sujeta a la jurisdicción exclusiva de los tribunales de la jurisdicción donde surja el reclamo.</p>

        </>
        :
        <>
          <h2>TERMS OF USE</h2>
          <p>Welcome to the Glow Up Media Group website (the “Site”). These Terms of Use govern your access to and use of the Site, including any content, features, and services offered on or through the Site. By accessing or using the Site, you agree to these Terms of Use.</p>
          <p><span>If you do not agree to these Terms of Use, you must not access or use the Site.</span></p>

          <h3>1. Changes to the Site or Terms</h3>

          <p>Glow Up Media Group reserves the right, at any time, to modify, suspend, or discontinue the Site (in whole or in part) at its sole discretion with or without notice to you. We may also revise these Terms of Use or impose new terms and conditions with respect to access to or use of the Site, the Content, or any other matter, in its sole discretion. Any modification to the Terms shall become effective when posted. Your continued use of the Site after such changes constitutes acceptance of the updated terms.</p>

          <h3>2. Term and Termination</h3>

          <p>These Terms of Use will remain in full force and effect while you access and use the Site. Glow Up Media Group may terminate these Terms or discontinue operation of the Site without notice to you, at any time and for any reason, in our sole discretion, without liability, including but not limited to if you breach any of these Terms. In the event of termination of these Terms with respect to you, you will no longer be authorized to access or use the Site or any Content.</p>

          <h3>3. License; Site Content</h3>

          <p>License: Subject to these Terms, Glow Up Media Group grants you a non-transferable, non-exclusive, revocable, limited license to use and access the Site solely for your own personal, non-commercial use. Unauthorized access to or use of the Site or the Content is a breach of these Terms and may be a violation of law. Site Content: Unless specifically permitted herein, no information, materials, files, videos, or other content (collectively “Content”) comprising, contained in, or distributed through the Site may be reproduced in any form or used by you without the prior written consent of Glow Up Media Group. The Site and the Content found therein are the property of Glow Up Media Group, its licensees, and/or licensors.</p>

          <h3>4. User Conduct; Prohibited Activities</h3>

          <p>You agree to use the Site only for lawful purposes and in accordance with these Terms of Use. You agree not to post, publish, or submit any content that violates applicable laws, infringes intellectual property rights, or is defamatory, hateful, or offensive. Additionally, you agree not to engage in prohibited activities, including automated access or disruption of our website.</p>

          <h3>5. Privacy Policy</h3>

          <p>Your privacy is important to us. Please review our Privacy Policy for information on how we collect, use, and protect your personal data in accordance with applicable laws and regulations.</p>

          <h3>6. Third-Party Links</h3>

          <p>The Site may contain links to third-party websites and services for third parties (“Third-Party Links”). Such Third-Party Links are not under the control of Glow Up Media Group, and Glow Up Media Group is not responsible for any Third-Party Links. Your interaction with all Third-Party Links is at your own risk.</p>

          <h3>7. Copyright and Trademark Information</h3>

          <p>All content and trademarks on the Glow Up Media Group website are protected by copyright laws and international treaties. Unauthorized use of our trademarks or content is prohibited without prior written consent.</p>

          <h3>8. Disclaimer of Warranties and Representations</h3>

          <p>THE SITE AND THE CONTENT CONTAINED IN AND DISSEMINATED FROM THE SITE ARE PROVIDED “AS IS,” “AS AVAILABLE,” AND WITHOUT WARRANTY OR REPRESENTATION OF ANY KIND, EITHER EXPRESS OR IMPLIED. YOU ASSUME THE ENTIRE RISK AS TO YOUR ACCESS TO AND USE OF THE SITE.</p>

          <h3>9. Limitation of Liability</h3>

          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL GLOW UP MEDIA GROUP OR ITS AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR EXEMPLARY DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SITE.</p>

          <h3>10. Indemnification</h3>

          <p>You agree to defend, indemnify, and hold harmless Glow Up Media Group and its affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses arising from your use of the Site.</p>

          <h3>11. Governing Law and Jurisdiction</h3>

          <p>These Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction where the claim arises, without regard to its conflicts of law provisions. Any dispute arising out of or relating to these Terms of Use or your access to or use of the Site shall be subject to the exclusive jurisdiction of the courts of the jurisdiction where the claim arises.</p>
        </>
        
        }

      </div>
           
      <Footer />
    </div>
  )
}
