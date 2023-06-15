import Footer from "./Footer";
import Hi from "./Hi";
import ProjectGallery from "./ProjectGallery"
import SectionHeader from "./SectionHeader";

const Home = () => {
  return (
    <div className='container mx-auto w-full text-md text-center items-center flex flex-col p-3'>
      <h1 className='text-5xl m-3'>Andy Qin</h1>
      <img className='w-48 my-5 shadow-lg shadow-slate' src='./portrait_plates.PNG' alt='self potrait' />

      <ul className='w-full mt-1 max-w-lg flex flex-row items-center justify-center'>
        <a className='mx-3 p-1 w-1/12 hover:bg-sky-100 border-2 hover:border-black rounded-lg'
          href='https://www.linkedin.com/in/qin-andy/'
          target='_blank'
          rel='noreferrer'>
          <li className='flex flex-row justify-center items-between'>
            <img className='h-5 w-5' src='/icons/github-mark.svg' alt='GitHub logo' />
            {/* <p>LinkedIn</p> */}
          </li>
        </a>
        <a className='mx-3 p-1 w-1/12 hover:bg-sky-100 border-2 hover:border-black rounded-lg'
          href='https://github.com/qin-andy'
          target='_blank'
          rel='noreferrer'>
          <li className='flex flex-row justify-center items-between'>
            <img className='h-5 w-5' src='/icons/iconmonstr-linkedin-3.svg' alt='LinkedIn logo' />
            {/* <p>GitHub</p> */}
          </li>
        </a>
        {/* <NavItem
          content='Resume'
        /> */}
      </ul>


      <SectionHeader>
        About Me
      </SectionHeader>
      <div className='max-w-2xl'>
        <p>
          👋 Hi, I'm Andy! I'm a software developer based in <Hi>Seattle, Washington </Hi>
          and a recent graduate from the <Hi>University of Washington</Hi>.
          I'm excited about fullstack JavaScript and game development!
        </p>
        <p className='mt-3'>
          💻 My primary experience is in
          <Hi> Java</Hi>, <Hi>JavaScript/TypeScript</Hi> and <Hi>Python</Hi>. I've worked on projects using
          Node, Express, React, Redux, Flask, Spring, MongoDB, and various AWS Services (S3, DocumentDB, DynamoDB)
        </p>
        <p className='mt-3'>
          🌎 In Summer 2022 I was a SDE intern at <Hi>Amazon</Hi> on
          Supply Chain Optimization Technology, working on inventory planning control.
          I also worked on <Hi>Johns Hopkins uCredit</Hi> developing modern web tools for course planning.
        </p>
        <p className='mt-3'>
          📚 In my free time I enjoy reading about literary fiction and East Asian history. My current obsessions
          are the works of Kenzaburo Oe and Yukio Mishima.
        </p>

        <p className='mt-3 font-semibold'>Reach me at <Hi>qinand23[at]gmail[dot]com</Hi></p>
      </div>


      <SectionHeader>
        Projects
      </SectionHeader>
      <ProjectGallery />

      <Footer />
    </div>
  )
}

export default Home;