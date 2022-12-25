import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import UserHome from './Components/User/UserHome'
import LoginPage from './Components/General/LoginPage'
import CourierSignUp from './Components/General/CourierSignUp'
import CustomerSignUp from './Components/General/CustomerSignUp'
import EmployeeHome from './Components/Employee/EmployeeHome'

const App = () => {
  const [activePage, setActivePage] = useState(<LoginPage />)
  const [page, setPage] = useState('Login')

  useEffect(() => {
    switch (page) {
      case 'Login':
        setActivePage(<LoginPage changePage={setPage} />)
        break
      case 'Customer Sign-up':
        setActivePage(<CustomerSignUp changePage={setPage} />)
        break
      case 'Courier Sign-up':
        setActivePage(<CourierSignUp changePage={setPage} />)
        break
      case 'User':
        setActivePage(<UserHome logoutHandler={setPage} />)
        break
      case 'Employee':
        setActivePage(<EmployeeHome logoutHandler={setPage} />)
        break
      case 'Admin':
        setActivePage(<UserHome logoutHandler={setPage} />)
        break
      // case "Complaints":
      //   setCurrentDashboard(<UserHomeDashboard/>)
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
