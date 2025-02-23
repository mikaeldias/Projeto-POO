
export class Pessoa {
    constructor(
        public id: number,
        public nome: string,
        public cpf: string,
        public idade: number,
        public estado_nascimento: string,
        public email: string,
        public categoria: string
    ) {}
}
