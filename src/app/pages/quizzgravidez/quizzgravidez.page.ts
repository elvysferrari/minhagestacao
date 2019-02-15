import { QuestaoRespondida } from './../../models/questao-respondida';
import { QuestaoModelo } from './../../models/questaoModelo';
import { QuizzgravidezService } from './../../services/quizzgravidez.service';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { RespostaModelo } from 'src/app/models/respostaModelo';

@Component({
  selector: 'app-quizzgravidez',
  templateUrl: './quizzgravidez.page.html',
  styleUrls: ['./quizzgravidez.page.scss'],
})
export class QuizzgravidezPage implements OnInit {
  @ViewChild('slide') slide;
  /* @ViewChildren('checkboxes') checkboxes; */
  @ViewChildren('radios') radios;



  displayResult = false;
  slideOpts = {
    effect: 'flip'
  };

  questoes: QuestaoModelo[] = [];
  respostas: RespostaModelo[] = [];
  questoesRespondidas: QuestaoRespondida[] = []; 
  
  resultado: number;

  constructor(private questoesService: QuizzgravidezService) { }

  ngOnInit() {
    this.questoes = this.questoesService.getQuizzGravidez();  
    this.questoes.forEach((q: QuestaoModelo) => {
      q.respostas.forEach((r: RespostaModelo) => {
        this.respostas.push(r);
      })
    })  
  }

  nextSlide(){
    this.slide.slideNext();    
  }
  
  backSlide(){
    this.slide.slidePrev();
  }

  sliderEnd(evt){
    //fazer pergunta pra colocar o email;

  }

  sendEmail(){
    
  }
   
