// src/components/Card.jsx
// rafce / rfce

import { useState } from 'react';

import { MdWarning } from "react-icons/md";

import CardFilter from '../CardFilter';

import '../styles/components/card.css'

function CardItem({ card }) {

    const [filter, setFilter] = useState('All');
    const handleFilterChange = filter => {
        setFilter(filter);
    }

    return (
        <div className="col-xxl-4 col-md-6">
        <div className="card info-card sales-card">
            <CardFilter filterChange={handleFilterChange} />
            <div className="card-body">
                <h5 className="card-title">
                    {card.title}
                    <span>{" | "}{filter}</span>
                </h5>

                <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <span className={card.icon}></span>
                        <span className="icon">{card.icon ? card.icon : <MdWarning />}</span>
                    </div>
                    <div className="ps-3">
                        <h6>
                            {card.title === "Revenue"
                                ? '$' + card.value.toLocaleString('en-US')
                                : card.value.toLocaleString('en-US')
                            }
                        </h6>
                        <span
                            className={`${
                                card.percentage > 0 ? 'text-success' : 'text-danger'
                            } small pt-1 fw-bold`}>
                            {card.percentage > 0 
                                // ? card.percentage * 100
                                // : -card.percentage * 100}%
                                ? '+' : '-'}{card.percentage}%
                        </span>
                        <span className='text-muted small pt-2 ps-1'>
                            {card.percentage > 0 ? 'Increase' : 'Decrease'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default CardItem;
