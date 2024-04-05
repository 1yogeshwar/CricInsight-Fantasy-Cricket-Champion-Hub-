import React from 'react';
// Import Bootstrap components

function Player() {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
      <div className="card-body">
        <DropdownButton id="dropdown-basic-button" title="Ground">
          <Dropdown.Item href="#/action-1">Mohali</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Kolkata</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Mumbai</Dropdown.Item>
        </DropdownButton>
        <a href="#" className="card-link">
          Team
        </a>
      </div>
    </div>
  );
}

export default Player;
