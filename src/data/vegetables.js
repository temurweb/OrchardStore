import tomatoe from '../images/tomato.png'
import carrot from '../images/carrot.png'
import cucumber from '../images/cucumber.png'
import potato from '../images/potato.png'

const vegetables = [
    { 
        id: 5,
        name:  "Products.Vegetables.Tomato",
        image: tomatoe,
        size: "1kg",
        price: 8000,
        quantity: 4,
        class: "w-58 h-36 lg:w-72 lg:h-44 object-contain bg-amber-400 p-2 rounded-3xl"
    },
    {
        id: 6,
        name: "Products.Vegetables.Carrot_1",
        size: "1kg",
        image: carrot,
        price: 6000,
        quantity: 5,
        class: "w-58 h-36 lg:w-72 lg:h-44 object-contain bg-amber-400 p-2 rounded-3xl"
    },
    {
        id: 7,
        name: "Products.Vegetables.Cucumber",
        size: "1kg",
        image: cucumber,
        price: 7990,
        quantity: 7,
        class: "w-58 h-36 lg:w-72 lg:h-44 object-contain bg-amber-400 p-2 rounded-3xl"
    },
    {
        id: 8,
        name:"Products.Vegetables.Potato",
        size: "1kg",
        image: potato,
        price: 4550, 
        quantity: 8,
        class: "w-58 h-36 lg:w-72 lg:h-44 object-contain bg-amber-400 p-2 rounded-3xl   "
    }
]

export default vegetables