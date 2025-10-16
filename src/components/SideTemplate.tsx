import { type ReactNode } from 'react'
import { FiChevronRight } from 'react-icons/fi';

interface SideTemplateProps {
    title?: string;
    children: ReactNode
}

const SideTemplate = ({ title, children }: SideTemplateProps) => {

    return (
        <div className='shadow-md py-2'>
            {
                title && <h1 className='flex items-center font-semibold text-sm'>
                    {title}
                    <FiChevronRight className='mt-1' />
                </h1>
            }
            <div className='flex flex-col gap-5 mt-4'>
                {children}
            </div>
        </div>
    )
}

export default SideTemplate