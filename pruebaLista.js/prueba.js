const c_lista = require('../lista');
const c_nodo = require('../nodo');

let o_listaPrueba= new c_lista();
let o_nodoPrueba = new c_nodo('1',130,186);
o_listaPrueba.m_insertar(o_nodoPrueba);
o_nodoPrueba = new c_nodo('1',650,699);
o_listaPrueba.m_insertar(o_nodoPrueba);
o_nodoPrueba = new c_nodo('1',99,132);
o_listaPrueba.m_insertar(o_nodoPrueba);
o_nodoPrueba = new c_nodo('1',150,272);
o_listaPrueba.m_insertar(o_nodoPrueba);
o_nodoPrueba = new c_nodo('1',128,291);
o_listaPrueba.m_insertar(o_nodoPrueba);
o_nodoPrueba = new c_nodo('1',302,331);
o_listaPrueba.m_insertar(o_nodoPrueba);
o_nodoPrueba = new c_nodo('1',95,199);
o_listaPrueba.m_insertar(o_nodoPrueba);
o_nodoPrueba = new c_nodo('1',945,1890);
o_listaPrueba.m_insertar(o_nodoPrueba);
o_nodoPrueba = new c_nodo('1',368,788);
o_listaPrueba.m_insertar(o_nodoPrueba);
o_nodoPrueba = new c_nodo('1',961,1601);
o_listaPrueba.m_insertar(o_nodoPrueba);

let o_jsonRes={}
o_jsonRes= o_listaPrueba.mr_recorrer();
console.log(o_jsonRes);
