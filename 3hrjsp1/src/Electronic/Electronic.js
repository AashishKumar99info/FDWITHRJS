import React from "react";

const Electronics = (props) => {
    // const DeleteHandler = (id) => {
    //     props.DeleteElec(id);
    // }
  return (
    <div>
      <h1>Electronics</h1>
      {props.Electronics.map((items) => {
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
            onClick={() => props.DeleteElectronics(items.id)}>Remove Product</button>
          </div>
        );
      })}
    </div>
  );
};

export default Electronics;
