let nota, resultado;

function Verificar()
{
    nota =  Number(document.getElementById("nota").value);
    resultado = document.getElementById("resultado");

    if(nota < 5)
    {
        resultado.innerHTML = "Reprovado";
    }else if(nota < 7)
    {
        resultado.innerHTML = "Recuperação";
    }
    else{
        resultado.innerHTML = "Aprovado";
    }

}