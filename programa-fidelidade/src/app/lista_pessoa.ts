import { Pessoa } from "./pessoa";

export class Listagem {
    lista: Pessoa[] = [];

    adcicionaPessoa(pessoa: Pessoa): void {
        this.lista.push(pessoa)
    }

    removerPessoa(id: number): void {
        this.lista.splice(id, 1);
    }
}
