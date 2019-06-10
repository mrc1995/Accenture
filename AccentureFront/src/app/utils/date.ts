import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class initDate {
    initDate(param: string){
        let date = new Date();
        let day;
        let year = date.getFullYear();
        let month = date.getMonth() < 10 ? "0" + (date.getMonth() + 1): date.getMonth();
        if(param === 'dia'){
            day = date.getDate() < 10 ? "0" + (date.getDate() - 1) : (date.getDate() - 1);
        }else{
            day = date.getDate() < 10 ? "0"+date.getDate() : date.getDate();
        }
        return year + "-" + month + "-" + day;
    }
}