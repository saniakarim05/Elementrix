import React, { useState } from "react";
import axios from "axios";

function Upload() {
  const [data, setData] = useState({
    type: "",
    quantity: "",
    location: ""
  });

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/api/food", data);
    alert("Food uploaded successfully");
  };

  return (
    <div>
      <h2>Upload Leftover Food</h2>

      <input placeholder="Type" 
        onChange={(e)=>setData({...data,type:e.target.value})} />

      <input placeholder="Quantity" 
        onChange={(e)=>setData({...data,quantity:e.target.value})} />

      <input placeholder="Location" 
        onChange={(e)=>setData({...data,location:e.target.value})} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Upload;
