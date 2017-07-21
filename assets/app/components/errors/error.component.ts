import {Component, OnInit} from "@angular/core";
import {ErrorService} from "./error.service";
/**
 * Created by KeilCarpenter on 21-Jul-17.
 */

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
    error: Error;
    display = 'none';

    constructor(private errorService: ErrorService){}
    onErrorHandled(){
        this.display = 'none';
    }

    ngOnInit(){
        this.errorService.errorOccurred.subscribe(
            (error: Error) => {
                this.error = error;
                this.display = 'block';
                console.log('errrorrrrr', this.error);
            }
        )


    }
}