let base='https://ubi.faastechnology.tech/';
function obtenerCuenta(){
    let codigo = document.getElementById("num1").value;
    codigo += document.getElementById("num2").value;
    codigo += document.getElementById("num3").value;
    codigo += document.getElementById("num4").value;
    if(codigo>999){
        fetch(base+'api/cuenta/?codigo='+codigo)
        .then(data => data.json())
        .then(resultado => {
            console.log(resultado);
            sessionStorage.setItem("tk", resultado.id);
            location.href='servicio.html'
        }) 
        .catch(err => {alert("Error en la conexion")})
    } else alert("Codigo incorrecto...")
}
function deposito(){
    let codigo = document.getElementById("num1").value;
    if(codigo>0){
        fetch(base+'api/transaccion/',{
            method:'POST',
            body:JSON.stringify({cuenta_id:sessionStorage.getItem('tk'), monto:codigo})
        })
        .then(data => data.json())
        .then(resultado => {
            console.log(resultado);
            location.href='../extracto/extracto.html'
        }) 
        .catch(err => {console.log(err); alert("Error en la conexion")})
    } else alert("deposito incorrecto...")
}
function extracto(){
        fetch(base+'api/transaccion/?cuenta_id='+sessionStorage.getItem('tk'))
        .then(data => data.json())
        .then(resultado => {
            console.log(resultado)
            if(resultado.saldo == null) document.getElementById("extracto").innerHTML='Bs. 0.00.-'
            else document.getElementById("extracto").innerHTML='Bs. '+resultado.saldo+'.00.-'
        }) 
        .catch(err => {alert("Error en la conexion")})
}
