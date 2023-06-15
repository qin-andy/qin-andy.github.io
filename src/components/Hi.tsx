
const Hi = (props: { children: any }) => {
  return (
    <span className='font-semibold text-blue-500'>
      {props.children}
    </span>
  )
}

export default Hi;