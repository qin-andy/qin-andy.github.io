const ProjectCard = (props: {
  src: string,
  alt?: string,
  children: string,
  title: string,
  link?: string,
}) => {
  return (
    <div className='overflow-hidden relative h-60 shadow-xl shadow-slate group rounded-3xl'>
      <div className='p-3 absolute h-full opacity-0 group-hover:opacity-90
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
      <img className='object-cover h-full w-full' src={props.src} alt={props.alt} />
    </div>
  )
}

export default ProjectCard;