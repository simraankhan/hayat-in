
import PersonImg from '../assets/person.webp';
import AppNameImg from '../assets/app-name.png';
import { FiHome, FiTag, FiGrid, FiBarChart2, FiPlusSquare, FiMessageSquare, FiBell, FiMenu } from "react-icons/fi";
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"

const NavItem = () => (
  <>
    <FiHome fill='black' className='text-white' />
    <FiTag
      className='rotate-90'
    />
    <FiGrid />
    <FiBarChart2 />
  </>
)

const HeaderActions = () => (
  <>
    <FiPlusSquare />
    <FiMessageSquare />
    <div className='relative'>
      <FiBell />
      <div className='size-3 rounded-full bg-red-600 text-white flex items-center justify-center absolute -right-1 -top-1'>
        <span className='text-[8px]'>6</span>
      </div>
    </div>
    <div className='size-6 rounded-full bg-gray-700'>
      <img
        src={PersonImg}
        alt='User'
        className='object-contain'
      />
    </div>
  </>
)

const Header = () => {
  return (
    <nav>

      <div className="flex justify-between items-center py-2 px-3 shadow-md">
        <div className='sm:hidden'>
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button variant="link">
                <FiMenu />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="flex flex-col items-center justify-between gap-5 bg-white px-5 py-3 w-1/2!">
              <DrawerHeader>
                <DrawerClose asChild>
                  <Button variant="outline">
                    Close
                  </Button>
                </DrawerClose>
              </DrawerHeader>
              <NavItem />
            </DrawerContent>
          </Drawer>
        </div>
        <img
          src={AppNameImg}
          alt="Hayat"
          className='h-[36px]'
        />
        <div className='hidden sm:flex items-center justify-center gap-x-30 flex-1'>
          <NavItem />
        </div>


        <div className='sm:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link">
                <div className='size-6 rounded-full bg-gray-700'>
                  <img
                    src={PersonImg}
                    alt='User'
                    className='object-contain'
                  />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-4 bg-white">
              <Button
                variant="secondary"
                className='bg-gray-200 font-normal'
              >
                Register Your Business
              </Button>
              <div className='flex items-center justify-between px-3'>
                <FiPlusSquare />
                <FiMessageSquare />
                <div className='relative'>
                  <FiBell />
                  <div className='size-3 rounded-full bg-red-600 text-white flex items-center justify-center absolute -right-1 -top-1'>
                    <span className='text-[8px]'>6</span>
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button
          variant="secondary"
          className='bg-gray-200 font-normal hidden sm:block mr-3'
        >
          Register Your Business
        </Button>
        <div className='hidden sm:flex items-center gap-x-4 bg-gray-200 py-2 px-3 rounded-sm'>
          <HeaderActions />
        </div>
      </div>
    </nav>
  )
}

export default Header;