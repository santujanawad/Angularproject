import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn:'root'
})
export class MyFireService{
    
    getUserFromDatabse(uid){
        const ref=firebase.database().ref('users/'+uid);
        return ref.once('value').then(snapshot=> snapshot.val());
    }

}