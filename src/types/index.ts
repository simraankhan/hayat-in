export interface Post {
    id: string;
    title: string;
    description: string;
    likes: number;
    comments: number;
    shares: number;
    tags?: string[];
    posted: Date;
    isFeaturedPost?: boolean;
    img: string;
    logo: string;
    location: string;
    followers: number;
}