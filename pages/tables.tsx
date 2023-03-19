import React from 'react';

function WeddingSeatingArrangement({ tableName, tableSeats }: { tableName: string, tableSeats: string[] }) {
  return (
    <div>
      <h1><b>{tableName}</b></h1>
      <ul className='py-4 text-xs'>
        {tableSeats && tableSeats.map((person, index) => (
          <li className="text-xs" key={index}>{person}</li>
        ))}
      </ul>
    </div>
  );
}

export default WeddingSeatingArrangement;