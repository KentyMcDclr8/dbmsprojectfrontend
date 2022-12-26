import React, { useCallback, useEffect, useMemo, useState } from 'react'
import UserHome from './Components/User/UserHome'
import LoginPage from './Components/General/LoginPage'
import CourierSignUp from './Components/General/CourierSignUp'
import CustomerSignUp from './Components/General/CustomerSignUp'
import EmployeeHome from './Components/Employee/EmployeeHome'
import AdminHome from './Components/Admin/AdminHome'
import CourierHome from './Components/Courier/CourierHome'

const App = () => {
  const [activePage, setActivePage] = useState(<LoginPage />)
  const [page, setPage] = useState('Login')
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    switch (page) {
      case 'Login':
        setActivePage(<LoginPage changePage={setPage} setUserData={setUserData} />)
        break
      case 'Customer Sign-up':
        setActivePage(<CustomerSignUp changePage={setPage} />)
        break
      case 'Courier Sign-up':
        setActivePage(<CourierSignUp changePage={setPage} />)
        break
      case 'User':
        setActivePage(<UserHome logoutHandler={setPage} user={userData} />)
        break
      case 'Employee':
        setActivePage(<EmployeeHome logoutHandler={setPage} employee={userData} />)
        break
      case 'Admin':
        setActivePage(<AdminHome logoutHandler={setPage} />)
        break
      case 'Courier':
        setActivePage(<CourierHome logoutHandler={setPage} user={userData} />)
        break
    }

    console.log('page changes')
  }, [page])

  return (
    <>

      {activePage}

    </>
  )
}
export default App
