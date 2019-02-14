import { QuestaoModelo } from './questaoModelo';
import { RespostaModelo } from "./respostaModelo";

export class QuestaoRespondida {
    questaoModelo: QuestaoModelo;
    respostas: RespostaModelo[];
    nomePessoa: string;
    emailPessoa: string;
}
