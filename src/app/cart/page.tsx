import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions"
import { formatPrice } from "@/lib/format";


export const metadata = {
    title: "Your cart - Flowmazon"
};

export default async function CartPage() {
    const cart = await getCart();

    return (
        <div>
            <h1 className="text-3xl text-bold mb-6">Shopping Cart</h1>
            {cart?.items.map(i => (
                <CartEntry cartItem={i} key={i.id} setProductQuantity={setProductQuantity} />
            ))}
            {!cart?.items.length && <p>Your cart is empty.</p>}
            <div className="flex flex-col items-end sm:items-center">
                <p className="mb-3 font-bold">Total: {formatPrice(cart?.subtotal || 0)}</p>
                <button className="btn btn-primary sm:w-[200px]">Checkout</button>
            </div>
        </div>
    )
}