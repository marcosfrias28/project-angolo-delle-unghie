import profilo from '../assets/profilo.webp'

function Aboutme () {
  return (
    <section
      id='Chi-Sono'
      style={{ backgroundColor: '#ffe4e4' }}
      className='flex justify-center items-center w-full h-auto py-20'
    >
      <article className='text-center flex flex-col items-center justify-evenly mt-20 md:max-w-3xl'>
        <img src={profilo} className='w-5/6 max-w-96' alt='foto profilo' />
        <h1 className='font-black text-2xl my-14'>La mia passione</h1>
        <p className='text-md mx-10 md:text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </article>
    </section>
  )
}

export default Aboutme
