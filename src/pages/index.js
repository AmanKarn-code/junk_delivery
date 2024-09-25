import { useTheme } from 'next-themes'
import React from 'react'

const index = () => {
  const { theme, setTheme } = useTheme()
  // console.log(theme)
  return (
    <div> 
      <p>
         The current theme is: {theme}
        </p>
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <hr/>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
  )
}

export default index