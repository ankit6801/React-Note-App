import React from "react";

const reportWebVitals = ({ handleSearchNote }) => {
  return (
    <div>
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};

export default reportWebVitals;
