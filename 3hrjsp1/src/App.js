import './App.css';
import React,{ useState } from 'react';
import UI from './UI/UI';
import Newprd from './NewProduct/NewProduct';
function App() {
  const [Electronics,setElectronics] = useState([])
  const [Food,setFood] = useState([])
  const [SkinCare,setSkinCare] = useState([])
  
  const addElectronics = (data) => {
    setElectronics((prev) => {
      console.log([data, ...prev])
      return [data, ...prev]
    })
  }
  const addFood = (data) => {
    setFood((prev) => {
      return [data, ...prev]
    })
  }
  const addSkinCare = (data) => {
    setSkinCare((prev) => {
      return [data, ...prev]
    })
  }

  const DeleteElectronic = (id) =>{
    const newListElectronics = Electronics.filter((items) => items.id !==id);
    setElectronics(newListElectronics);
    localStorage.removeItem(id);
  }
  const DeleteFood = (id) =>{
    const newListFood = Food.filter((items) => items.id !==id);
    setFood(newListFood);
    localStorage.removeItem(id);
  }
  const DeleteSkinCare = (id) =>{
    const newListSkinCare = SkinCare.filter((items) => items.id !==id);
    setSkinCare(newListSkinCare);
    localStorage.removeItem(id);
  }

  return (
    <div className="App">
      <Newprd addElectronics ={addElectronics}addFood ={addFood} addSkinCare ={addSkinCare} />
      <UI 
      Electronics={Electronics}
      Food={Food}
      SkinCare={SkinCare}
      DeleteElectronic = {DeleteElectronic} DeleteFood= {DeleteFood} 
      DeleteSkinCare={DeleteSkinCare} 
      />
    </div>
  );
}

export default App;
