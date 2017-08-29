const c_nodo = require('./nodo');
module.exports=class c_lista{
constructor(){
  let o_aux=new c_nodo('','','');
  this.o_primero= o_aux;
  this.o_ultimo= o_aux;
}

 m_insertar(p_newNodo){
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
     let n_coefCorrelacion=0;
     let n_coefCorrelacion2=0;
     let n_rNumerador=0;
     let n_rDenominador=0;
     let n_b0=0;
     let n_b1=0;
     let n_promX, n_promY, n_promXX;
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
     n_rNumerador= (n_i*(n_sumaXY))-((n_sumaX)*(n_sumaY));
     n_rDenominador= (((n_i*n_sumaXX)-((n_sumaX)**2))*((n_i*n_sumaYY)-((n_sumaY)**2)));
     n_rDenominador= n_rDenominador**0.5;
     n_coefCorrelacion= n_rNumerador/n_rDenominador;
     n_coefCorrelacion2= n_coefCorrelacion**2;

     n_promX=(n_sumaX/n_i);
     n_promY=(n_sumaY/n_i);
     n_promXX=(n_sumaXX/n_i);
     n_b1=((n_sumaXY-(n_i*n_promX*n_promY))/((n_sumaXX)-(n_i*(n_promX**2))));
     n_b0=(n_promY-(n_b1*n_promX));

     let o_res={
       n_n: n_i,
       n_totalX: n_sumaX,
       n_totalY: n_sumaY,
       n_totalXY: n_sumaXY,
       n_totalXX: n_sumaXX,
       n_totalYY: n_sumaYY,
       n_rCoef: n_coefCorrelacion,
       n_r2Coef: n_coefCorrelacion2,
       n_b0: n_b0,
       n_b1: n_b1
     }
     return o_res;
  }

};
