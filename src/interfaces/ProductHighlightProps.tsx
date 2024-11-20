
interface ProductHighlight {
    id: number;
    name: string;
    size: string;
    description: string;
    price: string;
    image: string;
    link: string;
    buttonText?: string;
}

export default interface ProductHighlightProps {
    products: ProductHighlight[];
}