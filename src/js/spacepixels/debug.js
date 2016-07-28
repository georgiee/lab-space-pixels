import GUI from "dat.GUI";
import Stats from "stats-js";

const stats = new Stats();
const gui = new dat.GUI();
const params = {}

const obj = {
  enable: enable,
  stats, gui, params
}

function enable(){
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
   
  document.body.appendChild( stats.domElement );  

  return obj;
}

export default obj;