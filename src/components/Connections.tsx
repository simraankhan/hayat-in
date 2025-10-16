import SideTemplate from './SideTemplate'
import { connectionsData } from '../constants/data'
import { Button } from './ui/button'

const Connections = () => {
    return (
        <SideTemplate title='Connections'>
            {connectionsData.map(({ id, logo, name }) => (
                <div key={id} className='flex items-center'>
                    <div className='flex items-center gap-x-2 flex-1'>
                        <img
                            src={logo}
                            className='size-8 rounded-full'
                            alt={name}
                        />
                        <h1 className='text-xs font-semibold'>{name}</h1>
                    </div>
                    <Button className='bg-blue-900 text-xs h-[25px]'>Connect</Button>
                </div>
            ))}
        </SideTemplate>
    )
}

export default Connections