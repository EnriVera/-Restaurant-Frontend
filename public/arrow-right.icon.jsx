import * as React from "react"

function SvgArrowRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__h-6 prefix__w-6"
      fill="none"
      width={16} height={16}
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  )
}

export default SvgArrowRight