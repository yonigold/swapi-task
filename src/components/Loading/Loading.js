import React from 'react';

function Loading({ message = "Loading..." }) {
  return (
    <div className="lightsaber-container">
      <div className="lightsaber"></div>
      <p style={{ marginTop: '20px', color: '#fff' }}></p>
    </div>
  );
}

export default Loading;
