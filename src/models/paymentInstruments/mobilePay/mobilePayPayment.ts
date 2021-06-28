import { Identifiable } from "../../identifiable";
import { PaymentInstrument } from "../paymentInstrument";
import { MobilePayPaymentAuthorizationListResponse } from "./mobilePayPaymentAuthorizationListResponse";

export interface MobilePayPayment extends Identifiable, PaymentInstrument {
    authorizations: MobilePayPaymentAuthorizationListResponse;
}