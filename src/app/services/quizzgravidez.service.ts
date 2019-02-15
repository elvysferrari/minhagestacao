import { QuestaoModelo } from './../models/questaoModelo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizzgravidezService {

  constructor() { }

  getQuizzGravidez(){
    let questoes: QuestaoModelo[] = [{
      id: 1,
      titulo: "Que método de contracepção você está usando?",
      respostas:[{
        id: 1.1,
        relevancia: 20,
        texto: `Implante contraceptivo (Nexaplanon), sistema instrauterino (SIU), ou dispositivo
        intrauterino
        (DIU)`,
        descricao: `Você usa contraceptivos altamente eficazes e as chances de gravidez são muito baixas.`        
      },
      {
        id: 1.2,
        relevancia: 10,
        texto: `Pílula anticoncepcional oral`,
        descricao: `Nenhum contraceptivo é 100% eficaz para prevenir a gravidez, então mesmo que use um método, você ainda pode engravidar.`        
      },
      {
        id: 1.3,
        relevancia: 8,
        texto: `Método de barreira (ex: preservativo)`,
        descricao: `Nenhum contraceptivo é 100% eficaz para prevenir a gravidez, então mesmo que use um método, você ainda pode engravidar.`        
      },
      {
        id: 1.4,
        relevancia: 1,
        texto: `Nenhum`,
        descricao: `Apenas pouco mais de um terço dos casais saudáveis vão conceber no primeiro mês de tentativa.`        
      }]
    },
    {
      id: 2,
      titulo: "Quando é sua próxima menstruação?",
      respostas:[{
        id: 2.1,
        relevancia: 1,
        texto: `Em 2 semanas ou mais`,
        descricao: ``        
      },
      {
        id: 2.2,
        relevancia: 1,
        texto: `Em alguns dias`,
        descricao: `Você precisa esperar um pouco mais, pra fazer o teste.`        
      },
      {
        id: 2.3,
        texto: `Estou com alguns dias de atraso`,
        relevancia: 10,
        descricao: `Para muitas mulheres, a menstruação atrasada, geralmente, é o sinal físico mais precoce de gravidez.`        
      },
      {
        id: 2.4,
        relevancia: 15,
        texto: `Estou com mais de uma semana de atraso`,
        descricao: `Para muitas mulheres, a menstruação atrasada, geralmente, é o sinal físico mais precoce de gravidez. `        
      },
      {
        id: 2.5,
        relevancia: 10,
        texto: `Não sei/não tenho menstruação regular`,
        descricao: `Faça um teste de gravidez.`        
      }]
    },
    {
      id: 3,
      titulo: "Notou alguma mudança em seus seios?",
      respostas:[{
        id: 3.1,
        relevancia: 1,
        texto: `Não, tudo parece normal`,
        descricao: `Durante o início de gravidez, seus seios podem parecer maiores ou mais sensíveis que o normal, e algumas mulheres podem notar que a área ao redor dos mamilos (auréola) pode ficar mais escura. 
        A sensibilidade nos seios é um dos sintomas precoces de gravidez mais comuns, mas pode ser intermitente.`        
      },
      {
        id: 3.2,
        relevancia: 10,
        texto: `Eles estão um pouco sensíveis`,
        descricao: `Durante o início de gravidez, seus seios podem parecer maiores ou mais sensíveis que o normal, e algumas mulheres podem notar que a área ao redor dos mamilos (auréola) pode ficar mais escura. 
        A sensibilidade nos seios é um dos sintomas precoces de gravidez mais comuns, mas pode ser intermitente.`        
      },
      {
        id: 3.3,
        relevancia: 15,
        texto: `Eles estão muito sensíveis/doloridos`,
        descricao: `Durante o início de gravidez, seus seios podem parecer maiores ou mais sensíveis que o normal, e algumas mulheres podem notar que a área ao redor dos mamilos (auréola) pode ficar mais escura. 
        A sensibilidade nos seios é um dos sintomas precoces de gravidez mais comuns, mas pode ser intermitente.`        
      },
      {
        id: 3.4,
        relevancia: 15,
        texto: `Meus mamilos parecem um pouco mais escuros que o normal`,
        descricao: `Durante o início de gravidez, seus seios podem parecer maiores ou mais sensíveis que o normal, e algumas mulheres podem notar que a área ao redor dos mamilos (auréola) pode ficar mais escura. 
        A sensibilidade nos seios é um dos sintomas precoces de gravidez mais comuns, mas pode ser intermitente.`        
      }]
    },
    {
      id: 4,
      titulo: "Você se sentiu enjoada recentemente?",
      respostas:[{
        id: 4.1,
        relevancia: 2,
        texto: `Não`,
        descricao: `Pode ser que você comece a se sentir enjoada e até vomite entre a 2ª e a 8ª semanas de gravidez. Normalmente, isso acontece por volta da 16ª semana. Embora seja chamado de "enjoo matinal", ele pode ocorrer a qualquer momento do dia ou da noite e até pode afetá-la a todos os momentos.`        
      },
      {
        id: 4.2,
        relevancia: 5,
        texto: `Às vezes um pouco enjoada`,
        descricao: `Pode ser que você comece a se sentir enjoada e até vomite entre a 2ª e a 8ª semanas de gravidez. Normalmente, isso acontece por volta da 16ª semana. Embora seja chamado de "enjoo matinal", ele pode ocorrer a qualquer momento do dia ou da noite e até pode afetá-la a todos os momentos.`       
      },
      {
        id: 4.3,
        relevancia: 10,
        texto: `Sinto enjoo às vezes quando estou com fome`,
        descricao: `Pode ser que você comece a se sentir enjoada e até vomite entre a 2ª e a 8ª semanas de gravidez. Normalmente, isso acontece por volta da 16ª semana. Embora seja chamado de "enjoo matinal", ele pode ocorrer a qualquer momento do dia ou da noite e até pode afetá-la a todos os momentos.`
      },
      {
        id: 4.4,
        relevancia: 15,
        texto: `Tenho ficado enjoada com frequência!`,
        descricao: `Pode ser que você comece a se sentir enjoada e até vomite entre a 2ª e a 8ª semanas de gravidez. Normalmente, isso acontece por volta da 16ª semana. Embora seja chamado de "enjoo matinal", ele pode ocorrer a qualquer momento do dia ou da noite e até pode afetá-la a todos os momentos.`
      }]
    },
    {
      id: 5,
      titulo: "Como estão seus níveis de energia?",
      respostas:[{
        id: 5.1,
        relevancia: 1,
        texto: `Estou me sentindo relativamente normal`,
        descricao: `Provavelmente, você se sentirá cansada além do normal nas primeiras semanas da gravidez. 
        Isso pode ocorrer devido ao aumento nos níveis de progesterona em seu corpo, o que mantém o revestimento do útero para ajudar a dar suporte à gravidez.`        
      },
      {
        id: 5.2,
        relevancia: 5,
        texto: `Eu estou me sentindo um pouco sonolenta`,
        descricao: `Provavelmente, você se sentirá cansada além do normal nas primeiras semanas da gravidez. 
        Isso pode ocorrer devido ao aumento nos níveis de progesterona em seu corpo, o que mantém o revestimento do útero para ajudar a dar suporte à gravidez.`       
      },
      {
        id: 5.3,
        relevancia: 10,
        texto: `Estou me sentindo bem cansada na maioria das tardes e noites`,
        descricao: `Provavelmente, você se sentirá cansada além do normal nas primeiras semanas da gravidez. 
        Isso pode ocorrer devido ao aumento nos níveis de progesterona em seu corpo, o que mantém o revestimento do útero para ajudar a dar suporte à gravidez.`
      },
      {
        id: 5.4,
        relevancia: 15,
        texto: `Estou exausta o tempo todo. Já está na hora de ir dormir?`,
        descricao: `Provavelmente, você se sentirá cansada além do normal nas primeiras semanas da gravidez. 
        Isso pode ocorrer devido ao aumento nos níveis de progesterona em seu corpo, o que mantém o revestimento do útero para ajudar a dar suporte à gravidez.`
      }]
    },
    {
      id: 6,
      titulo: "Você está urinando com mais frequência que o normal?",
      respostas:[{
        id: 6.1,
        relevancia: 1,
        texto: `Não percebi`,
        descricao: `Maior frequência urinária pode ser um sintoma inicial de gravidez, mas pode acontecer por outros motivos, como infecção no trato urinário.`        
      },
      {
        id: 6.2,
        relevancia: 5,
        texto: `Sim, um pouco mais que o normal`,
        descricao: `Maior frequência urinária pode ser um sintoma inicial de gravidez, mas pode acontecer por outros motivos, como infecção no trato urinário.`       
      },
      {
        id: 6.3,
        relevancia: 10,
        texto: `Minha frequência urinária durante o dia e a noite aumentou`,
        descricao: `Maior frequência urinária pode ser um sintoma inicial de gravidez, mas pode acontecer por outros motivos, como infecção no trato urinário.`
      },
      {
        id: 6.4,
        relevancia: 15,
        texto: `Minha bexiga está sempre cheia!`,
        descricao: `Maior frequência urinária pode ser um sintoma inicial de gravidez, mas pode acontecer por outros motivos, como infecção no trato urinário.`
      }]
    },
    {
      id: 7,
      titulo: "Como está o seu humor em geral?",
      respostas:[{
        id: 7.1,
        relevancia: 1,
        texto: `Estou normal`,
        descricao: `As mudanças nos hormônios podem causar algumas alterações de humor nos estágios iniciais da gravidez. Pode ser que você comece a chorar sem realmente saber a razão. 
        As alterações de humor também podem ocorrer devido à TPM. `        
      },
      {
        id: 7.2,
        relevancia: 5,
        texto: `Estou um pouco mal-humorada, mas nada demais`,
        descricao: `As mudanças nos hormônios podem causar algumas alterações de humor nos estágios iniciais da gravidez. Pode ser que você comece a chorar sem realmente saber a razão. 
        As alterações de humor também podem ocorrer devido à TPM. `       
      },
      {
        id: 7.3,
        relevancia: 10,
        texto: `Estou bem irritada com tudo e com todos no momento`,
        descricao: `As mudanças nos hormônios podem causar algumas alterações de humor nos estágios iniciais da gravidez. Pode ser que você comece a chorar sem realmente saber a razão. 
        As alterações de humor também podem ocorrer devido à TPM. `
      },
      {
        id: 7.4,
        relevancia: 15,
        texto: `Estou em uma montanha-russa emocional!`,
        descricao: `As mudanças nos hormônios podem causar algumas alterações de humor nos estágios iniciais da gravidez. Pode ser que você comece a chorar sem realmente saber a razão. 
        As alterações de humor também podem ocorrer devido à TPM. `
      }]
    },
    {
      id: 8,
      titulo: "Notou alguma alteração em seu apetite?",
      respostas:[{
        id: 8.1,
        relevancia: 1,
        texto: `Não, tudo parece normal`,
        descricao: `Pode ser que você deixe de gostar de algumas coisas, como chá, café ou comida gordurosa, e sinta vontade de alimentos que normalmente não gostaria. 
        Você também pode enjoar com determinados odores também, como o de café, carne ou álcool.`        
      },
      {
        id: 8.2,
        relevancia: 5,
        texto: `Não suporto coisas de que eu gostava antes (por exemplo, chá, café, sabores fortes)`,
        descricao: `Pode ser que você deixe de gostar de algumas coisas, como chá, café ou comida gordurosa, e sinta vontade de alimentos que normalmente não gostaria. 
        Você também pode enjoar com determinados odores também, como o de café, carne ou álcool.`       
      },
      {
        id: 8.3,
        relevancia: 10,
        texto: `Eu estou comendo tudo que vejo`,
        descricao: `Pode ser que você deixe de gostar de algumas coisas, como chá, café ou comida gordurosa, e sinta vontade de alimentos que normalmente não gostaria. 
        Você também pode enjoar com determinados odores também, como o de café, carne ou álcool.`
      },
      {
        id: 8.4,
        relevancia: 15,
        texto: `O cheiro de alguns alimentos está me deixando bem enjoada`,
        descricao: `Pode ser que você deixe de gostar de algumas coisas, como chá, café ou comida gordurosa, e sinta vontade de alimentos que normalmente não gostaria. 
        Você também pode enjoar com determinados odores também, como o de café, carne ou álcool.`
      }]
    }]

    return questoes;
  }
}
