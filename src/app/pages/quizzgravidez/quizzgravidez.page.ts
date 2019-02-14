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
  @ViewChildren('checkboxes') checkboxes;

  displayResult = false;
  slideOpts = {
    effect: 'flip'
  };

  questoes: QuestaoModelo[] = [];
  respostas: RespostaModelo[] = [];
  questoesRespondidas: QuestaoRespondida[] = []; 

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
    //calcular o resultado das questoes
    let primeiraQuestao =  this.checkboxes.filter(x => x.el.id[0] == '1')
    
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
        newPrimeiraQuestao.respostas.push(resp);
      }      
    })  
    this.questoesRespondidas.push(newPrimeiraQuestao) ;
    /* primeira questao fim*/
  
    let segundaQuestao =  this.checkboxes.filter(x => x.el.id[0] == '2')
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
        newSegundaQuestao.respostas.push(resp);
      }      
    })  
    this.questoesRespondidas.push(newSegundaQuestao) ;
    /* segunda questao fim*/

    let terceiraQuestao =  this.checkboxes.filter(x => x.el.id[0] == '3')
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
        newTerceiraQuestao.respostas.push(resp);
      }      
    })  
    this.questoesRespondidas.push(newTerceiraQuestao) ;

    let quartaQuestao =  this.checkboxes.filter(x => x.el.id[0] == '4')
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
        newQuartaQuestao.respostas.push(resp);
      }      
    })  
    this.questoesRespondidas.push(newQuartaQuestao) ;

    let quintaQuestao =  this.checkboxes.filter(x => x.el.id[0] == '5')
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
        newQuintaQuestao.respostas.push(resp);
      }      
    })  
    this.questoesRespondidas.push(newQuintaQuestao) ;

    let sextaQuestao =  this.checkboxes.filter(x => x.el.id[0] == '6')
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
        newSextaQuestao.respostas.push(resp);
      }      
    })  
    this.questoesRespondidas.push(newSextaQuestao) ;

    let setimaQuestao =  this.checkboxes.filter(x => x.el.id[0] == '7')
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
        newSetimaQuestao.respostas.push(resp);
      }      
    })  
    this.questoesRespondidas.push(newSetimaQuestao) ;

    let oitavaQuestao =  this.checkboxes.filter(x => x.el.id[0] == '8')
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
        newOitavaQuestao.respostas.push(resp);
      }      
    })  
    this.questoesRespondidas.push(newOitavaQuestao) ;
   
    console.log(' this.questoesRespondidas',  this.questoesRespondidas)    

    this.displayResult = true;
    
  }

  refazerTeste(){
    this.slide.slideTo(0);
    this.displayResult = false;
  }
}
