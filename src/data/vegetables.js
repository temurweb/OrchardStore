import tomatoe from '../images/tomato.png'
import carrot from '../images/carrot.png'

const vegetables = [
    { 
        id: 4,
        name:  "Pink Tomatoes",
        image: tomatoe,
        size: "1kg",
        price: 8000,
        quantity: 4,
        class: "w-58 h-36 lg:w-72 lg:h-44 object-contain bg-amber-400 p-2 rounded-3xl"
    },
    {
        id: 5,
        name: "Fresh Carrot",
        size: "1kg",
        image: carrot,
        price: 6000,
        quantity: 5,
        class: "w-58 h-36 lg:w-72 lg:h-44 object-contain bg-amber-400 p-2 rounded-3xl"
    }
]

export default vegetables