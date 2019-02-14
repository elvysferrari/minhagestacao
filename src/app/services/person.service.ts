import { Person } from './../models/person';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  person: Person;  
  private usersCollection: AngularFirestoreCollection<Person>;

  constructor(db: AngularFirestore) { 
    this.person = new Person();
  }

  addPessoa(pessoa: Person){

      let promise = new Promise<Person>((resolve, reject) => {
        this.usersCollection.add(pessoa).then((resultAdd)=>{
          console.log('add', resultAdd);
          pessoa.id = resultAdd.id;
          this.usersCollection.doc(pessoa.id ).update(pessoa).then((resultUp) =>{
            console.log('update', resultUp);
            resolve(pessoa)
          });
        }).catch(error => reject(false));  
      })
      return promise;
  }

  getByUserUid(uid: string): Promise<Person>{
    let promise = new Promise<Person>((resolve, reject) => {

        /* let onQueryEvent = function(result) {
            if (!result.error) {
                let index = 1;
                let keys = Object.keys(result["value"])
                let returnPessoa: Pessoa; 
                keys.forEach((key) => {
                  let pessoa = result["value"][key]            
                  if(pessoa){
                    pessoa.index = (index -1)
                    returnPessoa = pessoa;
                  }
                  //
                  if(index == keys.length){              
                    resolve(returnPessoa)
                  }else{
                    index++;
                  }
                })
            }else{
                reject(result.error)
            }
        }; */
    
        /* firebase.query(
            onQueryEvent,
            "/pessoas",
            {                    
                singleEvent: true,                 
                orderBy: {
                    type: firebase.QueryOrderByType.CHILD,
                    value: 'userUid' // mandatory when type is 'child'
                },
                range: {
                   type: firebase.QueryRangeType.EQUAL_TO,
                   value: uid
                },
                limit: {
                    type: firebase.QueryLimitType.LAST,
                    value: 1
                }
            }
        ); */
      })
  
      return promise;
  }
}
