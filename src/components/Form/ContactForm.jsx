import { useState, useContext } from 'react';
import { LenguaContext } from "../../Context/LangProvider";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export const ContactForm = () => {

  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  const [showMenu, setShowMenu] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    speciality:'',
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

  const handleSelect = (speciality) => {
    setFormData({
      ...formData,
      speciality: speciality
    });
    setShowMenu(false);
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  })

  

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
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

    // const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    // const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    // const USER_ID = import.meta.env.VITE_USER_ID;

    const USER_ID = 'Iowmf_zIT-drLgNXc';
    const SERVICE_ID = 'service_uyqk2tk';
    const TEMPLATE_ID = 'template_8yxznu7';

    try {
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {combinedData: combinedData}, USER_ID);
      console.log('Correo enviado exitosamente:', response.status, response.text);


      await Swal.fire({
        title: 'Formulario enviado',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        position: 'center',
        background: '#000',
        iconColor:'#5BD8FF',
        color:'#fff'
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        speciality:'',
        phone: '',
        message: ''
      });

    } catch (err) {
      console.error('Error al enviar el correo:', err);
      await Toast.fire({
        icon: 'error',
        title: 'Error',
      });
    }
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

        {/* <div className='form--input select--form-wrapper'>
           <select
            id="speciality"
            name='speciality'
            className='select--form'
            value={formData.speciality}
            onChange={handleChange}
            required
            placeholder={lang === 'castellano' ? "Selecciona tu especialidad médica" : "Select your medical specialty"}
          >

            <option className='option--form' value='' disabled>{lang === 'castellano' ? "Selecciona tu especialidad médica" : "Select your medical specialty"}</option>
            <option className='option--form' value="Dental Clinics">{lang === 'castellano' ? "Clínicas dentales" : "Dental Clinics"}</option>
            <option className='option--form' value="Plastic Surgery Centers">{lang === 'castellano' ? "Centros de Cirugía Plástica" : "Plastic Surgery Centers"}</option>
            <option className='option--form' value="Orthopedic Clinics">{lang === 'castellano' ? "Clínicas Ortopédicas" : "Orthopedic Clinics"}</option>
            <option className='option--form' value="Dermatology Practices">{lang === 'castellano' ? "Prácticas de Dermatología" : "Dermatology Practices"}</option>
            <option className='option--form' value="Fertility Clinics">{lang === 'castellano' ? "Clínicas de fertilidad" : "Fertility Clinics"}</option>
            <option className='option--form' value="Mental Health Clinics">{lang === 'castellano' ? "Clínicas de salud mental" : "Mental Health Clinics"}</option>
            <option className='option--form' value="Chiropractic Clinics">{lang === 'castellano' ? "Clínicas Quiroprácticas" : "Chiropractic Clinics"}</option>
            <option className='option--form' value="Other (specify below)">{lang === 'castellano' ? "Otro (especifique a continuación)" : "Other (specify below)"}</option>
          
          </select>
        </div> */}

        <div className='form--input'>

          <div className={(showMenu===true ? 'hidden' : 'show')+ ' disable-option'} >
            <div className='title-select' onClick={()=>setShowMenu(!showMenu)}>

              {formData.speciality === ''
              ?
              <p id='predeterminado'>{lang === 'castellano' ? "Selecciona tu especialidad médica" : "Select your medical specialty"}</p>
              :
              <p id='selected'>{formData.speciality}</p>
              }


              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.00008 4.66663L8.00008 8.66663L12.0001 4.66663L13.3334 5.99996L8.00008 11.3333L2.66675 5.99996L4.00008 4.66663Z" fill="white"/>
              </svg>
            </div>
            <div 
          className={(showMenu===true ? 'show' : '')+ ' optionsform'}
          >
            
              <div className='option--form' onClick={()=>handleSelect("Dental Clinics")} >{lang === 'castellano' ? "Clínicas dentales" : "Dental Clinics"}</div>
              <div className='option--form' onClick={()=>handleSelect("Plastic Surgery Centers")} >{lang === 'castellano' ? "Centros de Cirugía Plástica" : "Plastic Surgery Centers"}</div>
              <div className='option--form' onClick={()=>handleSelect("Orthopedic Clinics")} >{lang === 'castellano' ? "Clínicas Ortopédicas" : "Orthopedic Clinics"}</div>
              <div className='option--form' onClick={()=>handleSelect("Dermatology Practices")} >{lang === 'castellano' ? "Prácticas de Dermatología" : "Dermatology Practices"}</div>
              <div className='option--form' onClick={()=>handleSelect("Fertility Clinics")} >{lang === 'castellano' ? "Clínicas de fertilidad" : "Fertility Clinics"}</div>
              <div className='option--form' onClick={()=>handleSelect("Mental Health Clinics")} >{lang === 'castellano' ? "Clínicas de salud mental" : "Mental Health Clinics"}</div>
              <div className='option--form' onClick={()=>handleSelect("Chiropractic Clinics")} >{lang === 'castellano' ? "Clínicas Quiroprácticas" : "Chiropractic Clinics"}</div>
              <div className='option--form' onClick={()=>handleSelect("Other (specify below)")} >{lang === 'castellano' ? "Otro (especifique a continuación)" : "Other (specify below)"}</div>
            
          </div>
          </div>

          


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