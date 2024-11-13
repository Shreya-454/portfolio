import Link from 'next/link'
import React from 'react'


const CommonButton = ({
  children,
  className = '',
  ghost,
  transparent,
  header,
  url,
  ...props
}) => {
  const buttonType = {
    transparent:'border-2 border-rich-black text-rich-black hover:border-orange hover:text-orange',
    default:'bg-orange text-off-white hover:text-orange hover:bg-white border border-transparent hover:border-orange',
  }
  return url ? (
    <Link
      to={url}
      {...props}
      className={`${className} ${ghost ? buttonType.ghost : transparent ? buttonType.transparent : buttonType.default} rounded-full px-[17px] sm:px-12 py-4 sm:py-[22px] uppercase duration-300 font-ClashDisplay-Semibold font-semibold text-base sm:text-base leading-none`}>
      {children}
    </Link>
  ) : (
    <button
      {...props}
      className={`${className} ${ghost ? buttonType.ghost : transparent ? buttonType.transparent : buttonType.default} rounded-full px-[17px] sm:px-12 py-4 sm:py-[22px] uppercase duration-300 font-ClashDisplay-Semibold font-semibold text- sm:text-base leading-none`}>
      {children}
    </button>
  )
}

export default CommonButton
