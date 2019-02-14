import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { PersonService } from './person.service';
import { Person } from '../models/person';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersCollection: AngularFirestoreCollection<User>;
  private users: Observable<User[]>;
  
  userLogged: BehaviorSubject<User>;

  constructor(db: AngularFirestore, 
              public authService: AuthService,
              private personService: PersonService) {
    this.userLogged = new BehaviorSubject<User>(undefined);
   /*  this.usersCollection = db.collection<User>('users');
 
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    ); */
  }

  public getLogged(): Observable<User> {
    return this.userLogged.asObservable();
  }
/* 
  getTodos() {
  return this.users;
  }

  getTodo(id) {
    return this.usersCollection.doc<User>(id).valueChanges();
  }

  updateTodo(todo: User, id: string) {
    return this.usersCollection.doc(id).update(todo);
  }

  addTodo(todo: User) {
    return this.usersCollection.add(todo);
  }

  removeTodo(id) {
    return this.usersCollection.doc(id).delete();
  }  */

  loginUser(loginUser: User){
    let userLogged: User = new User();

    return new Promise((resolve, reject) => {
      this.authService.signinWithEmail(
            {                
              email: loginUser.email,
              password: loginUser.password                
            })
            .then(user => {
                userLogged.name = user.name;
                userLogged.email = user.email;
                userLogged.uid = user.uid;
                
                this.personService.getByUserUid(userLogged.uid).then((person: Person) =>{
                    if(person){ 
                        userLogged.person = person;
                        this.login(userLogged);
                        resolve(userLogged)
                    }else{
                        reject("Pessoa não encontrada")
                    }
                })
            })
            .catch(error => {
                reject(error)
            });
    });

    /* this.authService.signinWithEmail({email: 'elvys.ferrari@gmail.com', password: '123456'}).then((response) =>{
      console.log('login', response)
    })  */
  }

  async logout(){
    await this.authService.logOut();
    this.login(undefined);
    
  }

  public login(user: User) {
    this.userLogged.next(user);
  }

  createUser(userCreate: User): Promise<User>{
    return new Promise((resolve, reject) => {
      this.authService.createAuthUser(
          {
              email: userCreate.email,
              password: userCreate.password
          })
          .then(user => { 
              console.log('createAuthUser', user);                                   
              let newUser = new User();
              newUser.name = userCreate.name;
              newUser.email = user.email;
              newUser.uid = user.uid;

              newUser.person = new Person();

              let newPerson = new Person();
              newPerson.name = user.name
              newPerson.userUid = newUser.uid
              newPerson.email = userCreate.email                                  
              

              this.personService.addPessoa(newPerson).then((result) =>{
                console.log('personService.addPessoa', result)
                newUser.person = result;
                this.login(newUser);
                resolve(newUser);
              }).catch(error => reject(error));
              /* this.pessoaService.addPessoa(newPessoa).then(() =>{
                  
              }).catch(error => reject(error)) */
                                  
          })
          .catch(error => {
              reject(error)
          });
    });    
  }
  
  resetPassword(email: string){
    return new Promise((resolve, reject) => {
      this.authService.resetPassword(
          email
      ).then( () => {
            resolve(true)
        },
        function (errorMessage) {
          resolve(errorMessage)
        }
      );
    });   
  } 

}
