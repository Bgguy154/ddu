import React, { useState } from 'react';
import Card from './Card';
import './Canvas.css';

const Canvas = () => {
  const [cards, setCards] = useState([
    { id: 1, text: 'Card 1 text I am a cool guy but then I have issues too', position: { x: 350, y: 50 } },
    { id: 2, text: 'Card 2 text My Love is a typical wifey material and I am gonna marry her', position: { x: -350, y: 50 } },
  ]);
  const [nextId, setNextId] = useState(3);

  const addCard = () => {
    const newCard = {
      id: nextId,
      text: `Card ${nextId} text - New card text`,
      position: { x: Math.random() * 500, y: Math.random() * 500 } // Random position for new cards
    };
    setCards([...cards, newCard]);
    setNextId(nextId + 1);
  };

  const handleConnect = (id) => {
    // Implement the connection logic here
    console.log(`Connect card with id ${id}`);
  };

  const updateCardPosition = (id, position) => {
    setCards(cards.map(card => card.id === id ? { ...card, position } : card));
  };

  return (
    <div className="canvas">
      <button onClick={addCard} className="add-card-button">Add Card</button>
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          text={card.text}
          position={card.position}
          onConnect={handleConnect}
          onUpdatePosition={updateCardPosition}
        />
      ))}
    </div>
  );
};

export default Canvas;
