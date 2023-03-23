import React from "react";

const SkinCare = (props) => {
  return (
    <div>
      <h1>SkinCare</h1>
      {props.SkinCare.map((items) => {
        return (
          <div 
          key={items.Pid}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
          >
            <h1>
              {" "}
              {items.Pname}--
              {items.Pprice}--
              {items.Pcate}
              {" "}
            </h1>
            <button style={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "10px"}}
             onClick={ () => props.DeleteSkinCare(items.id)}>Remove Product</button>
          </div>
        );
      })}
    </div>
  );
};

export default SkinCare;
