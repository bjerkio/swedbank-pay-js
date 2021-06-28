import { Amount } from "../amount";
import { HttpOperation } from "../httpOperation";
import { State } from "../state";

export interface AuthorizationTransaction {
    amount: Amount;
    created: string;
    description: string;
    failedActivityName: string;
    failedErrorCode: string;
    failedErrorDescription: string;
    failedReason: string;
    isOperational: boolean;
    number: number;
    operations: HttpOperation[];
    payeeReference: string;
    state: State;
    type: string;
    updated: string;
    vatAmount: Amount;
}