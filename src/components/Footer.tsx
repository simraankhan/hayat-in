import { footerItems } from '../constants/data'

const Footer = () => {
    return (
        <div className='grid grid-cols-3 gap-2 border-t border-t-gray-400 pt-5'>
            {footerItems.map(item => (
                <div key={item.id} className='text-xs text-gray-500'>
                    {item.title}
                </div>
            ))}
        </div>
    )
}

export default Footer