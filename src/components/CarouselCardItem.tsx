interface CarouselCardItemProps {
    img: string;
    logo: string;
    name: string;
}

const CarouselCardItem = ({ img, logo, name }: CarouselCardItemProps) => {

    return (
        <div className='relative'>
            <div
                className="bg-[#0000008f] absolute size-full rounded-md"
            />
            <img
                src={img}
                className='w-full h-[300px] object-cover rounded-md'
            />
            <div className='absolute flex items-center gap-x-3 bottom-2 px-3'>
                <img
                    src={logo}
                    className="size-9 rounded-full object-cover"
                />
                <p className="text-gray-200 text-sm">{name}</p>
            </div>
        </div>
    )
}

export default CarouselCardItem