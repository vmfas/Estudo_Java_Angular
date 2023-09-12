function calculadora() {
    const operacao = Number(prompt("Escolha uma opção:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)"));

    if (!operacao || operacao >= 7) {
        alert('Erro - Operação Inválida!')
        calculadora()
    } else {

        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo1 valor:'));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - Parâmetros Inválidos!')
            calculadora()
        } else {
            function soma() {
                resultado = n1 + n2
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao()
            }

            function subtracao() {
                resultado = n1 - n2
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao()
            }

            function multiplicacao() {
                resultado = n1 * n2
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao()
            }

            function divisaoReal() {
                resultado = n1 / n2
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao()
            }

            function divisaoInteira() {
                resultado = n1 % n2
                alert(`O resto da divisão de ${n1} por ${n2} é igual a: ${resultado}`);
                novaOperacao()
            }

            function potenciacao() {
                resultado = n1 ** n2
                alert(`${n1} elevado a ${n2} é igual a: ${resultado}`);
                novaOperacao()
            }

            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não')

                if (opcao == 1) {
                    calculadora()
                } else if (opcao == 2) {
                    alert('Obrigado por utilizar minha calculadora.')
                } else {
                    alert('Opção invalida tente novamente')
                    opcao()
                }
            }
        }

        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potenciacao();
        }
    }
}



calculadora();