let base='https://ubi.faastechnology.tech/';
function retiro(monto){
    let nm = monto*-1;
    alert("Retirar=> "+nm);
    fetch(base+'api/transaccion/',{
        method:'POST',
        body:JSON.stringify({
            cuenta_id:sessionStorage.getItem('tk'), 
            monto:nm})
    })
    .then(data => data.json())
    .then(resultado => {
        console.log(resultado);
        location.href='../otroServicio.html'
    }) 
    .catch(err => {console.log(err); alert("Error en la conexion")})
}
