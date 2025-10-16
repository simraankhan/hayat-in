import Header from "./components/Header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { carouselData, postData, tabItems } from "./constants/data";
import CarouselCardItem from "./components/CarouselCardItem";
import TabBar from "./components/TabBar";
import PostCard from "./components/PostCard";
import Search from "./components/Search";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { Button } from "./components/ui/button";
import { FiChevronRight } from "react-icons/fi";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Trending from "./components/Trending";
import Connections from "./components/Connections";
import AppDowload from "./components/AppDowload";



const LeftMenu = () => (
  <>
    <div className="flex flex-col gap-5">
      <section>
        <Search />
      </section>
      <nav>
        <Menu />
      </nav>
    </div>
    <footer>
      <Footer />
    </footer>
  </>
)

const App = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12 h-screen mt-10">
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <Button className="sm:hidden" variant={"ghost"}>
              <FiChevronRight />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="px-2">
            <DrawerHeader>
              <DrawerClose asChild>
                <Button variant="outline">
                  Close
                </Button>
              </DrawerClose>
            </DrawerHeader>
            <LeftMenu />
          </DrawerContent>
        </Drawer>
        <div className="hidden sm:flex flex-col col-span-3 border-r border-r-gray-300 px-3 gap-y-10">
          <LeftMenu />
        </div>

        <div className="col-span-12 sm:col-span-6 px-5">
          <main>
            <section>
              <Carousel className="px-2 min-w-[150px]" opts={{
                align: "center",
                loop: true,
              }}>
                <CarouselContent>
                  {carouselData.map(({ id, img, logo, name }) => (
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={id}>
                      <CarouselCardItem
                        img={img}
                        logo={logo}
                        name={name}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
              </Carousel>
            </section>

            <section>
              <div className='grid grid-cols-3 mt-10'>
                <TabBar tabItems={tabItems} />
              </div>
            </section>

            <section className="pb-20 mt-10">
              <div className="flex flex-col items-center">
                {postData.map(post => (
                  <PostCard
                    key={post.id}
                    {...post}
                  />
                ))}
              </div>
            </section>
          </main>
        </div>

        <div className="hidden sm:block col-span-3 border-l border-l-gray-300 px-3">
          <aside>
            <div className="flex flex-col gap-5">
              <section>
                <AppDowload />
              </section>
              <section>
                <Trending />
              </section>
              <section>
                <Connections />
              </section>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}


export default App;