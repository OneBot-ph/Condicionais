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

/* Diferenca */

let num1, num2, diferenca, resultado2;

function Diferenca()
{

    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    resultado2 = document.getElementById("resultado2");

    if(num1 < num2)
    {
       diferenca = num2 - num1;

    }else if(num2 < num1)
    {
        diferenca = num1 - num2;
    }

    resultado2.innerHTML = diferenca;
}

/* Media */

let notaA, notaB, notaC, notaD, media, resultado3, showMedia;

function MediaNotas()
{

    notaA = Number(document.getElementById("notaA").value);
    notaB = Number(document.getElementById("notaB").value);
    notaC = Number(document.getElementById("notaC").value);
    notaD = Number(document.getElementById("notaD").value);
    resultado3 = document.getElementById("resultado3");
    showMedia = document.getElementById("showMedia");

    media = (notaA + notaB + notaC + notaD) / 4;

    if(media >= 5)
    {
        resultado3.innerHTML = "Aprovado";
    }else{
        resultado3.innerHTML = "Reprovado";
    }

    showMedia.innerHTML = "Media: " + media;
}
