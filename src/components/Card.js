import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import Modal from 'react-modal';
import 'react-resizable/css/styles.css';
import './Card.css';

const Card = ({ id, text, position, onConnect, onUpdatePosition }) => {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleStop = (e, data) => {
    // Update card position when dragging stops
    onUpdatePosition(id, { x: data.x, y: data.y });
  };

  return (
    <Draggable
      defaultPosition={position}
      onStop={handleStop}
    >
      <div className="card1">
        <ResizableBox
          width={200}
          height={150}
          minConstraints={[100, 100]}
          maxConstraints={[300, 300]}
          className="resizable-box"
        >
          <div className="card-content">
            <p>{showMore ? text : `${text.substring(0, 50)}...`}</p>
            <button onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show Less' : 'Show More'}
            </button>
            <button onClick={toggleModal}>Details</button>
            <Modal isOpen={isModalOpen} onRequestClose={toggleModal}>
              <h2>Details</h2>
              <p>{text}</p>
              <button onClick={toggleModal}>Close</button>
            </Modal>
          </div>
        </ResizableBox>
        <button onClick={() => onConnect(id)}>Connect</button>
      </div>
    </Draggable>
  );
};

export default Card;
