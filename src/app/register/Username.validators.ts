import { AbstractControl, ValidationErrors } from '@angular/forms';
export class UsernameValidators{
    static cannotcontainSpace(control:AbstractControl):ValidationErrors | null {
         if((control.value as string).indexOf(" ") >=0){
             return {cannotcontainSpace : true}
         }else {
             return null;
         }
     }
 }