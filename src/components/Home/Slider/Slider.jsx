import SliderCards from './SliderCards';

const cardsData = [
  {
    image: './img/01.jpg',
    title: 'Isaac Newton',
    subtitle: 'CEO of Principia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
  },
  {
    image: './img/02.jpg',
    title: 'Karl Marx',
    subtitle: 'CEO of Das Kapital',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
  },
  {
    image: './img/03.jpg',
    title: 'Friedrich Nietzsche',
    subtitle: 'CEO of Zarathustra',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
  },
  {
    image: './img/04.jpg',
    title: 'Sigmund Feud',
    subtitle: 'CEO of Die Traumdeutung',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
  },
  {
    image: './img/05.jpg',
    title: 'Astor Piazzolla',
    subtitle: 'CEO of Nonino',
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
