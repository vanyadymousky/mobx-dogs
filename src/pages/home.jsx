import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Hey hey home!</h1>
    <Link to="breeds" href="breeds">Go to breeds</Link>
  </div>
);

export default Home;
