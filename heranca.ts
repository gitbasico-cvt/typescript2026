// ==========================================
// CLASSE PRINCIPAL (Executável)
// ==========================================

class SistemaHeranca {

    static main(): void {

        // Cria uma lista para armazenar objetos do tipo Aluno
        let listaAlunos: Aluno[] = [];

        // Instancia um novo Aluno
        let aluno1 = new Aluno(
            "Ana Beatriz",
            20,
            "2026105",
            "Engenharia de Software"
        );

        // Adiciona o aluno criado à lista
        listaAlunos.push(aluno1);

        // Percorre a lista e exibe os dados
        for (let a of listaAlunos) {

            console.log("=== DADOS DO ALUNO ===");

            console.log("Nome (veio de Pessoa): " + a.nome);
            console.log("Idade (veio de Pessoa): " + a.idade);

            console.log("Matrícula (específico de Aluno): " + a.matricula);
            console.log("Curso (específico de Aluno): " + a.curso);

        }
    }
}


// ==========================================
// CLASSE PAI (Superclasse)
// ==========================================

class Pessoa {

    // Atributos comuns a qualquer pessoa
    nome: string;
    idade: number;

    // Construtor da classe pai
    constructor(nome: string, idade: number) {

        this.nome = nome;
        this.idade = idade;

    }
}


// ==========================================
// CLASSE FILHA (Subclasse)
// ==========================================

class Aluno extends Pessoa {

    // Atributos específicos de um aluno
    matricula: string;
    curso: string;

    // Construtor da classe filha
    constructor(
        nome: string,
        idade: number,
        matricula: string,
        curso: string
    ) {

        // Chama o construtor da classe pai
        super(nome, idade);

        // Inicializa os atributos específicos da classe filha
        this.matricula = matricula;
        this.curso = curso;

    }
}


// Executa o programa
SistemaHeranca.main();