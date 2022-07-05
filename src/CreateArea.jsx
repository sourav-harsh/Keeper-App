import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {

  const [effect, setEffect] = useState(false);
  function handleffect() {
    setEffect((prev) => {
      return !prev;
    });
  }
  
  return (
    <form className="create-note">
      <input
        style={{ display: !effect?"none":null }}
        onChange={props.change}
        name="title"
        value={props.value.title}
        placeholder="Title"
        type="text"
        required
      />
        <textarea
          onChange={props.change}
          onClick={handleffect}
          name="content"
          value={props.value.content}
          placeholder="Take a note...."
          rows={effect?"3":"1"}
        />
      <Zoom in={effect?true:false}>
        <Fab onClick={props.add}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}
export default CreateArea;
