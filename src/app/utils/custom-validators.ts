import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

  static phoneValidator(control: AbstractControl): ValidationErrors | null {
      const validationRegex = new RegExp(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/);
      return validationRegex.test(control.value) ? null : {'phone': true};
  }
}
