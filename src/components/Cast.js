import React from 'react';

const Cast = (props) => {

    return (
      <div className="col-12 col-md-6 p-3 p-md-4 text-left text-white">
        <div className="bg-danger p-3 p-md-4 rounded">
          <h2>Elenco</h2>
          <ul class="list-group border-0 text-dark">
            <li class="list-group-item">Cameron Diaz</li>
            <li class="list-group-item">Will Smith</li>
          </ul>
        </div>
      </div>
    );
}

export default Cast;