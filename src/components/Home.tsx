
const Home = () => {
  return (
    <div className='container mx-auto w-full text-md text-center items-center flex flex-col p-3'>
      <h1 className='text-5xl m-3'>Andy Qin</h1>
      <img className='w-48 my-5 shadow-lg shadow-slate' src='./portrait_plates.PNG' alt='self potrait' />

      <ul className='w-full mt-3 max-w-lg flex flex-row items-center justify-center'>
        <NavItem
          content='GitHub'
          link='https://github.com/qin-andy'
        />
        <NavItem
          content='LinkedIn'
          link='https://www.linkedin.com/in/qin-andy/'
        />
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

const ProjectCard = (props: {
  src: string,
  alt?: string,
  children: string,
  title: string,
  link?: string,
}) => {
  return (
    <div className='overflow-hidden w-80 h-60 shadow-xl shadow-slate group rounded-3xl'>
      <div className='p-3 w-80 h-60 absolute opacity-0 group-hover:opacity-90
            transition ease-in-out duration-300
          bg-white flex flex-col justify-between items-center
            rounded-3xl'>
        <div className='mt-5'>
          <h1 className='font-bold text-xl'>{props.title}</h1>
          <p className='mt-3'>{props.children}</p>
        </div>
        <a className='mb-2 py-2 px-4 font-semibold opacity-100 flex flex-row items-center justify-center
         bg-slate-400 hover:bg-sky-100 border-2 border-black rounded-lg'
          href={props.link}
          target='_blank'
          rel='noreferrer'
        >
          <img className='w-6 h-6 mr-2' src='/icons/github-mark.svg' alt='github logo' />
          <p>Source</p>
        </a>
      </div>
      <img className='object-cover' src={props.src} alt={props.alt} />
    </div>
  )
}

const ProjectGallery = () => {
  return (
    <>
      <div className='grid mt-5 gap-3 sm:grid-cols-2 md:grid-cols-3'>
        <ProjectCard
          src='/projects/shark_chess_cropped.PNG'
          title='Chess Tourney Simulator'
          link='https://github.com/qin-andy/shark-chess'
        >
          Framework for organizing, evaluating, and visualizing chess bot strength in tournaments   
        </ProjectCard>

        <ProjectCard
          src='/projects/rj_tox_table.PNG'
          title='Romeo and Juliet Toxicity Notebook'
          link='https://colab.research.google.com/drive/1eziq_lFXXS5dpmUyxhZmcOrmb5HUAiiN?usp=sharing'
        >
          An XML parser and line evaluator of toxicity in Shakespeare
        </ProjectCard>

        <ProjectCard
          src='/projects/ucredit_dash_old.PNG'
          title='Johns Hopkins University uCredit Docs'
          link='https://ucredit-docs.vercel.app/'
        >
          Documentation site for uCredit codebase and onboarding resources
        </ProjectCard>

        <ProjectCard
          src='/projects/santorini_3d_complex.PNG'
          title='Web Santorini'
          link='https://github.com/qin-andy/ultimate-santorini'
        >
          A multiplayer online block buiding game featuring a 2D web client and a 3D Unity client
        </ProjectCard>

        <ProjectCard
          src='/projects/svd_page.PNG'
          title='SVD Image Compress'
          link='https://github.com/qin-andy/python-web-svd-compress'
        >
          A website for singular value decomposition image compression supporting custom image requests
        </ProjectCard>

        <ProjectCard
          src='/projects/carver_hokusai_demo3.PNG'
          title='Discord Seam Carver'
          link='https://github.com/qin-andy/discord-seam-carver'
        >
          A content aware image scaling chat bot
        </ProjectCard>
      </div>
      <a href='https://github.com/qin-andy' target='_blank' rel='noreferrer'>
        <div className='mt-10 p-4 hover:bg-sky-100 border-2 hover:border-black rounded-lg '>
          View More on GitHub
        </div>
      </a>
    </>
  )
}


const SectionHeader = (props: { children: any }) => {
  return (
    <h2 className='text-2xl w-1/4 p-2 my-5 border-b-2 border-slate-400'>
      {props.children}
    </h2>
  )
}

const Hi = (props: { children: any }) => {
  return (
    <span className='font-semibold text-blue-500'>
      {props.children}
    </span>
  )
}

const NavItem = (props: {
  content: string,
  link?: string,
}) => {
  return (
    <a className='mx-3 p-1 w-1/4 hover:bg-sky-100  border-2 hover:border-black rounded-lg'
      href={props.link}
      target='_blank'
      rel='noreferrer'>
      <li className=''>
        {props.content}
      </li>
    </a>
  )
}

const Footer = () => {
  return (
    <div>
      <p className='mt-10 text-sm text-gray-500'>
        © 2023 Andy Qin
      </p>
    </div>
  )
}

export default Home;