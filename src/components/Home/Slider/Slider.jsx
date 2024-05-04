import SliderCards from './SliderCards';

const cardsData = [
  {
    image: './img/medico.png',
    title: 'John Doe',
    subtitle: 'CEO of Metric',
    description: 'Gracias a GLOWUP, mi práctica médica ha experimentado un crecimiento significativo. Su enfoque personalizado y su atención al detalle realmente marcan la diferencia.',
  },
  {
    image: './img/01.jpg',
    title: 'John Doe',
    subtitle: 'CEO of Metric',
    description: 'Gracias a GLOWUP, mi práctica médica ha experimentado un crecimiento significativo. Su enfoque personalizado y su atención al detalle realmente marcan la diferencia.',
  },
  {
    image: './img/02.jpg',
    title: 'John Doe',
    subtitle: 'CEO of Metric',
    description: 'Gracias a GLOWUP, mi práctica médica ha experimentado un crecimiento significativo. Su enfoque personalizado y su atención al detalle realmente marcan la diferencia.',
  },
  {
    image: './img/03.jpg',
    title: 'John Doe',
    subtitle: 'CEO of Metric',
    description: 'Gracias a GLOWUP, mi práctica médica ha experimentado un crecimiento significativo. Su enfoque personalizado y su atención al detalle realmente marcan la diferencia.',
  },
  {
    image: './img/04.jpg',
    title: 'John Doe',
    subtitle: 'CEO of Metric',
    description: 'Gracias a GLOWUP, mi práctica médica ha experimentado un crecimiento significativo. Su enfoque personalizado y su atención al detalle realmente marcan la diferencia.',
  },
  {
    image: './img/05.jpg',
    title: 'John Doe',
    subtitle: 'CEO of Metric',
    description: 'Gracias a GLOWUP, mi práctica médica ha experimentado un crecimiento significativo. Su enfoque personalizado y su atención al detalle realmente marcan la diferencia.',
  }
];

function Slider() {
  return (
    <div className='container__slider'>
      <h2>What our clients says</h2>
      <SliderCards cardsData={cardsData} />
    </div>
  );
}

export default Slider;
