const c_nodo = require('./nodo');
module.exports=class c_lista{
constructor(){
  let o_aux=new c_nodo('','','');
  this.o_primero= o_aux;
  this.o_ultimo= o_aux;
}

 m_insertar(p_newNodo){

   //if(!isNaN(p_newNodo.n_datoX) && !isNaN(p_newNodo.n_n_datoXY)){
    if (this.o_primero.n_datoX===''&& this.o_primero.n_datoY==='' && this.o_primero.o_liga=='' ) {
        this.o_primero.n_datoX=  p_newNodo.n_datoX;
        this.o_primero.n_datoY=  p_newNodo.n_datoY;
        return true;
    }else {
        let o_aux = new c_nodo('',p_newNodo.n_datoX, p_newNodo.n_datoY);
        let o_aux2 = this.o_ultimo;
        o_aux2.o_liga= o_aux;
        this.o_ultimo= o_aux;
        return true;
      }
    //}
    return false;
  }

  mr_recorrer(){
     let o_aux = this.o_primero;
     let n_i=0;
     let n_sumaX=0;
     let n_sumaY=0;
     let n_sumaXY=0;
     let n_sumaXX=0;
     let n_sumaYY=0;
     while (o_aux.o_liga!='') {
       n_sumaX= n_sumaX + parseInt(o_aux.n_datoX);
       n_sumaY= n_sumaY + parseInt(o_aux.n_datoY);
       n_sumaXY= n_sumaXY + (parseInt(o_aux.n_datoX)*parseInt(o_aux.n_datoY));
       n_sumaXX= n_sumaXX + (parseInt(o_aux.n_datoX)*parseInt(o_aux.n_datoX));
       n_sumaYY= n_sumaYY + (parseInt(o_aux.n_datoY)*parseInt(o_aux.n_datoY));
       n_i++;;
       o_aux = o_aux.o_liga;
     }
     if(this.o_primero != this.o_ultimo){
       n_i = n_i + 1;
       n_sumaX= n_sumaX + parseInt(o_aux.n_datoX);
       n_sumaY= n_sumaY + parseInt(o_aux.n_datoY);
       n_sumaXY= n_sumaXY + (parseInt(o_aux.n_datoX)*parseInt(o_aux.n_datoY));
       n_sumaXX= n_sumaXX + (parseInt(o_aux.n_datoX)*parseInt(o_aux.n_datoX));
       n_sumaYY= n_sumaYY + (parseInt(o_aux.n_datoY)*parseInt(o_aux.n_datoY));
     }
     let o_res={
       n_n: n_i,
       n_totalX: n_sumaX,
       n_totalY: n_sumaY,
       n_totalXY: n_sumaXY,
       n_totalXX: n_sumaXX,
       n_totalYY: n_sumaYY,
     }
     return o_res;
  }

};
