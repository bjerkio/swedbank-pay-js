import { Amount } from "../../amount";

export interface VippsReversalTransaction {
    amount: Amount;
    description: string;
    payeeReference: string;
    vatAmount: Amount;
}