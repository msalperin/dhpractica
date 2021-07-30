let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(numero){
    return numero > 6;
});

let desaprobados = estudiantes.filter(function(promedio){
    return promedio < 6;
});


console.log(aprobados);

let notas =[1,2,3]
let mayor = notas.filter(function(numero){
   return numero > 2;
});

console.log(mayor);

let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function(horario){
    return horario + 1;
});

console.log(horariosAtrasados)