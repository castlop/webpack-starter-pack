import '../css/componentes.css';

export {saludar};

const saludar = ( nombre ) => {
  
  console.log('Creando elemento h1')

  const h1 = document.createElement('h1');
  h1.innerText = `Hola ${nombre} con el Webpack DevServer!`

  document.body.append(h1)

}