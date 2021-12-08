import { AbstractControl, ValidationErrors } from "@angular/forms";
import { debounceTime } from 'rxjs/operators';
import { of } from "rxjs";
import { Observable } from "rxjs";
import { distinctUntilChanged, map, switchMapTo, take, tap } from "rxjs/operators";
import { AuthService } from "../auth.service";

export class ValidateUsername {
    static createValidator(http: AuthService) {
        return (control: AbstractControl): Boolean => {
            if (http.checkUsernameExists(control)) {
                return true;
            } else {
                return false;
            }
        };
    }
}