import React, { useEffect, useState } from 'react'
import { FileExclamationOutlined, FileOutlined, BranchesOutlined, WindowsOutlined, ProfileOutlined, InboxOutlined, HistoryOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Button, message, Layout, Menu, Row, theme } from 'antd'
import EmployeeHomeDashboard from './pages/EmployeeHomeDashboard'
import EmployeeInfoDashboard from './pages/EmployeeInfoDashboard'
import CourierApplicationsDashboard from './pages/CourierApplicationsDashboard'
import CourierAccountsDashboard from './pages/CourierAccountsDashboard'
import ManagePackagesDashboard from './pages/ManagePackagesDashboard'
import ManageComplaintsDashBoard from './pages/ManageComplaintsDashBoard'
import DeliveryBranchesDashBoard from './pages/DeliveryBranchesDashBoard'

const { Header, Content, Footer, Sider } = Layout

const MenuItems = [
  {
    key: 'Dashboard',
    icon: React.createElement(WindowsOutlined),
    label: 'Dashboard'
  },
  {
    key: 'Employee Info',
    icon: React.createElement(ProfileOutlined),
    label: 'Employee Info'
  },
  {
    key: 'Courier Applications',
    icon: React.createElement(FileOutlined),
    label: 'Courier Applications'
  },
  {
    key: 'Courier Accounts',
    icon: React.createElement(UsergroupAddOutlined),
    label: 'Courier Accounts'
  },
  {
    key: 'Manage Packages',
    icon: React.createElement(InboxOutlined),
    label: 'Manage Packages'
  },
  {
    key: 'Manage Complaints',
    icon: React.createElement(FileExclamationOutlined),
    label: 'Manage Complaints'
  },
  {
    key: 'Delivery Branches',
    icon: React.createElement(BranchesOutlined),
    label: 'Delivery Branches'
  }
]

