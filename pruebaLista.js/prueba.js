const c_lista = require('../lista');
const c_nodo = require('../nodo');
const c_regresion = require('../regresion');


let n_numerosX= [130,650,99,150,128,302,95,945,368,961];
let n_numerosY= [186,699,132,272,291,331,199,1890,788,1601];

let o_regresion= new c_regresion();
let o_listaRegresion=  o_regresion.mr_convertirLista(n_numerosX, n_numerosY);
let o_jsonRes1={}
o_jsonRes1= o_listaRegresion.mr_recorrer();
console.log(o_jsonRes1);
