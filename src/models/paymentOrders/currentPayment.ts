import { Amount } from "../generics/amount";
import { Currency } from "../currency";
import { Language } from "../language";
import { Operation } from "../enums/operation";
import { PaymentInstrument } from "../enums/paymentInstrument";
import { CancellationListResponse } from "../paymentInstruments/transactions/cancellationListResponse";
import { CaptureListResponse } from "../paymentInstruments/transactions/captureListResponse";
import { PaymentIntent } from "../paymentInstruments/paymentIntent";
import { PriceListResponse } from "../paymentInstruments/priceListResponse";
import { ReversalListResponse } from "../paymentInstruments/transactions/reversalListResponse";
import { TransactionListResponse } from "../paymentInstruments/transactions/transactionListResponse";
import { State } from "../enums/state";
import { Urls } from "../generics/urls";
import { PaymentAuthorizationResponse } from "./paymentAuthorizationResponse";
import { PaymentOrderPayeeInfo } from "./paymentOrderPayeeInfo";
import { SaleListResponse } from "./saleListResponse";

export interface CurrentPayment {
    amount: Amount;
    authorizations: PaymentAuthorizationResponse;
    cancellations: CancellationListResponse;
    captures: CaptureListResponse;
    created: string;
    currency: Currency;
    description: string;
    instrument: PaymentInstrument;
    intent: PaymentIntent;
    language: Language;
    number: number;
    operation: Operation;
    payeeInfo: PaymentOrderPayeeInfo;
    payerReference: string;
    paymentToken: string;
    prices: PriceListResponse;
    reversals: ReversalListResponse;
    sales: SaleListResponse;
    state: State;
    transactions: TransactionListResponse;
    updated: string;
    urls: Urls;
    userAgent: string;
}