/* El siguiente simulador solicita al usuario la carga del salario mensual y el plazo en el que se 
quiere solicitar el credito.
En base a esos datos, tasas nominales anuales estandares y utilizando el sistema de amortizacion frances, 
calcula periodo a periodo el valor de la cuota (en sistema frances es fijo), y la composicion (interes y capital).
Como asi tambien el saldo de capital periodo a periodo.
*/
console.log('Desafio entregable 1 esta en funcionamiento');
alert('Calculadora de Credito')
let ingreso=0
let plazo=0
while (ingreso<=0 || isNaN(ingreso)){
    ingreso=parseInt(prompt('Cuál es su ingreso mensual en pesos'))
    if(ingreso<0 || isNaN(ingreso)){
        alert('Valor invalido')
    }
}
while (plazo>3 || plazo<1 || isNaN(plazo)){
    plazo=(prompt('Ingrese plazo de devolución del credito \n 1-12 meses \n 2-24 meses \n 3-36 meses'))
    if(plazo>3 || plazo<1 || isNaN(plazo)){
        alert('Plazo invalido')
    }
}
let TNA=0
function calculoCredito(TNA,monto,plazo){
    let j=TNA/12;
    let C=(monto*j*(1+j)**plazo)/((1+j)**plazo-1);
    let Tp=0;
    let tpi=0;
    let Si=0;
    let ip=0;
    let Si0=monto;
    for(i=1;i<=plazo;i++){
        tpi=C-Si0*j-Si*j;    
        Tp=Tp+tpi;    
        Si=monto-Tp;
        ip=C-tpi;
        Si0=0
        alert(`Usted puede acceder a un credito de $${monto.toFixed(2)} con una TNA=${TNA*100}% a devolver en ${plazo} meses. \n La cuota ${i} tiene un valor de $${C.toFixed(2)}, compuesto por $${ip.toFixed(2)} de intereses y $${tpi.toFixed(2)} de capital. \n El saldo de capital para este periodo es de $${Si.toFixed(2)}`)
    }
}
switch (plazo){
    case "1":
        if (ingreso<100000){
            TNA=1.8;
            const monto=(ingreso*.2*plazo*12);
            calculoCredito(TNA,monto,12);
            break;
        } else if (ingreso<250000){
            TNA=1.1;
            const monto=(ingreso*.2*plazo*12);
            calculoCredito(TNA,monto,12);
            break;
        } else {
            TNA=0.6;
            const monto=(ingreso*.2*plazo*12);
            calculoCredito(TNA,monto,12);
            break;
        }
        case "2":
        if (ingreso<100000){
            TNA=2;
            const monto=(ingreso*.2*plazo*24);
            calculoCredito(TNA,monto,24);
            break;
        } else if (ingreso<250000){
            TNA=1.5;
            const monto=(ingreso*.2*plazo*24);
            calculoCredito(TNA,monto,24);
            break;
        } else {
            TNA=0.75;
            const monto=(ingreso*.2*plazo*24);
            calculoCredito(TNA,monto,24);
            break;
        }
        case "3":
        if (ingreso<100000){
            TNA=2.2;
            const monto=(ingreso*.2*plazo*36);
            calculoCredito(TNA,monto,36);
            break;
        } else if (ingreso<250000){
            TNA=1.8;
            const monto=(ingreso*.2*plazo*36);
            calculoCredito(TNA,monto,36);
            break;
        } else {
            TNA=0.95;
            const monto=(ingreso*.2*plazo*36);
            calculoCredito(TNA,monto,36);
            break;
        }
}
