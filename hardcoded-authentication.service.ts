import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  
  constructor() { }

  authenticate(username,password)
  {
    console.log('before'+this.isUserLoggedIn())
    if(username==='Albert' && password==='jose')
    {
      sessionStorage.setItem('authenticaterUser',username);
     console.log('After'+this.isUserLoggedIn())
    return true;
    }
    else
    return false;

  }
  isUserLoggedIn()
  {
    let user=sessionStorage.getItem('authenticaterUser')
    console.log(user)
    return !(user===null)
  }
  logout()
  {
    sessionStorage.removeItem('authenticaterUser')
  }
}
