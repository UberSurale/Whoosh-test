import calcImageSrc from "../assets/images/calc-icon.svg";
import paperworkImageSrc from "../assets/images/paperwork-icon.svg";
import cardImageSrc from "../assets/images/card-icon.svg";

const servicesList = [
    {
        id: 0,
        title: "Online calculation",
        img: calcImageSrc,
        description: "Instant calculation of the cost in the order form, the price is updated in the process of filling out the form"
    },
    {
        id: 1,
        title: "Minimum paperwork",
        img: paperworkImageSrc,
        description: "You can place an order for courier or freight delivery without registration and contract."
    },
    {
        id: 2,
        title: "Convenient payment",
        img: cardImageSrc,
        description: "You can pay for delivery by card or in cash at any of the order addresses. For legal entities non-cash is available."
    }
]

export default servicesList;