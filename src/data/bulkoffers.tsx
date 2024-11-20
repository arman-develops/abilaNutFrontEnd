
import fourPack from '../assets/4pack.jpeg';
import sixPack from '../assets/6pack.jpg';
import tenPack from '../assets/10pack.jpeg';

const bulkOffers = [
    {
      id: 1,
      title: "Family Pack - 4 x 800g Jars",
      description: "Perfect for families or peanut butter lovers. Buy more, save more!",
      quantity: 4,
      discount: "20% Off",
      price: "2800",
      image: fourPack,
      link: "/promo/family-pack",
    },
    {
      id: 2,
      title: "Office Pack - 6 x 400g Jars",
      description: "Share with coworkers or stock up your pantry with this pack!",
      quantity: 6,
      discount: "25% Off",
      price: "2000",
      image: sixPack,
      link: "/promo/office-pack",
    },
    {
      id: 3,
      title: "Party Pack - 10 x 250g Jars",
      description: "Perfect for parties and gatherings. Get the best deal per jar!",
      quantity: 10,
      discount: "30% Off",
      price: "2000",
      image: tenPack,
      link: "/promo/party-pack",
    },
];

  export default bulkOffers;