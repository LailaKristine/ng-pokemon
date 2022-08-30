import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { map, Observable, of, switchMap } from 'rxjs';
import { User } from '../components/models/user.model';


const {apiUsers, apiKey} = environment;

@Injectable({
  providedIn: 'root'
})
  // Dependency Injection
export class LoginService {
  constructor(private readonly http: HttpClient) { }

  public login(username: string): Observable<User>{
    return this.checkUserName(username)
    .pipe(
      switchMap((user: User | undefined) =>{
        if(user === undefined){ //User does not exist
          return this.createUser(username)
        }
        return of(user); 
      })
      
    ) 
  }

  // Check if user exist
  private checkUserName(username: string): Observable<User | undefined> {
    return this.http.get<User[]>(`${apiUsers}?username=${username}`).pipe(
      // Rxjs operator
      map((response: User[]) => response.pop())
    )
  }
  // Create user
  private createUser(username: string): Observable<User> {
    
    const user = {
      username,
      pokemon: [],
    }
    const headers = new HttpHeaders({
      "Content-Type": "Application/json",
      "x-api-key": apiKey

    });

    return this.http.post<User>(apiUsers, user, 
      {headers})
  }
}
