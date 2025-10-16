import SideTemplate from './SideTemplate'
import { Button } from './ui/button'
import { FiX } from 'react-icons/fi'
import AppLogo from '../assets/logo.png';
import AppDownloadInfoImg from "../assets/app-download-info.png";

const AppDowload = () => {
    return (
        <SideTemplate>
            <div className='flex items-center justify-end'>
                <Button variant={"ghost"}>
                    <FiX />
                </Button>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img
                    src={AppLogo}
                    alt='App Logo'
                    className='size-10 rounded-md object-cover'
                />
                <h1 className='font-semibold'>Download Hayat In App</h1>
            </div>
            <img
                src={AppDownloadInfoImg}
                alt='App Download Info'
                className='h-[100px] w-[350px] object-contain'
            />
        </SideTemplate>
    )
}

export default AppDowload