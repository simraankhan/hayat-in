import { FiStar } from 'react-icons/fi'
import { trendingData } from '../constants/data'
import SideTemplate from './SideTemplate'
import { Button } from './ui/button'

const Trending = () => {
    return (
        <SideTemplate title='Trending'>
            {trendingData.map(({ distance, id, location, logo, rating, title }) => (
                <div key={id} className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-2'>
                        <img
                            src={logo}
                            className='size-8 rounded-md object-cover'
                            alt={title}
                        />
                        <div>
                            <p className='text-xs font-semibold'>{title}</p>
                            <span className='text-xs text-gray-500'>{distance} | {location}</span>
                        </div>
                    </div>
                    <div>
                        <Button className='bg-blue-500 text-xs h-[25px]'>Follow</Button>
                        <div className='flex justify-end items-center gap-x-1 mt-1'>
                            <p className='text-xs'>{rating}</p>
                            <FiStar fill='yellow' className='text-yellow-400' />
                        </div>
                    </div>
                </div>
            ))}
        </SideTemplate>
    )
}

export default Trending