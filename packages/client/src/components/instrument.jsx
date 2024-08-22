/* eslint-disable max-len */
import React from 'react';

function Instrument() {
  return (
    <label>
      Instrument Name:
      <input type="text" name="behavioralInstrument" id="Instrument" value="Cat Behavioral Instrument" readOnly={true} />
    </label>
  );
}

export default Instrument;
