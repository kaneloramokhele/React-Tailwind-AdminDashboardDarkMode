// src/components/Card.jsx
// rafce / rfce

import { useState } from 'react';
import { MdWarning } from "react-icons/md";
import CardFilter from '../Filter';
import PropTypes from 'prop-types';

function CardItem({ card }) {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="lg:w-1/3 md:w-1/2 p-4">
      <div className="bg-white shadow-md rounded-lg p-4">
        <CardFilter filterChange={handleFilterChange} />
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold text-gray-800">
            {card.title}
            <span className="text-sm text-gray-500"> | {filter}</span>
          </h5>

          <div className="flex items-center space-x-4 mt-4">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full">
              <span className={card.icon ? card.icon : ''}>
                {card.icon ? null : <MdWarning className="text-xl text-gray-500" />}
              </span>
            </div>
            <div className="flex-1">
              <h6 className="text-2xl font-semibold text-gray-900">
                {card.title === "Revenue"
                  ? '$' + card.value.toLocaleString('en-US')
                  : card.value.toLocaleString('en-US')}
              </h6>
              <span
                className={`${
                  card.percentage > 0 ? 'text-green-500' : 'text-red-500'
                } text-sm font-bold`}>
                {card.percentage > 0 ? '+' : '-'}{Math.abs(card.percentage)}%
              </span>
              <span className="text-sm text-gray-500 ml-2">
                {card.percentage > 0 ? 'Increase' : 'Decrease'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Prop validation
CardItem.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
    icon: PropTypes.string,
  }).isRequired,
};

export default CardItem;
