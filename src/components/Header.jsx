export const NavBar = ['Inizio', 'Chi Sono', 'Portfolio', 'Contattami']

function Header () {
  return (
    <header id='header' className='fixed z-20 w-full'>
      <div
        id='nav'
        className={`shadow-xl flex flex-row flex-wrap justify-center items-center w-screen m-2xl h-12 px-12 bg-fair-pink-200`}
      >
        <nav className='w-full flex flex-row flex-nowrap gap-6 justify-center items-center h-auto text-sm xl:max-w-2xl lg:gap-14'>
          {NavBar.map((name, index) => (
            <a
              key={index}
              className='hover:bg-fair-pink-100 hover:py-3 p-1 font-semibold'
              href={'#'.concat(name).replace(' ', '-')}
            >
              {name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
