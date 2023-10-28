import { formatPrice } from "@/lib/format";

interface PriceTagProps {
    price: number,
    classname?: string,
}

export default function PriceTagProps({ price, classname }: PriceTagProps) {
    return <span className={`badge ${classname}`}>{formatPrice(price)}</span>
}

