const SectionHeader = (props: { children: any }) => {
  return (
    <h2 className='text-2xl w-1/4 p-2 my-5 border-b-2 border-slate-400'>
      {props.children}
    </h2>
  )
}

export default SectionHeader;