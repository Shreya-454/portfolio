const CommonParagraph = ({
    children,
    className = '',
    center,
    ghost,
    ...props


  }) => {
    const paratype = {
        center:'text-center',
        default:'text-left'
      }
    return (
      <h2
        {...props}
        className={`${className} ${ghost ? paratype.ghost : center ? paratype.center :paratype.default} font-clash font-normal max-sm:text-center text-rich-black  leading-113 mb-6`}>
        {children}
      </h2>
    )
  }
  
  export default CommonParagraph