import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function AddPhoto(props) {
  
  let navigate = useNavigate()
  const [inputs, setInputs] = useState({
    id: 0
  });
  const [emp, setEmp] = useState(true)
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if(value !== ""){
      
    
      setEmp(false);
      setInputs(values => ({...values, [name]: value}))

  }}

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!emp){
    props.sumbit(inputs);
    navigate('/');
    }
  }
  return (
    <>
      <Link to="/" className=" backIcon"></Link>

      <h3>Add a new photo</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="Title" type="text" name="description" />

        <input onChange={handleChange} placeholder="URL" type="text" name="imageLink" />

        <button>Sumbit</button>
      </form>
    </>
  );
}
export default AddPhoto;
