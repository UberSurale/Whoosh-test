import carSwitchImg from "../assets/images/car-icon.svg";
import onfootSwitchImg from "../assets/images/On_foot.svg";
import truckSwitchImg from "../assets/images/truck-icon.svg";

const switchList = [
    {
        id: 0,
        img: onfootSwitchImg,
        description: "up to 10lb"
    },
    {
        id: 1,
        img: carSwitchImg,
        description: "up to 130lb"
    },
    {
        id: 2,
        img: truckSwitchImg,
        description: "over 130lb"
    }
]

export default switchList;