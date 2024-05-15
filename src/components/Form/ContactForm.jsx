import { useState, useContext } from 'react';
import { LenguaContext } from "../../Context/LangProvider";

const ContactForm = () => {

  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();


const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

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

    // Combinar los datos de la encuesta con los del formulario
    const combinedData = {
      ...userResponses,
      ...formData
    };

    // Guardar los datos combinados en el localStorage
    localStorage.setItem('combinedData', JSON.stringify(combinedData));

    // Lógica adicional para enviar el correo electrónico, si es necesario
    sendEmail(combinedData);
    setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
  };

  // Función para enviar el correo electrónico
  const sendEmail = (data) => {
    // Aquí puedes agregar la lógica para enviar el correo electrónico con los datos combinados
    console.log('Datos combinados:', data);
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
