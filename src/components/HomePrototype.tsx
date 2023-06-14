
const HomePrototype = () => {
  return (
    <div className='container max-w-xl mx-auto text-md text-center items-center flex flex-col p-3'>
      <h1 className='text-3xl mt-5'>Andy Qin</h1>
      <img className='w-48 my-5 shadow-lg shadow-slate' src='./portrait_plates.PNG' alt='self potrait'/>

      <ul className='w-full m-5 flex flex-row items-center justify-center'>
        <NavItem
          content='GitHub'
        />
        <NavItem
          content='LinkedIn'
        />
        <NavItem
          content='Resume'
        />
      </ul>

      <p>
        👋 Hi, I'm Andy! I'm a software developer based in <H>Seattle, Washington </H>
        and a recent graduate from the <H>University of Washington</H>
      </p>

      <p className='mt-3'>
        🌎 In 2022 I was a SDE intern at <H>Amazon</H> on
         Supply Chain Optimization working on purchasing workflows.
        I also worked on <H>Johns Hopkins uCredit</H> developing course planning tools for students.
        
      </p>
      <p className='mt-3'>
        💻 My primary experience is in
        <H> Java</H>, <H>JavaScript/TypeScript</H> and <H>Python</H>.
        I've also done personal projects in <H>C#</H> using <H>Unity</H> and <H>ASP.NET</H>
      </p>

      <p className='mt-3'>
        📚 In my free time I enjoy reading, especially literary fiction. My current obsessions
        are the works of Kenzaburo Oe and Yukio Mishima.
      </p>
      <p className="mt-3">Get in touch at <H>qinand23[at]gmail[dot]com</H></p>

      <Footer />
    </div>
  )
}

const H = (props: {children: any}) => {
  return (
    <span className='font-semibold text-cyan-500'>
      {props.children}
    </span>
  )
}

const NavItem = (props: {
  content: string,
  link?: string,
}) => {
  return (
    <a className='mx-3 p-1 w-1/4 hover:bg-sky-100 border-2 hover:border-black rounded-lg' href=''>
      <li className=''>
        {props.content}
      </li>
    </a>
  )
}

const Footer = () => {
  return (
    <div>
      <p className='mt-3 text-sm text-gray-500'>
        © 2023 Andy Qin
      </p>
    </div>
  )
}

export default HomePrototype;