# JsMeter
Clase en ES6 para hacer comparaciónes de tiempo de ejecución de codígos js.

### Como usar:

Para descargar todos los modulos adicionales:
```js
	<script language="javascript" src="./jsMeter.js"></script>
	<script language="javascript">

		//Generador de items.
		let lista = [];

		for (let i=0;i<=10000;i++)
		   lista.push(i);

	
		let a = ()=>{
			lista.forEach((item)=>{
				console.log(item);
			});
		};

		let b = ()=>{
			for (let i=0;i<=lista.length-1;i++)
				console.log(lista[i]);
		};

		let js = new jsMeter(['ES6',a],['Comun',b]);
		js.run();		
	</script>
```
En la carpeta ./test hay ejemplos de como usarla.
