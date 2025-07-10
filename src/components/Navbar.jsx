import { FaCartArrowDown, FaCartShopping } from 'react-icons/fa6'
import { IoMdSearch } from 'react-icons/io'
import Logo from '../assets/logo.png'
import Darkmode from './Darkmode'

const Navbar = () => {
  const Menu = [
    {
      id : 1,
      name : "Home",
      link : "/#",
    },
    {
      id : 2,
      name : "Top Rated",
      link : "/#services",
    },
    {
      id : 3,
      name : "Kids Wear",
      link : "/#kids-wear",
    },
    {
      id : 4,
      name : "Mens Wear",
      link : "/#mens-wear",
    },
    {
      id : 5,
      name : "Electronics",
      link : "/#electronics"
    }
  ] 

  const dropdownLinks = [
    {
      id : 1,
      name : "Trending Books",
      link : "/#" // ? /#trendingbooks
    },
    {
      id : 2,
      name : "Best Selling",
      link : "/#" // ? /#bestselling
    },
    {
      id : 3,
      name : "Authors",
      link : "/#" // ? /#authors
    }
  ]
  return (
    <div 
      className='shadow-primary bg-white dark:bg-gray-600'
    >  {/* main div */}
      <div className='bg-(--color-primary)/40 py-2'> {/*upper Navbar */}
        <div className='container flex justify-between items-center'>
          <div>
            <a href="#"
              className='font-bold text-2xl
              sm:text-3xl flex gap-2'>
              <img src={Logo} alt="HandbagLogo"
                className='w-10' />
                Shopsy
            </a>
          </div>
          <div> {/* search bar & order button*/}
            <div 
              className='group relative hidden sm:block'
            > {/* must specify this class for hover to work */}
              <input 
                type="text" 
                placeholder="search"
                className='w-[200px] sm:w-[200px]
                group-hover:w-[300px] transition-all duration-300 
                rounded-full border border-gray-300
                px-3 py-1 
                focus:outline-none focus:border-primary
                focus:bg-primary'
              />
              <IoMdSearch 
                className='text-gray-500 
                group-hover:text-(--color-primary)
                absolute top-1/3 right-3'/>
                {/* top-1/2 means 50% of parent */}
            </div>
          </div>
          <button
            className='bg-gradient-to-br from-(--color-primary) to-(--color-secondary)
            transition-all duration-300 text-white py-1 px-6 rounded-full
            flex items-center justify-center cursor-pointer gap-3
            group'  
          >
            <span
              className='group-hover:block hidden transition-all duration-200'
            >
              Order
            </span>
            <FaCartShopping 
              className='text-xl text-white
              drop-shadow-sm'
            />
          </button>
          <div> {/* Darkmode switch */}
            <Darkmode />
          </div>
        </div>
      </div>
      <div className='flex justify-center'> {/* Lower Navbar */}
        <ul className='sm:flex hidden items-center p-2 gap-4'>
          {
            Menu.map((item) => (
                <li className='flex justify-center items-center cursor-pointer hover:text-primary
                transition-colors duration-300 px-4 ' 
                key={item.id}
              > 
                <a href={item.link}>
                  <span>{item.name}</span>
                </a>
              </li>
            ))
          }

          {/* last dropdown*/}
          <li className='group relative cursor-pointer hover:text-primary'>
            <a href="#" className='flex items-center gap-[2px] py-2'>
              Trending
              <span>
                <FaCartArrowDown 
                  className='transition-all duration-200 group-hover:rotate-180'
                />
              </span>
            </a>
            {/*   z-index will be z[9999]    */}
            <div className='absolute z-[90] hidden group-hover:block w-[150px] 
                    rounded-md bg-white p-2 text-black shadow-secondary'>
              <ul>
                {
                  dropdownLinks.map((listitem) => (
                    <li key={listitem.id}
                      className='hover:text-secondary'
                    >
                      <a href={listitem.link}
                        className='inline-block w-full rounded-md p-2 
                        hover:bg-primary/40'
                      >
                        {listitem.name}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

// .box-shadow{
//   box-shadow: 0 6px 15px rgba(129, 131, 139, 0.281);    
// }