
var pHoras = document.getElementById("pHoras"),
    AcpMinutos = document.getElementById("pMinutos"),
    pSegundos = document.getElementById("pSegundos"),
    pDiaSemana = document.getElementById("pDiaSemana"),
    pDia = document.getElementById("pDia"),
    pMes = document.getElementById("pMes"),
    pYear = document.getElementById("pYear"),
    pSaludo = document.getElementById("Saludo");

function ActualizarHora(){
    //Variables
    var fecha = new Date(),
        segundos = fecha.getSeconds(),
        minutos = fecha.getMinutes(),
        horas = fecha.getHours(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();
    
    pDiaSemana.innerHTML = diaSe(diaSemana);
    pDia.innerHTML = dia;
    pMes.innerHTML = mesLe(mes);
    pYear.innerHTML = year;
    pHoras.innerHTML = horas;
    AcpMinutos.innerHTML = cero(minutos);
    pSegundos.innerHTML = cero(segundos);
    pSaludo.innerHTML = saludo(horas);

    function diaSe(dia){
        var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        return semana[dia];
    }
    function saludo(h){
        var txt;
        if(h<12){
            txt = "Buenos Días"
        }else if(h<19){
            txt = "Buenas Tardes"
        }else{
            txt = "Buenas Noches"
        }
        return txt;
    }
    function mesLe(mes){
        var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        return meses[mes]
    }

    function cero (seg){
        if(9 < seg){
            return seg;
        }else{
            return "0" + seg;
        }
    }
    setInterval(ActualizarHora, 1000);
}
document.addEventListener('DOMContentLoaded', ActualizarHora);







