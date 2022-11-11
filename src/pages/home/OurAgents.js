import React from "react";

const dummy = [
  {
    location: "Santo Domingo Este",
    phone: "809-931-9394"
  },
  {
    location: "Santo Domingo",
    phone: "829-878-6894"
  },
  {
    location: "Santo Domingo",
    phone: "809-802-5648"
  }
];

function OurAgents() {
  return (
    <div className='ouragents'>
      <div className='titles'>
        <div className='title1'>nuestros</div>
        <div className='title2'>representantes</div>
      </div>
      <div className='content'>
        {dummy.map(el => (
          <Agent key={el.phone} location={el.location} phone={el.phone} />
        ))}
      </div>
    </div>
  );
}

function Agent({ phone, location }) {
  return (
    <div className='agent'>
      <div className='location'>{location}</div>
      <div className='phone'>{phone}</div>
    </div>
  );
}

export default OurAgents;
