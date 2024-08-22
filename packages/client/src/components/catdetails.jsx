
import React from 'react';

function CatDetails() {
  return (
    <>
      <h2>Cat Details</h2>
      <label>
        Cat Name:
        <input type="text" name="catName" id="catName" placeholder="Cat Name" /></label><br />
      <label>
        Date of Birth:
        <input type="date" />
      </label>
    </>
  );
}

export default CatDetails;
