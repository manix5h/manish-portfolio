import HeroBgAnimation from "./HeroBgAnimation"
import HeroImg from "../assets/manish.jpeg"

export const HeroSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-10/12 md:flex flex-col">
      <div className="relative">
        
      <HeroBgAnimation/>
      <div className="flex justify-center mt-5">
      <img src={HeroImg} className="h-[400px] w-[400px]  absolute top-10 md:right-24  rounded-full -z-10 border-red-100 " alt="" />
  </div>
   
      </div>


      <div className="w-full flex justify-center h-fit">

      </div>

    
      </div>
    </div>
  )
}



