import React from "react";
import Electronics from "../Electronic/Electronic";
import Food from "../Food/Food";
import SkinCare from "../SkinCare/SkinCare";

const UI = (props) => {
  return (
    <div>
      <Electronics
        Electronics={props.Electronics}
        DeleteElectronics={props.DeleteElectronic}
      />
      <Food
       Food={props.Food} 
       DeleteFood={props.DeleteFood} 
       />
      <SkinCare
        SkinCare={props.SkinCare}
        DeleteSkinCare={props.DeleteSkinCare}
      />
    </div>
  );
};

export default UI;
