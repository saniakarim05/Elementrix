import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Sevafy</h1>
      <p>Serving Food, Serving Humanity</p>
      <Link to="/upload">Upload Food</Link><br/>
      <Link to="/dashboard">View Food Data</Link>
    </div>
  );
}

export default Home;
