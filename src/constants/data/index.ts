import { v4 as uuidv4 } from 'uuid';

import Place1 from '../../assets/place-1.jpg';
import Place2 from '../../assets/place-2.jpg';
import Place3 from '../../assets/place-3.jpg';
import Place4 from '../../assets/place-4.jpg';

import Logo1 from '../../assets/logo-1.jpg';
import Logo2 from '../../assets/logo-2.jpg';
import Logo3 from '../../assets/logo-3.jpg';
import type { Post } from '../../types';

import Person1 from '../../assets/person.webp';
import Person2 from '../../assets/person-2.jpg';
import Person3 from '../../assets/person-3.jpg';

import { FiBookmark, FiHelpCircle, FiLayout, FiSettings, FiUser, FiYoutube } from "react-icons/fi";


const carouselData = [
    { id: uuidv4(), name: "Fairmont Abu Dhabi", logo: Logo1, img: Place1 },
    { id: uuidv4(), name: "Cooper s Abu Dhabi", logo: Logo2, img: Place2 },
    { id: uuidv4(), name: "Nujum Desert Camp", logo: Logo3, img: Place3 },
    { id: uuidv4(), name: "Balcon Bar Restaurant", logo: Logo1, img: Place4 },
]

const postData: Post[] = [
    {
        id: uuidv4(),
        title: "Rotana Hotel",
        isFeaturedPost: true,
        tags: ["Enjoy daily", "Happy Hour"],
        description: "Enjoy daily Happy Hour at Café 28 with great prices on your favorite drinks. Available from 12 PM to 5 PM",
        comments: 1000,
        likes: 256,
        shares: 200,
        posted: new Date(),
        img: Place1,
        logo: Logo1,
        location: "Abu Dhabi",
        followers: 3,
    },
    {
        id: uuidv4(),
        title: "Rotana Hotel",
        tags: ["Enjoy daily", "Happy Hour"],
        description: "Enjoy daily Happy Hour at Café 28 with great prices on your favorite drinks. Available from 12 PM to 5 PM",
        comments: 1000,
        likes: 256,
        shares: 200,
        posted: new Date(),
        img: Place2,
        logo: Logo2,
        location: "Abu Dhabi",
        followers: 5,
    },
]

const tabItems: { title: string; key: string }[] = [
    { key: "DISCOVER", title: "Discover" },
    { key: "FOLLOWING", title: "Following" },
    { key: "CONNECTIONS", title: "Connections" },
]

const leftMenuItem = [
    { id: uuidv4(), title: "Videos for you", icon: FiYoutube },
    { id: uuidv4(), title: "Blogs", icon: FiLayout },
    { id: uuidv4(), title: "Saved", icon: FiBookmark },
    { id: uuidv4(), title: "Profile", icon: FiUser },
    { id: uuidv4(), title: "Enquiry", icon: FiHelpCircle },
    { id: uuidv4(), title: "Recommendation", icon: FiSettings },
]

const footerItems = [
    { id: uuidv4(), title: "About Us" },
    { id: uuidv4(), title: "Business Pro" },
    { id: uuidv4(), title: "Help center" },
    { id: uuidv4(), title: "FAQ" },
    { id: uuidv4(), title: "Career" },
    { id: uuidv4(), title: "Privacy & Terms" },
    { id: uuidv4(), title: "Language" },
]

const trendingData = [
    { id: uuidv4(), title: "Dubai Desert Safari", location: "Al Wahdha Mall", distance: "1.8 km", rating: "5.0", logo: Logo1 },
    { id: uuidv4(), title: "Balcon Bar Restaurant", location: "Al Wahdha Mall", distance: "1.8 km", rating: "5.0", logo: Logo2 },
    { id: uuidv4(), title: "Nujum Desert Camp", location: "Al Wahdha Mall", distance: "1.8 km", rating: "5.0", logo: Logo3 },
    { id: uuidv4(), title: "Dubai Desert Safari", location: "Al Wahdha Mall", distance: "1.8 km", rating: "5.0", logo: Logo1 },
    { id: uuidv4(), title: "Balcon Bar Restaurant", location: "Al Wahdha Mall", distance: "1.8 km", rating: "5.0", logo: Logo2 },
    { id: uuidv4(), title: "Nujum Desert Camp", location: "Al Wahdha Mall", distance: "1.8 km", rating: "5.0", logo: Logo3 },
]

const connectionsData = [
    { id: uuidv4(), name: "Najm Al-Barq", logo: Person1 },
    { id: uuidv4(), name: "Lina", logo: Person2 },
    { id: uuidv4(), name: "Amal Zakariya", logo: Person3 },
    { id: uuidv4(), name: "Khalid Ayman", logo: Person1 },
    { id: uuidv4(), name: "Muhamed Rayan", logo: Person2 },
]

export { carouselData, postData, leftMenuItem, footerItems, trendingData, connectionsData, tabItems };