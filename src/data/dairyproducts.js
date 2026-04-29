// imported images
import Milk from '../images/Milk.png'
import sour_cream from '../images/sour_cream.png'
import orchard_yogurt from '../images/orchard_yogurt.png'

const dairyProducts = [
    {
        id: 1,
        name: "Fresh Milk",
        image: Milk,
        quantity: 1,
        price: 13390,
        size: "1L",
        class: "w-58 h-36 object-contain bg-green-400 p-2 rounded-3xl"
    },
    {
        id: 2,
        name: "Sour Cream",
        price: 29290,
        image: sour_cream,
        quantity: 2,
        size: "100g",
        pricePerG: 2929,
        class: "w-58 h-36 object-contain bg-green-400 p-2 rounded-3xl"
    },
    {
        id: 3,
        name: "Orchard Yog.",
        image: orchard_yogurt,
        quantity: 3,
        price: 3990,
        size: "95g",
        class: "w-58 h-36 object-contain bg-green-400 p-2 rounded-3xl"
    }
]


export default dairyProducts