import { Directive, HostListener } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: "[appUppercase]",
  standalone: true
})
export class UppercaseDirective {
  constructor(private readonly ngControl: NgControl) {}

  @HostListener("input", ["$event"])
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const uppercaseValue = input.value.toUpperCase();

    // Update the form control value
    this.ngControl.control?.setValue(uppercaseValue);

    // Update the input element value
    input.value = uppercaseValue;
  }
}