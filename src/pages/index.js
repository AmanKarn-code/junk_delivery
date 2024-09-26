import { useTheme } from 'next-themes'
import React from 'react'

const Index = () => {
  const { theme, setTheme } = useTheme()
  
  return (
    <div>
      <p className='dark:bg-red-400 dark:text-blue-400'>
        The current theme is: {theme}
      </p>
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <hr/>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}

export default Index