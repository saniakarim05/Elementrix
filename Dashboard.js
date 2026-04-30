import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/food")
      .then(res => setFoods(res.data));
  }, []);

  return (
    <div>
      <h2>Food Analysis</h2>

      {foods.map((f, i) => (
        <div key={i}>
          <p>{f.type} | {f.quantity} | {f.location}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
