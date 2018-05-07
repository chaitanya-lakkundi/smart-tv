import React from 'react';
import './_styles.scss';

const Header = props => (
  <div className="card-panel teal lighten-2" style={{ margin: 0 }}>
    <div className="header">
      <h2 className="header__text">{props.name}</h2>
    </div>
  </div>
);
export default Header;
