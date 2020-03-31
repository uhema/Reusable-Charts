import { AbstractControl} from '@angular/forms';
export class CustomValidator {
    static emailDomain(domainName : string){
        return(control: AbstractControl): {[key: string]: any} | null => {
            const email: string = control.value;
            const domain: string = email.substring(email.lastIndexOf('@') + 1);
            if(email === '' ||domain.toLowerCase() === domainName.toLocaleLowerCase()){
              return null;
      
                } else{
                  return {'emailDomain': true};
                }
        };
       }

}