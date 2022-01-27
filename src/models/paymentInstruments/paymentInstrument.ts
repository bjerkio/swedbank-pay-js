import { PayeeInfo } from "../../Services/PaymentOrder/models/PayeeInfo";
import { Amount } from "../generics/amount";
import { Currency } from "../currency";
import { Identifiable } from "../generics/identifiable";
import { Language } from "../language";
import { MetaData } from "../generics/MetaData-resource";
import { Operation } from "../enums/operation";
import { State } from "../enums/state";
import { Urls } from "../generics/urls";
import { CancellationListResponse } from "./transactions/cancellationListResponse";
import { CaptureListResponse } from "./transactions/captureListResponse";
import { PaymentIntent } from "./paymentIntent";
import { PriceListResponse } from "./priceListResponse";
import { ReversalListResponse } from "./transactions/reversalListResponse";
import { TransactionListResponse } from "./transactions/transactionListResponse";

export interface PaymentInstrument extends Identifiable {
    amount: Amount;
    cancellations: CancellationListResponse;
    captures: CaptureListResponse;
    created: string;
    updated: string;
    currency: Currency;
    description: string;
    instrument: PaymentInstrument;
    intent: PaymentIntent;
    language: Language;
    number: number;
    operation: Operation;
    payeeInfo: PayeeInfo;
    payerReference: string;
    initiatingSystemUserAgent: string;
    prices: PriceListResponse;
    remainingCancellationAmount: Amount;
    remainingCaptureAmount: Amount;
    remainingReversalAmount: Amount;
    state: State;
    transactions: TransactionListResponse;
    urls: Urls;
    userAgent: string;
    vatAmount: Amount;
    reversals: ReversalListResponse;
    metadata: MetaData;
}