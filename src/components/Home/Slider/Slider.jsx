import SliderCards from './SliderCards';

const cardsData = [
  {
    image: './img/01.png',
    title: 'Título 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
  },
  {
    image: './img/02.png',
    title: 'Título 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
  },
  {
    image: './img/03.png',
    title: 'Título 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
  },
  {
    image: './img/04.png',
    title: 'Título 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
  },
  {
    image: './img/05.png',
    title: 'Título 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
  },
];

function Slider() {
  return (
    <div className="App">
      <SliderCards cardsData={cardsData} />
    </div>
  );
}

export default Slider;
