import { ICartProduct } from "../store/cartStore";

export default function totalPrice(carts: ICartProduct[]): number {
    return carts.reduce((acc, elem)=>( acc + +elem.price * elem.amount), 0);
}