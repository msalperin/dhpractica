let perro = {
    nombre: "Scott",
    color: "Negro",
    macho: true,
    edad: 5
  };
  
  let valores = Object.values(perro); // valores = ["Scott", "Negro", true, 5];
  for(let i=0; i< valores.length; i++){
    console.log(valores[i]);
  }

