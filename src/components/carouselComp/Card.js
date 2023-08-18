import React, { useEffect, useState } from 'react';

const cardsData = [
  {
    id: 1,
    title: 'Card 1',
    description: 'This is the first card',
    bgColor: 'bg-red-300',
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'This is the second card',
    bgColor: 'bg-green-300',
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'This is the third card',
    bgColor: 'bg-blue-300',
  },
];

const Card = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-[10rem] bg-red-600">
      <div className="w-96">
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            className={`card ${
              index === currentCardIndex ? 'visible' : 'hidden'
            }`}
          >
            <div className={`p-4 rounded-lg ${card.bgColor}`}>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
