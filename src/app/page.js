import Image from 'next/image'
import styles from './page.module.css'
import { MyContextProvider } from './useAuth'
import Dashboard from './dashboard/page'

export default function Home() {
  return (
    <MyContextProvider>
      <Dashboard />
    </MyContextProvider>
  )
}
