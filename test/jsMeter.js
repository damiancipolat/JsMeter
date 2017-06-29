class jsMeter{  
  
  //Grabo en el array todas las funciones pasdas como argumento.
  constructor(){    
    this.codeFn = arguments;
  }

  //Devuelvo el tiempo en milisegundos.
  getTime(){
    return Date.now();
  }

  //Obtengo el tiempo de ejecución de un codigo.
  getScriptTime(code){
    //Tiempo inicial.
    let start = Date.now();

    //Ejecuto
    code();

    //Traigo el tiempo final.
    let end = Date.now();

    //Devuelvo el tiempo de ejecucion.
    return {ms:end-start,seg:(end-start)/1000};
  }

  //Ejecuto las mediciones de tiempo.
  run()
  {
    let final = [];

    for (var i = 0; i <= this.codeFn.length-1;i++)
      final.push({time:this.getScriptTime(this.codeFn[i][1]),name:this.codeFn[i][0]});

    //Dibujo en la consola una tabla con los resultados.
    this.drawTable(final);

    return final;
  }

  //Dibujo el resultado de la ejecución en la consola.
  drawTable(final){
    
   let table = [];
    
   final.forEach((resu)=>{
     table.push({nam:resu.name,ms:resu.time.ms,seg:resu.time.seg});
   });
 
   console.log('Resultados de la ejecucion');
   console.table(table);
  }
}

