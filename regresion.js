const c_nodo = require('./nodo');
const c_lista = require('./lista');


module.exports= class c_regresion{
  constructor(p_numerosX, p_numerosY){
    this.n_numerosX= p_numerosX;
    this.n_numerosY= p_numerosY;
  }

  mr_convertirLista(p_numerosX, p_numerosY){
    let o_listaPrueba= new c_list();
    let n_nX= p_numerosX.length;
    let n_nY= p_numerosY.length;
    if (n_nX === n_nY) {
      for (let n_i=0; n_i< n_nX; n_i++) {
        let o_aux =new node('',p_numerosX[n_i], p_numerosY[n_i]);
        o_listaPrueba.m_insertar(o_aux);
       }
      return o_listaPrueba;
    }else {
      return null;
    }
  }

  mr_promedio(p_listaNumeros){
    let o_jsonRes={}
    o_jsonRes= p_listaNumeros.mr_recorrer();
    let n_sumaX= o_jsonRes.n_totalX;
    let n_sumaY= o_jsonRes.n_totalY;
    let n_total= o_jsonres.n_n;
    let n_avgX= n_sumaX/n_total;
    let n_avgY= n_sumaY/n_total;

    let n_medias={
      n_mediaX: n_avgX,
      n_mediaY: n_avgY
    }
    return n_medias;
  }
