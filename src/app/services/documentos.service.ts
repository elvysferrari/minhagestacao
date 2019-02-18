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
    },
    {
      id: 2,
      titulo: "As Compras da Mamãe de primeira viagem (Mala-maternidade)",
      tipo: "Orientacao"
    },
    {
      id: 3,
      titulo: "Esquema de Vacinação para a Gestante",
      tipo: "Orientacao"
    }/* ,
    {
      id: 4,
      titulo: "Esquema de Vacinação para a Gestante",
      tipo: "Orientacao"
    } */]
  }

  generateDocuments(){
    let documentos: DocumentoModelo[] = [{
      id: 1,
      tipo: "Orientacao",
      titulo: "Nota de Orientação à Gestante",
      conteudo: `<div>
      <div style="text-align: justify;"><strong><span style="color: #000000;">A</span></strong> sistema de Sa&uacute;de Suplementar apresenta altos &iacute;ndices de cirurgias cesarianas desnecess&aacute;rias.Esta nota atende decis&atilde;o judicial proferida pelo Tribunal Regional Federal da 3&ordf; Regi&atilde;o. O objetivo desta nota &eacute; esclarecer &agrave; estante acerca dos riscos e benef&iacute;cios da cesariana e do parto normal.</div>
      <div style="text-align: justify;">&nbsp;</div>
      <div style="text-align: justify;"><strong>O</strong> parto normal &eacute; o m&eacute;todo natural de nascer durante o qual a m&atilde;e produz subst&acirc;ncias capazes de proteger o rec&eacute;m-nascido e favorecer a amamenta&ccedil;&atilde;o, por isso &eacute; importante que a mulher entre em trabalho de parto. A sua recupera&ccedil;&atilde;o &eacute; imediata, pois, ap&oacute;s o nascimento a m&atilde;e poder&aacute; levantar-se e cuidar de seu filho.</div>
      <div style="text-align: justify;">Contudo, algumas mulheres apresentam contraindica&ccedil;&atilde;o para este tipo de parto devido a condi&ccedil;&otilde;es de sa&uacute;de preexistentes ou por complica&ccedil;&otilde;es durante o trabalho de parto havendo indica&ccedil;&atilde;o para a realiza&ccedil;&atilde;o da cirurgia. O parto normal pode tamb&eacute;m apresentar risco de les&atilde;o no per&iacute;neo.</div>
      <div style="text-align: justify;">&nbsp;</div>
      <div style="text-align: justify;"><strong>A</strong> cesariana, quando indicada por raz&otilde;es cl&iacute;nicas, &eacute; uma cirurgia segura e com baixa frequ&ecirc;ncia de complica&ccedil;&otilde;es graves. No entanto, quando realizada sem uma raz&atilde;o m&eacute;dica que a justifique, apresenta riscos de complica&ccedil;&otilde;es cir&uacute;rgicas, como infec&ccedil;&otilde;es e hemorragia, que podem resultar em morte materna. Quanto ao rec&eacute;m-nascido,</div>
      <div style="text-align: justify;">podem ocorrer les&otilde;es no momento da retirada do beb&ecirc; ou outras</div>
      <div style="text-align: justify;">complica&ccedil;&otilde;es ap&oacute;s o nascimento como infec&ccedil;&otilde;es e pneumonias, riscos de prematuridade e interna&ccedil;&atilde;o em UTI, nos casos em que a cirurgia &eacute; feita antes de 39 semanas de gesta&ccedil;&atilde;o, al&eacute;m de aumentar em 120 vezes a chance do bebe apresentar dificuldade respirat&oacute;ria quando a cirurgia &eacute; feita entre 37 e 38 semanas.</div>
      <div style="text-align: justify;">Persistindo d&uacute;vidas n&atilde;o hesite em voltar a discutir com seu m&eacute;dico sobre riscos e benef&iacute;cios que afetam a sua seguran&ccedil;a e a do beb&ecirc;.</div>
      </div>
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
      conteudo: `<div style="text-align: justify;">
      <div>
      <div style="text-align: justify;">Muitas vezes as futuras mam&atilde;es se empolgam com as compras e adquirem roupinhas que logo ficam pequenas e nem chegam a ser usadas.</div>
      <div style="text-align: justify;">Para ajudar a organizar suas compras, aqui est&aacute; uma lista de sugest&otilde;es de utens&iacute;lios e acess&oacute;rios que voc&ecirc; e seu beb&ecirc; n&atilde;o podem deixar de ter.</div>
      <div style="text-align: justify;">A lista abaixo &eacute; apenas um guia para os primeiros dias. Pode ser que voc&ecirc; venha a sentir necessidade de mais alguma coisa ou at&eacute; deixar alguns destes itens fora.</div>
      <div style="text-align: justify;">&nbsp;</div>
      <h4 style="text-align: center;">Para a mam&atilde;e</h4>
      <div style="text-align: justify;"><strong><em>Calcinha el&aacute;stica</em></strong></div>
      <div style="text-align: justify;">Uma calcinha el&aacute;stica grande para firmar a parte inferior do abdome, seja para parto normal e principalmente para cesariana &eacute; muito importante. Esta cal&ccedil;a el&aacute;tica deve cobrir todo o abdome (barriga) at&eacute; acima do umbido quase chegando nas costela. Cintas el&aacute;sticas s&atilde;o menos eficientes do que calcinhas el&aacute;ticas.</div>
      <div style="text-align: justify;"><em><strong>Fraldas de Adulto</strong></em></div>
      <div style="text-align: justify;">Pode acontecer que voc&ecirc; precise de fraldas de adulto em caso de ruptura da bolsa ou de sangramento de grande volume. Ent&atilde;o pode ser uma boa id&eacute;ia ter um pacote &agrave; m&atilde;o, comprado antecipadamente.</div>
      <div style="text-align: justify;">&nbsp;</div>
      <h4 style="text-align: center;">As Principais Roupinhas do Beb&ecirc;</h4>
      <div style="text-align: justify;"><em><strong>Camisetinha</strong></em></div>
      <div style="text-align: justify;">Compre camisetinhas com aberturas nos ombros para n&atilde;o incomodar o beb&ecirc;. Tenha 5 ou 6.</div>
      <div style="text-align: justify;"><em><strong>Casaquinho de l&atilde;</strong></em></div>
      <div style="text-align: justify;">Compre 2-3, dependendo da esta&ccedil;&atilde;o. Cuide para que a l&atilde; n&atilde;o encoste diretamente no rosto do beb&ecirc;.</div>
      <div style="text-align: justify;"><em><strong>Camisinha pag&atilde;o</strong></em></div>
      <div style="text-align: justify;">Ser&aacute; indispens&aacute;vel durante os primeiros meses do beb&ecirc;. Compre 5-6. Evitar as que tem abertura atr&aacute;s para n&atilde;o ter que virar o beb&ecirc; de bru&ccedil;o para vestir.</div>
      <div style="text-align: justify;"><strong><em>Mij&atilde;ozinho</em></strong></div>
      <div style="text-align: justify;">&Eacute; uma pe&ccedil;a que d&aacute; muito conforto ao beb&ecirc;. Algumas m&atilde;es preferem estas ao inv&eacute;s de camisinhas pag&atilde;o. Tenha 5.</div>
      <div style="text-align: justify;"><strong><em>Macac&atilde;o</em></strong></div>
      <div style="text-align: justify;">Evite comprar muitos com pezinhos, pois o beb&ecirc; cresce r&aacute;pido e o macac&atilde;o passa a incomod&aacute;-lo. Compre 7 ou 8, uns de mangas compridas outros de mangas curtas., conforme a esta&ccedil;&atilde;o do ano.</div>
      <div style="text-align: justify;"><em><strong>Sapatinho</strong></em></div>
      <div style="text-align: justify;">Se o sapatinho for de l&atilde;, n&atilde;o deixe de cal&ccedil;ar meias no beb&ecirc;. O ideal &eacute; que voc&ecirc; tenha 3 pares.</div>
      <div style="text-align: justify;"><strong><em>Gorro</em></strong></div>
      <div style="text-align: justify;">&Eacute; uma pe&ccedil;a muito importante para proteger o seu beb&ecirc;. Compre 2.</div>
      <h4 style="text-align: center;">Para Cama e Banho</h4>
      <div style="text-align: justify;"><strong><em>Len&ccedil;ol e fronha de ber&ccedil;o</em></strong></div>
      <div style="text-align: justify;">Tenha sempre 3 jogos, pois o beb&ecirc; costuma regurgitar e, al&eacute;m disso, o xixi pode vazar das fraldas.</div>
      <div style="text-align: justify;"><em><strong>Manta</strong></em></div>
      <div style="text-align: justify;">Voc&ecirc; deve ter mantas mais quentes e outras menos quentes. Compre duas de cada.</div>
      <div style="text-align: justify;">Cueiro</div>
      <div style="text-align: justify;">O cueiro &eacute; uma fralda de flanela que evita que o xixi molhe a manta ou o colch&atilde;o. Tenha 3.</div>
      <div style="text-align: justify;"><strong><em>Toalha</em></strong></div>
      <div style="text-align: justify;">Compre 2. Prefira as que tem capuz, pois o beb&ecirc; deve sair do banho sempre bem agasalhado.</div>
      <h4 style="text-align: center;">Os Acess&oacute;rios</h4>
      <div style="text-align: justify;"><em><strong>Banheira</strong></em></div>
      <div style="text-align: justify;">As banheiras suspensas em suporte s&atilde;o bastante confort&aacute;veis, mas lembre-se: elas servir&atilde;o apenas enquanto o beb&ecirc; for bem pequeno, j&aacute; que elas n&atilde;o suportam muito peso. Isso &eacute; dispens&aacute;vel.</div>
      <div style="text-align: justify;"><em><strong>Trocador</strong></em></div>
      <div style="text-align: justify;">Para o seu conforto compre um trocador apropriado para a sua altura. Isso &eacute; dispens&aacute;vel.</div>
      <div style="text-align: justify;"><em><strong>Produtos para higiene do beb&ecirc;</strong></em></div>
      <div style="text-align: justify;">Est&atilde;o relacionados apenas alguns produtos que n&atilde;o podem faltar para a higiene di&aacute;ria do seu beb&ecirc;: algod&atilde;o, cotonete, len&ccedil;os umedecidos, sabonete neutro e creme contra assaduras, de acordo com a orienta&ccedil;&atilde;o do seu pediatra.</div>
      <div style="text-align: justify;"><em><strong>Carrinho</strong></em></div>
      <div style="text-align: justify;">Existem por a&iacute; carrinhos de v&aacute;rios tipos e pre&ccedil;os. Ao comprar um carrinho, pense primeiramente na seguran&ccedil;a do beb&ecirc;. Isso n&atilde;o &eacute; essencial antes do primeiro m&ecirc;s.</div>
      <div style="text-align: justify;"><em><strong>Bab&aacute; Eletr&ocirc;nica</strong></em></div>
      <div style="text-align: justify;">Voc&ecirc; ficar&aacute; mais tranq&uuml;ila se puder ouvir cada barulho de seu beb&ecirc; de onde estiver. Muitas s&atilde;o port&aacute;teis e funcionam com pilhas. Isso &eacute; sup&eacute;rfluo.</div>
      <div style="text-align: justify;"><em><strong>Brinquedos</strong></em></div>
      <div style="text-align: justify;">Os beb&ecirc;s adoram brincar. Um m&oacute;bile com m&uacute;sica suave e brinquedinhos leves e macios s&atilde;o boas op&ccedil;&otilde;es. Tomo cuidado com os brinquedos pequenos que podem ser engolidos pelo beb&ecirc;. Isso n&atilde;o &eacute; importante antes do primeiro m&ecirc;s.</div>
      <div style="text-align: justify;">&nbsp;</div>
      <div style="text-align: justify;"><em>Lembre-se: o mais importante &eacute; a aten&ccedil;&atilde;o, o carinho e o amor. Estes ingredientes n&atilde;o podem faltar. Quando for amamentar, fa&ccedil;a desse momento um momento entre a m&atilde;e e o filho, em ambiente calmo, luz moderada, pouco barulho, sem TV e sem visitas.</em></div>
      </div>
      </div>`,
      referencias:[            
      ]
    },
    {
      id: 3,
      tipo: "Orientacao",
      titulo: "Esquema de Vacinação para a Gestante",
      conteudo: `
      <div><strong>Vacina: Antraz</strong></div>
      <div><span style="color: #000000; background-color: #ffffff;">Cuidado com essa vacina&nbsp;</span></div>
      <div>Observa&ccedil;&atilde;o: Gestantes devem ser vacinadas contra Antraz somente se os benef&iacute;cios potenciais superarem os riscos potenciais para o feto,</div>
      <div><hr /></div>
      <div><strong>Vacina: BCG</strong></div>
      <div>V&iacute;rus: Atenuado</div>
      <div>Contra indicada</div>
      <div>Observa&ccedil;&atilde;o:Nenhum efeito danoso para o feto foi observado, mesmo assim n&atilde;o &eacute; recomendada na gesta&ccedil;&atilde;o.</div>
      <div><hr /></div>
      <div><strong>Vacina: Caxumba</strong></div>
      <div>V&iacute;rus: Atenuado</div>
      <div>Contra indicada</div>
      <div>Observa&ccedil;&atilde;o: Evitar Gravidez nos 28 dias Subsequentes &agrave; vacina&ccedil;&atilde;o. Se Houver vacina&ccedil;&atilde;o accidental durante a gravidez, aconselhar sobre o risco te&oacute;rico para o feto, porem n&atilde;o &eacute; indicada para interrup&ccedil;&atilde;o da gravidez.</div>
      <div><hr /></div>
      <div><strong>Vacina: Dupla Adulto (t&eacute;tano e difetria)</strong></div>
      <div>V&iacute;rus: Tox&oacute;ide,</div>
      <div>Indicada,</div>
      <div>Observa&ccedil;&atilde;o: Indicada de rotina para todas as gr&aacute;vidas. Se a gestante j&aacute; foi previamente vacinada, administrar 1 dose de refor&ccedil;o.</div>
      <div><hr /></div>
      <div><strong>Vacina: Encefalite Japonesa</strong></div>
      <div>Cuidado,</div>
      <div>Observa&ccedil;&atilde;o: N&atilde;o deve ser administrada de rotina a gestantes. Gestantes que tiverem que viajar para &aacute;rea de risco, devem ser vacinadas, considerando os benef&iacute;cios potenciais e os poss&iacute;veis riscos.</div>
      <div><hr /></div>
      <div><strong>Vacina: Febre Amarela</strong></div>
      <div>V&iacute;rus: Atenuado,</div>
      <div>Cuidado,</div>
      <div>Observa&ccedil;&atilde;o: Risco para o feto n&atilde;o confirmado. Vacinar somente em caso de viagem inadi&aacute;vel par a zona end&ecirc;mica. Nestes casos o pequeno risco para o feto &eacute; inferior ao risco de infec&ccedil;&atilde;o pelo v&iacute;rus de febre amarela.</div>
      <div><hr /></div>
      <div><strong>Vacina: Febre Tif&oacute;ide</strong></div>
      <div>V&iacute;rus: Atenuado,</div>
      <div>Cuidado,</div>
      <div>Observa&ccedil;&atilde;o: N&atilde;o existe dados dispon&iacute;veis quanto ao uso durante a gesta&ccedil;&atilde;o.</div>
      <div><hr /></div>
      <div><strong>Vacina: Hepatite A</strong></div>
      <div>V&iacute;rus: Inativado</div>
      <div>Cuidado,</div>
      <div>Observa&ccedil;&atilde;o: Risco te&oacute;rico baixo paro o feto. Comparar o risco da vacina&ccedil;&atilde;o com o risco da gestante contrair o v&iacute;rus da hepatite A.</div>
      <div><hr /></div>
      <div><strong>Vacina: Hepatite B</strong></div>
      <div>V&iacute;rus: Recombinante,</div>
      <div>Indicada,</div>
      <div>Observa&ccedil;&atilde;o: At&eacute; o momento, n&atilde;o existem riscos relatados para o feto. Pode ser administrado tanto na gesta&ccedil;&atilde;o como na lacta&ccedil;&atilde;o. A infec&ccedil;&atilde;o materna pelo v&iacute;rus da hepatite B pode resultar em doen&ccedil;a materna grave e infec&ccedil;&atilde;o cr&ocirc;nicado feto.</div>
      <div><hr /></div>
      <div><strong>Vacina: Influenza (gripe)</strong></div>
      <div>V&iacute;rus: Inativado</div>
      <div>Indicada,</div>
      <div>Observa&ccedil;&atilde;o: Vacinar todas as gestantes que apresentem doen&ccedil;a de base que aumente o risco de complica&ccedil;&otilde;es relacionadas a gripe. Vacinar as que estar&atilde;o al&eacute;m do primeiro trimestre (14 semanas de gesta&ccedil;&atilde;o ) na &eacute;poca de surto de gripe.</div>
      <div><hr /></div>
      <div><strong>Vacina: Meningococo</strong></div>
      <div>V&iacute;rus: Inativado,</div>
      <div>Indicada,</div>
      <div>Observa&ccedil;&atilde;o: At&eacute; o momento o risco te&oacute;rico par o feto &eacute; baixo. As avalia&ccedil;&otilde;es dispon&iacute;veis t&ecirc;m mostrado que a vacina &eacute; eficaz e segura na gesta&ccedil;&atilde;o.</div>
      <div><hr /></div>
      <div><strong>Vacina: Pneumococo</strong></div>
      <div>V&iacute;rus: Inativado,</div>
      <div>Cuidado,</div>
      <div>Observa&ccedil;&atilde;o: Seguran&ccedil;a n&atilde;o &eacute; avaliada para o primeiro trimestre da gravidez. Gestantes vacinadas acidentalmente n&atilde;o tiveram conseq&uuml;&ecirc;ncia danosa para os rec&eacute;m &ndash; nascidos.</div>
      <div><hr /></div>
      <div><strong>Vacina: Poliomielite (sabin ou salk)</strong></div>
      <div>V&iacute;rus: Sabin= atenuado Salk= Inativado,</div>
      <div>Cuidado,</div>
      <div>Observa&ccedil;&atilde;o: Vacinar gestantes que necessitar de prote&ccedil;&atilde;o imediata contar a poliomielite.Evitar vacinar gestantes por risco te&oacute;rico ao feto.</div>
      <div><hr /></div>
      <div><strong>Vacina: Raiva</strong></div>
      <div>V&iacute;rus: Sabin= atenuado Salk= Inativado,</div>
      <div>Indicada,</div>
      <div>Observa&ccedil;&atilde;o: N&atilde;o existem evid&ecirc;ncias de dano fetal. Raiva &eacute; doen&ccedil;a grave, portanto a gestante exposta deve receber a vacina.</div>
      <div><hr /></div>
      <div><strong>Vacina: Raiva</strong></div>
      <div>Indicada,</div>
      <div>Observa&ccedil;&atilde;o: N&atilde;o existem evid&ecirc;ncias de dano fetal. Raiva &eacute; doen&ccedil;a grave, portanto a gestante exposta deve receber a vacina.</div>
      <div><hr /></div>
      <div><strong>Vacina: Rub&eacute;ola</strong></div>
      <div>V&iacute;rus: Atenuado,</div>
      <div>Contra indicada,</div>
      <div>Observa&ccedil;&atilde;o: Poss&iacute;vel risco fetal: n&atilde;o vacinar. N&atilde;o engravidar 4 semanas ap&oacute;s a vacina&ccedil;&atilde;o. Em vacina&ccedil;&atilde;o acidental da gestante, orientar sobre os poss&iacute;veis riscos fetais, por&eacute;m esta situa&ccedil;&atilde;o n&atilde;o &eacute; considerada como indica&ccedil;&atilde;o para interrup&ccedil;&atilde;o da gravidez.</div>
      <div><hr /></div>
      <div><strong>Vacina: Sarampo</strong></div>
      <div>V&iacute;rus: Atenuado,</div>
      <div>Contra indicada,</div>
      <div>Observa&ccedil;&atilde;o: dem a Caxumba.</div>
      <div><hr /></div>
      <div><strong>Vacina: Varicela</strong></div>
      <div>V&iacute;rus: Atenuado,</div>
      <div>Contra indicada,</div>
      <div>Observa&ccedil;&atilde;o: A gestante n&atilde;o deve ser vacinada. Risco fetal desconhecido. Deve ser menor do que o v&iacute;rus selvagem. N&atilde;o engravidar 4 semanas ap&oacute;s receber a vacina. Se a gesta&ccedil;&atilde;o ocorrer neste per&iacute;odo, n&atilde;o esta indicada a interrup&ccedil;&atilde;o da gesta&ccedil;&atilde;o. A vacina de contactantes com a gestante n&atilde;o esta contra &ndash; indicada. &Eacute; altamente recomendada a administra&ccedil;&atilde;o de imunoglobulina espec&iacute;fica humana anti &ndash; varicela &ndash; zoster ( VZIG ), na p&oacute;s &ndash; exposi&ccedil;&atilde;o.</div>
      <div><hr /></div>
      <div><strong>Vacina: Var&iacute;ola,</strong></div>
      <div>V&iacute;rus: Atenuado,</div>
      <div>Cuidado</div>        
      `,
      referencias:[            
      ]
    }
  ]

    return documentos;
  }
}
