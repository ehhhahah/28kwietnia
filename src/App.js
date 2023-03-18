import { Route, Routes } from 'react-router-dom'
import MainPage from './MainPage'
import NoMatch from './NoMatch'

export default function App() {
  return (
    <div>
      <Routes>
        <Route index path='/' element={<MainPage />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  )
}
