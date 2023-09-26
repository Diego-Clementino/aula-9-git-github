def calculadora(num1, num2, operacao):
    if operacao == 1:
        return num1 + num2
    elif operacao == 2:
        return num1 - num2
    elif operacao == 3:
        return num1 * num2
    elif operacao == 4:
        if num2 != 0:
            return num1 / num2
        else:
            return "Erro: Divisão por zero"

print("Calculadora")

num1 = float(input('Digite o primeiro número: '))
num2 = float(input('Digite o segundo número: '))

print("Escolha uma das operações abaixo:")

while True:
    print('1 - Soma')
    print('2 - Subtração')
    print('3 - Multiplicação')
    print('4 - Divisão')
    operacao = int(input('Digite o número da operação: '))

    resultado = calculadora(num1, num2, operacao)
    print('resultado:', resultado, '\n\n')