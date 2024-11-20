import PeanutProduct from "@/interfaces/PeanutProduct";
import image1 from '../assets/250g.jpg'
import image2 from '../assets/400g.jpeg'
import image3 from '../assets/800g.jpg'

const products: PeanutProduct[] = [
    { id: 1, name: "Creamy Delight Peanut Butter", size: "250g", price: 400, image: image1 },
    { id: 2, name: "Creamy Delight Peanut Butter", size: "400g", price: 600, image: image2 },
    { id: 3, name: "Creamy Delight Peanut Butter", size: "800g", price: 800, image: image3 },
]

export default products;