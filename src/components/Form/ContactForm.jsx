import { useState, useContext } from 'react';
import { LenguaContext } from "../../Context/LangProvider";
import emailjs from 'emailjs-com';

const ContactForm = () => {

  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  
  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener datos de la encuesta del localStorage
    const userResponses = JSON.parse(localStorage.getItem('userResponses')) || {};
   
    // Renombrar claves y convertir arrays a strings
    const formattedUserResponses = {};
    Object.keys(userResponses).forEach((key) => {
      if (Array.isArray(userResponses[key])) {
        formattedUserResponses[`respuesta_${key}`] = userResponses[key].join(', ');
      } else {
        formattedUserResponses[key] = userResponses[key];
      }
    });

    const combinedData = {
      ...formattedUserResponses,
      ...formData
    };
    console.log(combinedData);
    // Guardar los datos combinados en el localStorage
    localStorage.setItem('combinedData', JSON.stringify(combinedData));

    const YOUR_SERVICE_ID = 'service_uyqk2tk';
    const YOUR_TEMPLATE_ID = 'template_8yxznu7';
    const YOUR_USER_ID = 'Iowmf_zIT-drLgNXc';

    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, {combinedData: combinedData}, YOUR_USER_ID)
      .then((response) => {
        console.log('Correo enviado exitosamente:', response.status, response.text);
        alert(lang === 'castellano' ? 'Datos enviados correctamente' : 'Data submitted successfully');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('Error al enviar el correo:', err);
      });
  };

  return (
    <>

        <form onSubmit={handleSubmit} className='form--box'>
            
        <h3>{lang==='castellano'?'Datos de contacto':'Contact information'}</h3>

        <div className='form__name--lastname'>
            <div className='form--input'>
                <label htmlFor="firstName"></label>
                <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder={lang==='castellano'?"Nombre *":"Name *"}
                required
                />
            </div>
            <div className='form--input'>
                <label htmlFor="lastName"></label>
                <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder={lang==='castellano'?"Apellido *":"Last name *"}
                required
                />
            </div>
        </div>
            
        <div className='form--input'>
            <label htmlFor="email"></label>
            <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={lang==='castellano'?"Correo Electrónico *":"Email *"}
            required
            />
        </div>

        <div className='form--input'>
            <label htmlFor="phone"></label>
            <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={lang==='castellano'?"Teléfono":"Phone number"}
            />
        </div>

        <h3>{lang==='castellano'?"Motivo de la consulta":"Reason for consultation"}</h3>

        <div className='form--textarea'>
            <label htmlFor="message"></label>
            <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={lang==='castellano'?"Consulta":"Query"}
            required
            />
        </div>
        <button type="submit" className='btn__form--submit'>{lang==='castellano'?"Enviar":"Submit"}</button>
        </form>
    </>
  );
};

export default ContactForm;
