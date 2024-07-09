import MainCatCard from '../components/MainCatCard';

import image1 from '../assets/jewellery-set.jpg'

const cardData = [
  { title: 'Card 1', 
    imageSrc :image1,
  },

  { title: 'Card 2', 
    imageSrc :image1,
   },

  { title: 'Card 3',  
    imageSrc :image1,
  },

  { title: 'Card 4',  
    imageSrc :image1,
  },
];

function CategoryOne() {
  return (
    <div className="flex flex-wrap justify-center">
      {cardData.map((card, index) => (
        <div key={index} className="w-1/2 p-2">
          <MainCatCard
            title={card.title}
            imageSrc ={card.imageSrc}
          />
        </div>
      ))}
    </div>
  );
}

export default CategoryOne;