const EmployeeHome = ({ employee, logoutHandler }) => {
  const [currentDashboard, setCurrentDashboard] = useState(<EmployeeHomeDashboard />)
  const [page, setPage] = useState('Dashboard')

  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const goBack = () => {
    setCurrentDashboard(<EmployeeHomeDashboard employee={employee} />)
  }

  useEffect(() => {
    switch (page) {
      case 'Dashboard':
        setCurrentDashboard(<EmployeeHomeDashboard employee={employee} />)
        break
      case 'Employee Info':
        setCurrentDashboard(<EmployeeInfoDashboard employee={employee} />)
        break
      case 'Courier Applications':
        setCurrentDashboard(<CourierApplicationsDashboard employee={employee} />)
        break
      case 'Courier Accounts':
        setCurrentDashboard(<CourierAccountsDashboard employee={employee} />)
        break
      case 'Manage Packages':
        setCurrentDashboard(<ManagePackagesDashboard employee={employee} />)
        break
      case 'Manage Complaints':
        setCurrentDashboard(<ManageComplaintsDashBoard employee={employee} />)
        break
      case 'Delivery Branches':
        setCurrentDashboard(<DeliveryBranchesDashBoard employee={employee} />)
    }

    console.log('page changed')
  }, [page])

  const pageChangeHandler = (menuItem) => {
    switch (menuItem.key) {
      case 'Dashboard':
        setCurrentDashboard(<EmployeeHomeDashboard employee={employee} />)
        break
      case 'Employee Info':
        setCurrentDashboard(<EmployeeInfoDashboard employee={employee} />)
        break
      case 'Courier Applications':
        setCurrentDashboard(<CourierApplicationsDashboard employee={employee} />)
        break
      case 'Courier Accounts':
        setCurrentDashboard(<CourierAccountsDashboard employee={employee} />)
        break
      case 'Manage Packages':
        setCurrentDashboard(<ManagePackagesDashboard employee={employee} />)
        break
      case 'Manage Complaints':
        setCurrentDashboard(<ManageComplaintsDashBoard employee={employee} />)
        break
      case 'Delivery Branches':
        setCurrentDashboard(<DeliveryBranchesDashBoard employee={employee} />)
    }
  }

  const logout = () => {
    logoutHandler('Login')
    message.warning('Employee has been logged out')
  }

  return (
    <Layout style={{ backgroundColor: '#3c9ce4' }}>

      <Header className='header' style={{ backgroundColor: '#3c9ce4' }}>
        <div className='logo' />
        {/* <Menu theme='dark' mode='horizontal' /> */}
      </Header>
      <Content
        style={{
          padding: '0 50px'
        }}
      >

        <Layout
          style={{
            padding: '12px 0',
            background: colorBgContainer

          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
              border: 'red'
            }}
            width={300}
          >
            <Row style={{
              marginBottom: '30px',
              marginLeft: '75px',
              marginTop: '30px'
            }}
            >
              <svg width='131' height='132' viewBox='0 0 131 132' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M128 66C128 100.815 99.9963 129 65.5 129C31.0037 129 3 100.815 3 66C3 31.1845 31.0037 3 65.5 3C99.9963 3 128 31.1845 128 66Z' fill='white' stroke='#1890FF' stroke-width='6' />
                <path d='M93.0522 44.3086C93.0144 44.2383 92.9615 44.168 92.901 44.1133C92.5232 43.7227 91.9112 43.7227 91.5334 44.1133L78.5143 57.5742L73.3837 52.2695L86.4104 38.8008C86.4708 38.7383 86.5162 38.6758 86.5615 38.6055C86.8335 38.1289 86.6824 37.5195 86.2215 37.2383C78.8014 32.707 69.0843 33.7461 62.6994 40.3398C57.6368 45.5742 55.9594 52.9961 57.6746 59.668L35.5353 82.5586C35.3086 82.793 35.3237 83.1758 35.5579 83.418L48.3806 96.6758C48.6149 96.918 48.9927 96.9336 49.2118 96.6992L71.3435 73.8164C77.804 75.5977 84.9823 73.8711 90.0524 68.6289C96.4297 62.0273 97.4347 51.9805 93.0522 44.3086ZM86.2064 64.6445C81.8163 69.1836 75.2274 70.0586 69.991 67.2695L69.3261 67.957L69.3185 67.9492L48.6149 89.3633L42.6304 83.1758L60.017 65.1992C60.017 65.1992 60.017 65.207 60.0245 65.207L64.0141 61.082C61.3166 55.668 62.1629 48.8555 66.553 44.3164C67.9689 42.8511 69.674 41.7192 71.5518 40.9978C73.4297 40.2765 75.436 39.9828 77.4337 40.1367L67.3917 50.5117C66.9381 50.9812 66.6834 51.6177 66.6834 52.2812C66.6834 52.9448 66.9381 53.5813 67.3917 54.0508L76.799 63.7773C77.2531 64.2463 77.8687 64.5097 78.5105 64.5097C79.1523 64.5097 79.7679 64.2463 80.2219 63.7773L90.2564 53.4023C90.536 57.4492 89.1683 61.5898 86.2064 64.6445Z' fill='#1890FF' />
              </svg>

            </Row>
            <Row>
              <Menu
                mode='inline'
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['Dashboard']}
                style={{
                  height: '105%'

                }}
                items={MenuItems}
                onClick={pageChangeHandler}
              />
            </Row>

            <Row align='bottom'>
              <Button onClick={() => logout()} block type='primary' style={{ marginLeft: '10px', marginRight: '10px', marginTop: '310px' }} danger>
                Logout
              </Button>
            </Row>

          </Sider>
          <Content
            style={{
              padding: '5 24px',
              minHeight: 863
            }}
          >
            {currentDashboard}
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: '#3c9ce4',
          color: 'white'
        }}
      >
        BilCargo ©2022
      </Footer>
    </Layout>
  )
}
export default EmployeeHome
