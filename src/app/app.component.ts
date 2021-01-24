import { Component } from "@angular/core";
import { Braintree, BrainTreeOptions } from "nativescript-braintree";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    public test() {
        const opts: BrainTreeOptions = {
            amount: "10",
            collectDeviceData: false,
            requestThreeDSecureVerification: false,
        };
        const braintree = new Braintree();
    }
 }
