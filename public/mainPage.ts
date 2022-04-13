import {UserCRUD} from "./UserCRUD.js";

import {ImainPage} from "./mainButtonsInterface";
 
const DateTimeFormatter = 
    (target:Object, methodName: string, descriptor: PropertyDescriptor) => 
    {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any) {
            
            const result = originalMethod.apply(this, args);
            let dateContainer = document.getElementById("Date")! as HTMLHeadElement;
            dateContainer.innerHTML += `${args[0].toLocaleString('en-US')}`;
            return result;
          };
        
          return descriptor;
    } 

 class MainPage implements ImainPage
 {
    Btn: HTMLButtonElement;
    userCRUD: UserCRUD;
    AddBtn: HTMLButtonElement;
    date: Date = new Date();

    constructor()
    {
        this.Btn = document.querySelector(".btn")!;
        this.userCRUD = new UserCRUD();
        this.Btn.addEventListener('click',() => this.load());
        
    }
}