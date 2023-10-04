import { Input } from "@mui/material";
import React from "react";

const Contatti = () => {
  return (
    <div>
      <form style={{display:"flex", justifyContent:"center",justifyContent:"center"}}>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Oggetto:
          <input type="email" name="email" />
        </label>
        <textarea>Ciao</textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Contatti;
