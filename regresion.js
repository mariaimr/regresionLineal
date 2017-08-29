const c_nodo = require('./nodo');
const c_lista = require('./lista');


module.exports= class c_regresion{
  constructor(){

  }

  mr_convertirLista(p_numerosX, p_numerosY){
    let o_listaPrueba= new c_lista();
    let n_nX= p_numerosX.length;
    let n_nY= p_numerosY.length;
    if (n_nX === n_nY) {
      for (let n_i=0; n_i< n_nX; n_i++) {
        let o_aux =new c_nodo('',p_numerosX[n_i], p_numerosY[n_i]);
        o_listaPrueba.m_insertar(o_aux);
       }
      return o_listaPrueba;
    }else {
      return null;
    }
  }
}
