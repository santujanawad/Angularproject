import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class UserService{

    set(getdatafromDatabse){
        localStorage.setItem('user',JSON.stringify(getdatafromDatabse));
    };//set method

    destroy(){
        localStorage.removeItem('user');
        
    } //destroy method

}