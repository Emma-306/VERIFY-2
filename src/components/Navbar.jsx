import {assets} from "../assets/assets"

export const Navbar = () => {
  return (
    <div className='w-full py-14 px-8 md:px-16 lg:px-24 xl:px-32'>
      <img src={assets.logo} alt="Logo" />
    </div>
  )
}
