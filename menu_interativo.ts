
import promptSync from "prompt-sync";

const prompt = promptSync();

function main() {

    // Cria uma lista para armazenar os produtos
    let carrinho: string[] = [];

    let opcao: number;

    console.log("\n--- CARRINHO DE COMPRAS ---");
    console.log("1 - Adicionar produto");
    console.log("2 - Remover produto");
    console.log("3 - Listar produtos");
    console.log("0 - Sair");

    opcao = Number(prompt("Escolha uma opção: "));

    // Repete o menu enquanto o usuário não escolher sair
    while (opcao !== 0) {

        if (opcao === 1) {

            console.log("Produto adicionado!");

        } else if (opcao === 2) {

            console.log("Operação de remoção realizada!");

        } else if (opcao === 3) {

            console.log("\nProdutos no carrinho:");

        } else {

            console.log("Opção inválida!");

        }

        console.log("\n--- CARRINHO DE COMPRAS ---");
        console.log("1 - Adicionar produto");
        console.log("2 - Remover produto");
        console.log("3 - Listar produtos");
        console.log("0 - Sair");

        opcao = Number(prompt("Escolha uma opção: "));
    }

    console.log("Saindo do carrinho...");
}

main();
