function calcularSalario() {
    let nome = document.getElementById("nome").value;
    let salario = parseFloat(document.getElementById("salario").value);

    if (nome === "" || isNaN(salario)) {
        document.getElementById("resultado").innerHTML = "Preencha todos os campos corretamente!";
        return;
    }

    let novoSalario = salario + (salario * 0.25);

    document.getElementById("resultado").innerHTML =
        nome + ", seu novo salário é R$ " + novoSalario.toFixed(2);
}