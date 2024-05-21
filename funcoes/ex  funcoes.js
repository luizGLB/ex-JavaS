// Construir um menu que é possível escolher um exercicio entre os exercicios anteriores, para ser executado. Faça com que o menu repita a sua execução, disponibilize as opções para o usuário, até que seja digitado "sair"

function exercicioLogin() {
    let username = prompt("Digite o seu usuário: ");

    let senha = prompt("Digite sua senha: ");

    if (username == "admin" && senha == "senha123") {
        console.log("Login bem sucedido!");
    }
    else {
        console.log("Você não tem permissão de acesso!");
    }
}

function numParImpar() {
    let num = parseInt(prompt("Informe um número inteiro: "));

    if (num % 2 == 0) {
        console.log("O número informado é par");
    }
    else {
        console.log("O número informado é ímpar");
    }
}

function exercicioTabuada() {
    let numero = parseInt(prompt("Digite um número para ver na tabuada: "));


    if (!isNaN(numero)) {
        for (let cont = 1; cont <= 10; cont++) {
            console.log(numero + " X " + cont + " = " + (numero * cont));
        }

    } else {
        console.log("Número invalido. Por favor, digite um número válido.")
    }

    console.log(isNaN("Hello World")); // retorna true 
    console.log(isNaN(123)); // retorna false 
}


// let opcao;

// do {
//     opcao = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Exercicio Login\n2 - Exercicio Par ou Impar\n3 - Exercicio Tabuada")

//     console.clear()

//     switch (opcao) {
//         case "1":
//             exercicioLogin()
//             break;

//         case "2":
//             numParImpar()
//             break;

//         case "3":
//             exercicioTabuada()
//             break;

//         default:
//             break;
//     }

// } while (opcao != "sair");

let resposta = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Exercicio Login\n2 - Exercicio Par ou Impar\n3 - Exercicio Tabuada")

while (resposta != "sair") {

    switch (resposta) {
        case "1":
            exercicioLogin()
            break;

        case "2":
            numParImpar()
            break;

        case "3":
            exercicioTabuada()
            break;

        default:
            break;
    }

    resposta = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Exercicio Login\n2 - Exercicio Par ou Impar\n3 - Exercicio Tabuada")
    console.clear()
}