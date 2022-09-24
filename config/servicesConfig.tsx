import { StaticImageData } from "next/image";
import UserExperience from '../public/assets/UserExperience.png'
import Networking from '../public/assets/Networking.png'
import Innovation from '../public/assets/Innovation.png'
export interface ServiceConfig {
    title: string,
    image: StaticImageData | string
    desc: string
}

const desc = 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'

export default [
    {
        title: 'Experience',
        desc,
        image: UserExperience
    },
    {
        title: 'Marketing Goals',
        desc,
        image: Networking
    },
    {
        title: 'Targetting Vission',
        desc,
        image: Innovation
    },
] as ServiceConfig[]


