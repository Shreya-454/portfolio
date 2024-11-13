
import React from 'react'


const CommonHeading = ({
  children,
  className = '',
  ghost,
  general,
  ...props
}) => {
  const headingtype = {
    general:'font-general-bold',
    default:'font-ClashDisplay-Bold',
  }
  return (
    <h2
      {...props}
      className={`${className}  ${ghost ? headingtype.ghost : general ? headingtype.general : headingtype.default}  font-bold text-rich-black md:text-6xl max-md:text-center sm:text-5xl text-4xl uppercase leading-113 mb-6`}>
      {children}
    </h2>
  )
}

export default CommonHeading
export const SubHeading = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <h2
      {...props}
      className={`${className} font-ClashDisplay-Bold font-bold text-orange sm:text-lg text-base uppercase leading-144 `}>
      {children}
    </h2>
  )
}

