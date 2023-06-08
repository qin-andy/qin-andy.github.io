
const Home = () => {
  return (
    <div className='container mx-auto text-center flex flex-col'>
      <h1 className='text-3xl'>Portolio</h1>
      <ul className="text-sm flex flex-col items-center">
        <li className="w-1/4 hover:bg-sky-100">
          <a href="">Github</a>
        </li>
        <li className="w-1/4 hover:bg-sky-100">
          <a href="">LinkedIn</a>
        </li>
      </ul>
    </div>
  )
}

export default Home;