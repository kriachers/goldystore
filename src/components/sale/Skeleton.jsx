import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  
    speed={2}
    width={330}
    height={330}
    viewBox="0 0 370 370"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="12" y="302" rx="3" ry="3" width="96" height="7" /> 
    <rect x="16" y="375" rx="3" ry="3" width="350" height="5" /> 
    <rect x="12" y="318" rx="3" ry="3" width="327" height="5" /> 
    <circle cx="140" cy="149" r="100" /> 
    <rect x="11" y="333" rx="0" ry="0" width="322" height="5" />
  </ContentLoader>
)

export default Skeleton