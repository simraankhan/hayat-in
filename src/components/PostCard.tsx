import type { Post } from "../types"
import { Button } from "./ui/button";
import { FiHeart, FiMessageCircle, FiMoreVertical, FiSend } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa6";
import { formatNumber, timeAgoShort } from "../lib/utils";

const Separator = () => (
    <div className="border-r border-r-gray-500 h-[20px]" />
)

const RenderBtns = (props: { likes: number; shares: number; comments: number; }) => {
    const { comments, likes, shares, } = props;


    return (
        <div className="flex items-center justify-between px-3 mt-3">
            <div className="flex items-center justify-evenly">
                <div className="flex items-center gap-x-2 pr-3">
                    <FiHeart fill="red" className="text-red-600" fontSize={25} />
                    <span className="text-gray-500 text-xs sm:text-sm">{formatNumber(likes)}</span>
                    <Separator />
                </div>
                <div className="flex items-center gap-x-2 pr-3">
                    <FiMessageCircle fontSize={25} className="text-gray-800" />
                    <span className="text-gray-500 text-xs sm:text-sm">{formatNumber(comments)}</span>
                    <Separator />
                </div>
                <div className="flex items-center gap-x-2">
                    <FiSend fontSize={25} className="text-gray-800" />
                    <span className="text-gray-500 text-xs sm:text-sm">{formatNumber(shares)}</span>
                </div>
            </div>
            <Button variant="secondary">
                <FaBookmark fontSize={25} />
            </Button>
        </div>
    )
}

const PostCard = (props: Post) => {
    const { title, logo, img, isFeaturedPost, comments, description, likes, posted, shares, tags, followers, location } = props;

    return (
        <div>
            <div className="flex justify-between">
                <div className="flex gap-x-3 items-center">
                    <img
                        src={logo}
                        alt="Post Logo"
                        className="size-9 rounded-md"
                    />
                    <div>
                        <h1 className="font-semibold text-xs sm:text-md">{title}</h1>
                        <span className="text-gray-500 text-xs sm:text-sm">
                            {isFeaturedPost ? "Featured" : location + " | " + followers}
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-x-3">
                    <Button className="text-blue-500 text-xs font-normal cursor-pointer" variant="secondary">Follow</Button>
                    <Button variant="secondary">
                        <FiMoreVertical />
                    </Button>
                </div>
            </div>
            <img
                src={img}
                className="mt-3 w-full h-[250px] object-cover object-center"
            />
            <RenderBtns
                comments={comments}
                likes={likes}
                shares={shares}
            />
            <div className="px-3 mt-3">
                <p className="text-left text-gray-800 text-xs sm:text-sm">{description}</p>
            </div>
            {tags && tags?.length && (
                <div className="mt-3 px-3 text-xs sm:text-sm">
                    {tags.map((tag, index) => <span key={`${tag}${index}`}>#{tag}{" "}</span>)}
                </div>
            )}
            <div className="mt-3 px-3 mb-5 text-xs sm:text-sm">
                {timeAgoShort(posted)}{" "}ago
            </div>
        </div>
    )
}




export default PostCard;

