import React,{ useState } from "react";
import "./NewProduct.css"

const Newprd = (props) => {
    
    const [Pid,setPid]=useState("");
    const [Pname,setPname]=useState("");
    const [Pprice,setPprice]=useState("");
    const [Pcate,setPcate]=useState("");

    const PidHandler = (e) => {
        setPid(e.target.value);
    };
    const PNameHandler = (e) => {
        setPname(e.target.value);
    };
    const PpriceHandler = (e) => {
        setPprice(e.target.value);
    };
    const PcateHandler = (e) => {
        setPcate(e.target.value);
    };

    const SubmitHandler = (e) => {
        e.preventDefault();
        const proddata ={
            Pid: Pid,
            Pname: Pname,
            Pprice: Pprice,
            Pcate: Pcate
        }
        
        if(Pcate==="Electronics"){
            console.log(proddata)
            props.addElectronics(proddata)
        }
        if(Pcate==="Food"){
            console.log(proddata)
            props.addFood(proddata)
        }
        if(Pcate==="SkinCare"){
            props.addSkinCare(proddata)
        }

        localStorage.setItem(Pid,JSON.stringify(proddata))
        setPname("")
        setPprice("")
        setPcate("")
        setPid("")
    }

    return (
        <form onSubmit={SubmitHandler}>
             <div>
                <label htmlFor="" >Product Id : </label>
                <input type="number" placeholder="Enter Id for Product" value={Pid} onChange={PidHandler} />
            </div>
            <div>
                <label htmlFor="" >Product Name : </label>
                <input type="text" placeholder="Enter Product Name" value={Pname} onChange={PNameHandler} />
            </div>
            <div>
                <label htmlFor="" >Selling Price : </label>
                <input type="number" placeholder="Enter Product Price" value={Pprice} onChange={PpriceHandler} />
            </div>
            <div>
                <label htmlFor="" > Select Product Category : </label>
                <select value={Pcate} onChange={PcateHandler}>
                    <option>Select</option>
                    <option value = "Electronics">Electronics</option>
                    <option value = "Food">Food</option>
                    <option value = "SkinCare">SkinCare</option>
                </select>
            </div>
            <button type="submit" >Add Product</button>
        </form>
    );
}

export default Newprd;