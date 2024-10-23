interface HeadingProps {
  showValue: string
  className?: string
}

const Heading1 = (props: HeadingProps) => {
  return (
    <h1
      className={`${props.className} 
        pointer-events-none z-10 whitespace-pre-wrap font-extrabold
        leading-none tracking-wide text-4xl sm:text-5xl md:text-6xl
        lg:text-7xl p-1 `}
    >
      {props.showValue}
    </h1>
  )
}

export default Heading1
