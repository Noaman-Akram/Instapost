import React from "react";

function AddPhoto(props) {
  return (
    <>
    <button onClick={props.navigate}> &#8592; Back</button>
      <h1>Add a new Photo</h1>
      <form className="form">
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <input type="submit" value="Submit" />
         <label>
          URL:
          <input type="text" name="url" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
export default AddPhoto;
