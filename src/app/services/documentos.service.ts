import { DocumentoModelo } from './../models/documentoModelo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  documentos: DocumentoModelo[] = [];
  
  constructor(    
  ) { 
    this.documentos = this.generateDocuments();
  }

  getDocById(id: number) {
    return this.documentos.find(x => x.id == id);      
  }
  
  

/*   generateDocuments(){
    let docList: DocumentoModelo[] = [];
    docList = [{
      id: 1,
      titulo: "teste html",
      conteudo: "",
      tipo: "Informação",
      referencias: []
    }]

    return docList;
  } */

  getDocumentList(): any[]{
    return [{
      id: 1,
      titulo: "Nota de Orientação à Gestante",
      tipo: "Orientacao"
    }]
  }

  generateDocuments(){
    let documentos: DocumentoModelo[] = [{
      id: 1,
      tipo: "Orientacao",
      titulo: "Nota de Orientação à Gestante",
      conteudo: `<h1>O sistema de Saúde Suplementar apresenta altos índices de cirurgias cesarianas desnecessárias.</h1> Esta nota atende decisão judicial proferida pelo Tribunal Regional Federal da 3ª Região. O objetivo desta nota é esclarecer à estante acerca dos riscos e benefícios da cesariana e do parto normal. 
      O parto normal é o método natural de nascer durante o qual a mãe produz substâncias capazes de proteger o recém-nascido e favorecer a amamentação, por isso é importante que a mulher entre em trabalho de parto. A sua recuperação é imediata, pois, após o nascimento a mãe poderá levantar-se e cuidar de seu filho. 
      Contudo, algumas mulheres apresentam contraindicação para este tipo de parto devido a condições de saúde preexistentes ou por complicações durante o trabalho de parto havendo indicação para a realização da cirurgia. O parto normal pode também apresentar risco de lesão no períneo.
      A cesariana, quando indicada por razões clínicas, é uma cirurgia segura e com baixa frequência de complicações graves. No entanto, quando realizada sem uma razão médica que a justifique, apresenta riscos de complicações cirúrgicas, como infecções e hemorragia, que podem resultar em morte materna. Quanto ao recém-nascido, 
      podem ocorrer lesões no momento da retirada do bebê ou outras <span style='color: red'>complicações após o nascimento como infecções e pneumonias</span>, riscos de prematuridade e internação em UTI, nos casos em que a cirurgia é feita antes de 39 semanas de gestação, além de aumentar em 120 vezes a chance do bebe apresentar dificuldade respiratória quando a cirurgia é feita entre 37 e 38 semanas. 
      Persistindo dúvidas não hesite em voltar a discutir com seu médico sobre riscos e benefícios que afetam a sua segurança e a do bebê. 
      `,
      referencias:[
        `Salminen S. Influence of mode of delivery on gut microbiota composition
        in seven year old children. Gut. 2004 1 de setembro;53(9):1388–9.`,
        `Grönlund MM, Lehtonen OP, Eerola E, Kero P. Fecal microflora in healthy
        infants born by different methods of delivery: permanent changes in
        intestinal flora after cesarean deliver. J Pediatr Gastroenterol Nutr. 1999
        janeiro; 28(1):19–25`,
        `Kaplan JL, Shi HN, Walker WA. The role of microbes in developmental
        immunologic programminr. Pediatr Res. 2011 junho;69(6):465–72`,
        `Gyton, A.C. (1986). Tratado de fisiologia médica. Rio de Janeiro: Editora
        Guanabara, AS`
      ]
    },
    {
      id: 2,
      tipo: "Orientacao",
      titulo: "As Compras da Mamãe de primeira viagem (Mala-maternidade)",
      conteudo: `Muitas vezes as futuras mamães se empolgam com as compras e adquirem roupinhas que logo ficam pequenas e nem chegam a ser usadas.
      Para ajudar a organizar suas compras, aqui está uma lista de sugestões de utensílios e acessórios que você e seu bebê não podem deixar de ter. 
      A lista abaixo é apenas um guia para os primeiros dias. Pode ser que você venha a sentir necessidade de mais alguma coisa ou até deixar alguns destes itens fora.
      Para a mamâe: Calcinha elástica
      Uma calcinha elástica grande para firmar a parte inferior do abdome, seja para parto normal e principalmente para cesariana é muito importante. Esta calça elática deve cobrir todo o abdome (barriga) até acima do umbido quase chegando nas costela. Cintas elásticas são menos eficientes do que calcinhas eláticas. 
      Fraldas de Adulto
      Pode acontecer que você precise de fraldas de adulto em caso de ruptura da bolsa ou de sangramento de grande volume. Então pode ser uma boa idéia ter um pacote à mão, comprado antecipadamente. 
      As Principais Roupinhas do Bebê: Camisetinha
      Compre camisetinhas com aberturas nos ombros para não incomodar o bebê. Tenha 5 ou 6.
      Casaquinho de lã
      Compre 2-3, dependendo da estação. Cuide para que a lã não encoste diretamente  no rosto do bebê.
      Camisinha pagão
      Será indispensável durante os primeiros meses do bebê. Compre 5-6. Evitar as que tem abertura atrás para não ter que virar o bebê de bruço para vestir.
      Mijãozinho
      É uma peça que dá muito conforto ao bebê. Algumas mães preferem estas ao invés de camisinhas pagão. Tenha 5.
      Macacão
      Evite comprar muitos com pezinhos, pois o bebê cresce rápido e o macacão passa a incomodá-lo. Compre 7 ou 8, uns de mangas compridas outros de mangas curtas., conforme a estação do ano.
      Sapatinho
      Se o sapatinho for de lã, não deixe de calçar meias no bebê. O ideal é que você tenha 3 pares.
      Gorro
      É uma peça muito importante para proteger o seu bebê. Compre 2.
      Para Cama e Banho: Lençol e fronha de berço
      Tenha sempre 3 jogos, pois o bebê costuma regurgitar e, além disso, o xixi pode vazar das fraldas.
      Manta
      Você deve ter mantas mais quentes e outras menos quentes. Compre duas de cada.
      Cueiro
      O cueiro é uma fralda de flanela que evita que o xixi molhe a manta ou o colchão. Tenha 3.
      Toalha
      Compre 2. Prefira as que tem capuz, pois o bebê deve sair do banho sempre bem agasalhado.
      Os Acessórios: anheira
      As banheiras suspensas em suporte são bastante confortáveis, mas lembre-se: elas servirão apenas enquanto o bebê for bem pequeno, já que elas não suportam muito peso.  Isso é dispensável.
      Trocador
      Para o seu conforto compre um trocador apropriado para a sua altura. Isso é dispensável.
      Produtos para higiene do bebê
      Estão relacionados apenas alguns produtos que não podem faltar para a higiene diária do seu bebê: algodão, cotonete, lenços umedecidos, sabonete neutro e creme contra assaduras, de acordo com a orientação do seu pediatra.
      Carrinho
      Existem por aí carrinhos de vários tipos e preços. Ao comprar um carrinho, pense primeiramente na segurança do bebê. Isso não é essencial antes do primeiro mês.
      Babá Eletrônica
      Você ficará mais tranqüila se puder ouvir cada barulho de seu bebê de onde estiver. Muitas são portáteis e funcionam com pilhas. Isso é supérfluo.
      Brinquedos
      Os bebês adoram brincar. Um móbile com música suave e brinquedinhos leves e macios são boas opções. Tomo cuidado com os brinquedos pequenos que podem ser engolidos pelo bebê. Isso não é importante antes do primeiro mês.
      
      Lembre-se: o mais importante é a atenção, o carinho e o amor. Estes ingredientes não podem faltar. Quando for amamentar, faça desse momento um momento entre a mãe e o filho, em ambiente calmo, luz moderada, pouco barulho, sem TV e sem visitas.
      `,
      referencias:[            
      ]
    },
    {
      id: 3,
      tipo: "Orientacao",
      titulo: "Esquema de Vacinação para a Gestante",
      conteudo: `
        Vacina: Antraz,        
        Cuidado com essa vacina,
        Observação: Gestantes devem ser vacinadas contra Antraz somente se os benefícios potenciais superarem os riscos potenciais para o feto,
        <--->
        Vacina: BCG,        
        Vírus: Atenuado,
        Contra indicada,
        Observação:Nenhum efeito danoso para o feto foi  observado, mesmo assim não é recomendada na gestação.
        <--->
        Vacina: Caxumba,        
        Vírus: Atenuado,
        Contra indicada,
        Observação: Evitar Gravidez nos 28 dias  Subsequentes à vacinação. Se Houver vacinação accidental durante a gravidez, aconselhar sobre o risco teórico para o feto, porem não é indicada para interrupção da gravidez. 
        <--->
        Vacina: Dupla Adulto (tétano e difetria),        
        Vírus: Toxóide,
        Indicada,
        Observação: Indicada de rotina para todas as grávidas. Se a gestante já foi previamente vacinada, administrar 1 dose de reforço. 
        <--->
        Vacina: Encefalite Japonesa,                
        Cuidado,
        Observação: Não deve ser administrada de rotina a gestantes. Gestantes que tiverem que viajar para área de risco, devem ser vacinadas, considerando os benefícios potenciais e os possíveis riscos. 
        <--->
        Vacina: Febre Amarela,  
        Vírus: Atenuado,              
        Cuidado,
        Observação: Risco para o feto não confirmado. Vacinar somente em caso de viagem inadiável par a zona endêmica. Nestes casos  o pequeno risco para o feto é inferior ao risco de infecção pelo vírus de febre amarela. 
        <--->
        Vacina: Febre Tifóide,  
        Vírus: Atenuado,              
        Cuidado,
        Observação: Não existe dados disponíveis quanto ao uso durante a gestação.
        <--->
        Vacina: Hepatite A,  
        Vírus: Inativado,              
        Cuidado,
        Observação: Risco teórico baixo paro o feto. Comparar o risco da vacinação com o risco da gestante contrair o vírus da hepatite A.
        <--->
        Vacina: Hepatite B,  
        Vírus: Recombinante,              
        Indicada,
        Observação: Até  o  momento, não existem riscos relatados para o feto. Pode ser administrado tanto na gestação como na lactação. A infecção materna pelo vírus da hepatite B pode resultar em doença materna grave e infecção crônicado feto.
        <--->
        Vacina: Influenza (gripe),  
        Vírus: Inativado,              
        Indicada,
        Observação: Vacinar todas as gestantes que apresentem doença de base que aumente o risco de complicações relacionadas a gripe. Vacinar as que estarão além do primeiro trimestre (14 semanas de gestação ) na época de surto de gripe.
        <--->
        Vacina: Meningococo,  
        Vírus: Inativado,              
        Indicada,
        Observação: Até o momento o risco teórico par o feto é baixo. As avaliações disponíveis têm mostrado que a vacina  é eficaz e segura na gestação.
        <--->
        Vacina: Pneumococo,  
        Vírus: Inativado,              
        Cuidado,
        Observação: Segurança  não é avaliada para o primeiro trimestre da  gravidez. Gestantes vacinadas acidentalmente não tiveram conseqüência danosa para os recém – nascidos.
        <--->
        Vacina: Poliomielite (sabin ou salk),  
        Vírus: Sabin= atenuado   Salk= Inativado,              
        Cuidado,
        Observação: Vacinar gestantes que necessitar de proteção imediata contar a poliomielite.Evitar vacinar gestantes por risco teórico ao feto. 
        <--->
        Vacina: Raiva,
        Vírus: Sabin= atenuado   Salk= Inativado,              
        Indicada,
        Observação: Não existem evidências de dano fetal. Raiva é doença grave, portanto a gestante exposta deve receber a vacina.
        <--->
        Vacina: Raiva,             
        Indicada,
        Observação: Não existem evidências de dano fetal. Raiva é doença grave, portanto a gestante exposta deve receber a vacina.
        <--->
        Vacina: Rubéola,
        Vírus: Atenuado,              
        Contra indicada,
        Observação: Possível risco fetal: não vacinar. Não engravidar 4 semanas após a vacinação. Em vacinação acidental da gestante, orientar sobre os possíveis riscos fetais, porém esta situação não é considerada como indicação para interrupção da gravidez.
        <--->
        Vacina: Sarampo,
        Vírus: Atenuado,              
        Contra indicada,
        Observação: dem a Caxumba.
        <--->
        Vacina: Varicela,
        Vírus: Atenuado,              
        Contra indicada,
        Observação: A gestante não deve ser  vacinada. Risco fetal desconhecido. Deve ser menor do que o vírus selvagem. Não engravidar 4 semanas após receber a vacina. Se a gestação ocorrer neste período, não esta indicada a interrupção da gestação. A vacina de contactantes  com a gestante não esta contra – indicada. É altamente recomendada a administração de imunoglobulina específica humana anti – varicela – zoster ( VZIG ), na pós – exposição. 
        <--->
        Vacina: Varíola,
        Vírus: Atenuado,              
        Cuidado        
      `,
      referencias:[            
      ]
    }
  ]

    return documentos;
  }
}
