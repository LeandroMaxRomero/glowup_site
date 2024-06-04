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
    speciality_es:'',
    speciality_en:'',
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
      speciality_es: speciality.select_es,
      speciality_en: speciality.select_en,
      
    });
    setShowMenu(false);
  };

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
      ...formData,
      speciality: lang==='castellano' ? formData.speciality_es : formData.speciality_en
    };
    console.log(combinedData);
    // Guardar los datos combinados en el localStorage
    localStorage.setItem('combinedData', JSON.stringify(combinedData));

    // const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    // const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    // const USER_ID = import.meta.env.VITE_USER_ID;

    //! serviceId= service_mn0q9hd
    //!TemplateId= template_jpc36zf
    //! userId= 9h_uqi3hIsTGYM2t7

    // const USER_ID = 'Iowmf_zIT-drLgNXc';
    // const SERVICE_ID = 'service_uyqk2tk';
    // const TEMPLATE_ID = 'template_8yxznu7';
    const USER_ID = '9h_uqi3hIsTGYM2t7';
    const SERVICE_ID = 'service_efef0bd';
    const TEMPLATE_ID = 'template_jpc36zf';

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
        speciality_es:'',
        speciality_en:'',
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

  const optionsForm = [
    {
      id: 0,
      select_es: "Clínicas dentales",
      select_en: "Dental Clinics",
    },
    {
      id: 1,
      select_es:"Centros de Cirugía Plástica",
      select_en: "Plastic Surgery Centers"
    },
    {
      id: 2,
      select_es:"Clínicas Ortopédicas",
      select_en: "Orthopedic Clinics"
    },
    {
      id: 3,
      select_es:"Prácticas de Dermatología",
      select_en: "Dermatology Practices"
    },
    {
      id: 4,
      select_es:"Clínicas de fertilidad",
      select_en: "Fertility Clinics"
    },
    {
      id: 5,
      select_es:"Clínicas de salud mental",
      select_en: "Mental Health Clinics"
    },
    {
      id: 6,
      select_es:"Clínicas Quiroprácticas",
      select_en: "Chiropractic Clinics"
    },
    {
      id: 7,
      select_es:"Otro (especifique a continuación)",
      select_en: "Other (specify below)"
    },

  ]

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

          <div className={(showMenu===true ? 'hidden' : 'show')+ ' disable-option'} >
            
            <div className='title-select' onClick={()=>setShowMenu(!showMenu)}>

              {formData.speciality_es === '' && formData.speciality_en===''
              ?
              <p id='predeterminado'>{lang === 'castellano' ? "Selecciona tu especialidad médica" : "Select your medical specialty"}</p>
              :
              <p id='selected'>{lang==='castellano'? formData.speciality_es : formData.speciality_en }</p>
              }


              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.00008 4.66663L8.00008 8.66663L12.0001 4.66663L13.3334 5.99996L8.00008 11.3333L2.66675 5.99996L4.00008 4.66663Z" fill="white"/>
              </svg>
            </div>

            <div className={(showMenu===true ? 'show' : '')+ ' optionsform'}>

              {optionsForm.map((select) => (
                
                <div 
                className='option--form'
                key={select.id}
                onClick={()=>handleSelect(select)}
                >
                  {lang === 'castellano' ? select.select_es : select.select_en }
                </div>
              )
              )}
    
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