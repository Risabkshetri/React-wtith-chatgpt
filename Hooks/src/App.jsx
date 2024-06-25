import UseState from './components/UseState'
import DataFetching from './components/DataFetching'
import AutoSaveForm from './components/AutoSaveForm'
import ThemeButton from './components/ThemeButton'
import { ThemeProvider } from './components/ThemeContext'
import { AuthProvider } from './components/AuthContext'
import Login from './components/Login'
import Profile  from './components/Profile'
import FetchData from './components/FetchData'
import PostData from './components/PostData'
import MultipleRequests from './components/MultipleRequests'
import PaginatedData from './components/PaginatedData'

import './App.css'
// import Test from './components/Test'

function App() {

  return (
    <>
   <UseState />
   <DataFetching />
   <AutoSaveForm />
   <ThemeProvider>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <ThemeButton />
      </div>
    </ThemeProvider>
    <AuthProvider>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Login />
        <Profile />
      </div>
    </AuthProvider>

    <FetchData />
    <PostData />
    <MultipleRequests />
    <PaginatedData />
    </>
  )
}

export default App

