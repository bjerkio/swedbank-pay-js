import { OrderItem } from "../../Services/PaymentOrder/models/OrderItem";
import { Amount } from "../amount";

export interface PaymentOrderReversalTransaction {
    amount: Amount;
    description: string;
    orderItems: OrderItem[];
    payeeReference: string;
    vatAmount: Amount;
}