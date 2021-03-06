/**
 * Created by KeilCarpenter on 21-Jul-17.
 */


import {Error} from './error.model';
import {EventEmitter} from "@angular/core";

export class ErrorService{
    errorOccurred = new EventEmitter<Error>();

    handleError(error: any){
        const errorData = new Error(error.title, error.error.message);
        this.errorOccurred.emit(errorData);
    }
}