  verResultado(){
    
    let pRelevancia: number = 0;
    let sRelevancia: number = 0;
    let tRelevancia: number = 0;
    let qRelevancia: number = 0;
    let qqRelevancia: number = 0;
    let seRelevancia: number = 0;
    let sesRelevancia: number = 0;
    let oRelevancia: number = 0;

    let porcentagem: number = 0;

    let primeiraQuestao =  this.radios.filter(x => x.el.id[0] == '1')    
    let newPrimeiraQuestao = new QuestaoRespondida();
    newPrimeiraQuestao.emailPessoa = "elvys@gmail.com";
    newPrimeiraQuestao.nomePessoa ="elvys"
    newPrimeiraQuestao.questaoModelo = this.questoes.find(x => x.id == 1);
    newPrimeiraQuestao.respostas = [];

    
    primeiraQuestao.forEach((chk) => {
      if(chk.checked == true){
        let index = chk.el.id.indexOf("_");      
        let id = chk.el.id.slice(index + 1, chk.el.id.length);        
        let resp = this.respostas.find(x => x.id == Number(id));
        pRelevancia = pRelevancia + resp.relevancia;
        newPrimeiraQuestao.respostas.push(resp);
      }      
    })  
    newPrimeiraQuestao.relevancia = (pRelevancia);
    this.questoesRespondidas.push(newPrimeiraQuestao) ;

  
    let segundaQuestao =  this.radios.filter(x => x.el.id[0] == '2')
    let newSegundaQuestao = new QuestaoRespondida();
    newSegundaQuestao.emailPessoa = "elvys@gmail.com";
    newSegundaQuestao.nomePessoa ="elvys"
    newSegundaQuestao.questaoModelo = this.questoes.find(x => x.id == 2);
    newSegundaQuestao.respostas = [];

    segundaQuestao.forEach((chk) => {
      if(chk.checked == true){
        let index = chk.el.id.indexOf("_");      
        let id = chk.el.id.slice(index + 1, chk.el.id.length);        
        let resp = this.respostas.find(x => x.id == Number(id));
        sRelevancia = sRelevancia + resp.relevancia;
        newSegundaQuestao.respostas.push(resp);
      }      
    })  
    newSegundaQuestao.relevancia = (sRelevancia);
    this.questoesRespondidas.push(newSegundaQuestao) ;
    
    if(sRelevancia == 10){
      porcentagem = porcentagem + 30;
    }else if(sRelevancia > 10){
      porcentagem = porcentagem + 40;
    }

    let terceiraQuestao =  this.radios.filter(x => x.el.id[0] == '3')
    let newTerceiraQuestao = new QuestaoRespondida();
    newTerceiraQuestao.emailPessoa = "elvys@gmail.com";
    newTerceiraQuestao.nomePessoa ="elvys"
    newTerceiraQuestao.questaoModelo = this.questoes.find(x => x.id == 3);
    newTerceiraQuestao.respostas = [];

    terceiraQuestao.forEach((chk) => {
      if(chk.checked == true){
        let index = chk.el.id.indexOf("_");      
        let id = chk.el.id.slice(index + 1, chk.el.id.length);        
        let resp = this.respostas.find(x => x.id == Number(id));
        tRelevancia = tRelevancia + resp.relevancia;
        newTerceiraQuestao.respostas.push(resp);
      }      
    })  
    newTerceiraQuestao.relevancia = (tRelevancia);
    this.questoesRespondidas.push(newTerceiraQuestao) ;

    if(tRelevancia == 10){
      porcentagem = porcentagem + 20;
    }else if(tRelevancia > 10){
      porcentagem = porcentagem + 40;
    }

    let quartaQuestao =  this.radios.filter(x => x.el.id[0] == '4')
    let newQuartaQuestao = new QuestaoRespondida();
    newQuartaQuestao.emailPessoa = "elvys@gmail.com";
    newQuartaQuestao.nomePessoa ="elvys"
    newQuartaQuestao.questaoModelo = this.questoes.find(x => x.id == 4);
    newQuartaQuestao.respostas = [];

    quartaQuestao.forEach((chk) => {
      if(chk.checked == true){
        let index = chk.el.id.indexOf("_");      
        let id = chk.el.id.slice(index + 1, chk.el.id.length);        
        let resp = this.respostas.find(x => x.id == Number(id));
        qRelevancia = qRelevancia + resp.relevancia;
        newQuartaQuestao.respostas.push(resp);
      }      
    })  
    newQuartaQuestao.relevancia = (qRelevancia);
    this.questoesRespondidas.push(newQuartaQuestao) ;

    if(qRelevancia == 5){
      porcentagem = porcentagem + 10;
    }else if(qRelevancia >= 10){
      porcentagem = porcentagem + 30;
    }

    let quintaQuestao =  this.radios.filter(x => x.el.id[0] == '5')
    let newQuintaQuestao = new QuestaoRespondida();
    newQuintaQuestao.emailPessoa = "elvys@gmail.com";
    newQuintaQuestao.nomePessoa ="elvys"
    newQuintaQuestao.questaoModelo = this.questoes.find(x => x.id == 5);
    newQuintaQuestao.respostas = [];

    quintaQuestao.forEach((chk) => {
      if(chk.checked == true){
        let index = chk.el.id.indexOf("_");      
        let id = chk.el.id.slice(index + 1, chk.el.id.length);        
        let resp = this.respostas.find(x => x.id == Number(id));
        qqRelevancia = qqRelevancia + resp.relevancia;
        newQuintaQuestao.respostas.push(resp);
      }      
    })  
    newQuintaQuestao.relevancia = (qqRelevancia);
    this.questoesRespondidas.push(newQuintaQuestao) ;

    if(qqRelevancia == 5){
      porcentagem = porcentagem + 10;
    }else if(qqRelevancia >= 10){
      porcentagem = porcentagem + 30;
    }

    let sextaQuestao =  this.radios.filter(x => x.el.id[0] == '6')
    let newSextaQuestao = new QuestaoRespondida();
    newSextaQuestao.emailPessoa = "elvys@gmail.com";
    newSextaQuestao.nomePessoa ="elvys"
    newSextaQuestao.questaoModelo = this.questoes.find(x => x.id == 6);
    newSextaQuestao.respostas = [];

    sextaQuestao.forEach((chk) => {
      if(chk.checked == true){
        let index = chk.el.id.indexOf("_");      
        let id = chk.el.id.slice(index + 1, chk.el.id.length);        
        let resp = this.respostas.find(x => x.id == Number(id));
        seRelevancia = seRelevancia + resp.relevancia;
        newSextaQuestao.respostas.push(resp);
      }      
    })  
    newSextaQuestao.relevancia = (seRelevancia);
    this.questoesRespondidas.push(newSextaQuestao) ;

    if(seRelevancia == 5){
      porcentagem = porcentagem + 10;
    }else if(seRelevancia == 10){
      porcentagem = porcentagem + 20;
    }else if(seRelevancia > 10){
      porcentagem = porcentagem + 30;
    }

    let setimaQuestao =  this.radios.filter(x => x.el.id[0] == '7')
    let newSetimaQuestao = new QuestaoRespondida();
    newSetimaQuestao.emailPessoa = "elvys@gmail.com";
    newSetimaQuestao.nomePessoa ="elvys"
    newSetimaQuestao.questaoModelo = this.questoes.find(x => x.id == 7);
    newSetimaQuestao.respostas = [];

    setimaQuestao.forEach((chk) => {
      if(chk.checked == true){
        let index = chk.el.id.indexOf("_");      
        let id = chk.el.id.slice(index + 1, chk.el.id.length);        
        let resp = this.respostas.find(x => x.id == Number(id));
        sesRelevancia = sesRelevancia + resp.relevancia;
        newSetimaQuestao.respostas.push(resp);
      }      
    })  
    newSetimaQuestao.relevancia = (sesRelevancia);
    this.questoesRespondidas.push(newSetimaQuestao) ;

    if(sesRelevancia == 5){
      porcentagem = porcentagem + 10;
    }else if(sesRelevancia == 10){
      porcentagem = porcentagem + 20;
    }else if(sesRelevancia > 10){
      porcentagem = porcentagem + 30;
    }
    let oitavaQuestao =  this.radios.filter(x => x.el.id[0] == '8')
    let newOitavaQuestao = new QuestaoRespondida();
    newOitavaQuestao.emailPessoa = "elvys@gmail.com";
    newOitavaQuestao.nomePessoa ="elvys"
    newOitavaQuestao.questaoModelo = this.questoes.find(x => x.id == 8);
    newOitavaQuestao.respostas = [];

    oitavaQuestao.forEach((chk) => {
      if(chk.checked == true){
        let index = chk.el.id.indexOf("_");      
        let id = chk.el.id.slice(index + 1, chk.el.id.length);        
        let resp = this.respostas.find(x => x.id == Number(id));
        oRelevancia = oRelevancia + resp.relevancia;
        newOitavaQuestao.respostas.push(resp);
      }      
    })  
    newOitavaQuestao.relevancia = (oRelevancia);
    this.questoesRespondidas.push(newOitavaQuestao) ;
    
    if(oRelevancia == 5){
      porcentagem = porcentagem + 10;
    }else if(oRelevancia == 10){
      porcentagem = porcentagem + 20;
    }else if(oRelevancia > 10){
      porcentagem = porcentagem + 30;
    }

    if(pRelevancia >= 20){
      if(porcentagem > 60){
        porcentagem = Math.floor((Math.random() * 35) + 42);
      }else{
        porcentagem = Math.floor((Math.random() * 7) + 12);        
      }
      
    }else if(pRelevancia >= 10){
      if(porcentagem > 60){
        porcentagem = Math.floor((Math.random() * 60) + 51);
      }else{
        porcentagem = Math.floor((Math.random() * 14) + 21);   
      }
      
    }

    let totalRelevancia: number[] = [];
    this.questoesRespondidas.forEach((o) =>{
      if(o.questaoModelo.id != 1){
        totalRelevancia.push(o.relevancia);
      }
    })
 
    if(porcentagem > 100){
      this.resultado = porcentagem / 2;
    }else if(porcentagem > 200){
      this.resultado = porcentagem / 2.5;
    }else{
      this.resultado = porcentagem;
    }
    
    this.displayResult = true;
    
  }

  refazerTeste(){
    this.resultado = 0;
    this.questoesRespondidas = [];
    this.radios.forEach((radio) => {
      radio.checked = false;
    })
    this.slide.slideTo(0);
    this.displayResult = false;
  }


}
