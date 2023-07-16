import React from 'react';

const Main = (props) => {

    const fullName = "Hello World";
  return (
    <div className="text-danger">
      Hello {fullName}
      <div>
        <button className="btn btn-primary">Cliquez ici</button>
      </div>
    </div>
  );
};

export default Main;

