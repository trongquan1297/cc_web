'use client'

import { useTheme } from 'next-themes'

export default function DarkModeSwitch() {

  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  return (
    <div className="flex flex-col justify-center ml-3">
      <input
        type="checkbox"
        name="light-switch"
        className="light-switch sr-only"
        checked={theme === 'light'}
        onChange={() => {
          if (theme === 'dark') {
            return setTheme('light');
          }
          return setTheme('dark');
        }}
      />
    </div>
  )
}