// Cria um array de objetos com dados para a tabela
var data = [
    { nome: "João", idade: 30, cidade: "São Paulo" },
    { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
    { nome: "Pedro", idade: 35, cidade: "Belo Horizonte" }
];

// Obtém uma referência ao elemento onde a tabela será criada
var tableContainer = document.getElementById("tabela");

// Cria uma tabela
var table = document.createElement("table");

// Cria a linha de cabeçalho
var headerRow = table.insertRow(0);

// Adiciona as colunas de cabeçalho
var headerCell1 = headerRow.insertCell(0);
var headerCell2 = headerRow.insertCell(1);
var headerCell3 = headerRow.insertCell(2);

// Define o texto das colunas de cabeçalho
headerCell1.innerHTML = "Nome";
headerCell2.innerHTML = "Idade";
headerCell3.innerHTML = "Cidade";

// Itera sobre os dados e cria as linhas da tabela
for (var i = 0; i < data.length; i++) {
    var row = table.insertRow(i + 1); // +1 para evitar substituir o cabeçalho

    // Adiciona as colunas com os dados
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    // Preenche as colunas com os dados
    cell1.innerHTML = data[i].nome;
    cell2.innerHTML = data[i].idade;
    cell3.innerHTML = data[i].cidade;
}

// Adiciona a tabela ao elemento container
tableContainer.appendChild(table);
