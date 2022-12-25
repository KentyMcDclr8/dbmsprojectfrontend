import React, { useEffect, useState } from 'react'
import { CreditCardOutlined, ExclamationCircleOutlined, WindowsOutlined, ProfileOutlined, InboxOutlined, HistoryOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons'
import { Button, message, Layout, Menu, Row, theme } from 'antd'
import UserHomeDashboard from './pages/UserHomeDashboard'
import UserInfoDashboard from './pages/UserInfoDashboard'
import RecipientListDashboard from './pages/RecipientListDashboard'
import ActiveShipmentsDashboard from './pages/ActiveShipmentsDashboard'
import ShipmentsHistoryDashboard from './pages/ShipmentsHistoryDashboard'
import AddPackage from './pages/AddPackage'
import PaymentDashboard from './pages/PaymentDashboard'
import ComplaintsDashboard from './pages/ComplaintsDashboard'

const { Header, Content, Footer, Sider } = Layout

const MenuItems = [
  {
    key: 'Dashboard',
    icon: React.createElement(WindowsOutlined),
    label: 'Dashboard'
  },
  {
    key: 'User Info',
    icon: React.createElement(ProfileOutlined),
    label: 'User Info'
  },
  {
    key: 'Recipients List',
    icon: React.createElement(UsergroupAddOutlined),
    label: 'Recipients List'
  },
  {
    key: 'Active Shipments',
    icon: React.createElement(InboxOutlined),
    label: 'Active Shipments'
  },
  {
    key: 'Shipment History',
    icon: React.createElement(HistoryOutlined),
    label: 'Shipment History'
  },
  {
    key: 'Payment Details',
    icon: React.createElement(CreditCardOutlined),
    label: 'Payment Details'
  },
  {
    key: 'Complaints',
    icon: React.createElement(ExclamationCircleOutlined),
    label: 'Complaints'
  }
]

const UserHome = ({ user, logoutHandler }) => {
  const [currentDashboard, setCurrentDashboard] = useState(<UserHomeDashboard />)
  const [page, setPage] = useState('Dashboard')

  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const goBack = () => {
    setCurrentDashboard(<UserHomeDashboard addPackage={addPackage} user={user} />)
  }

  const addPackage = () => {
    setCurrentDashboard(<AddPackage goBack={goBack} user={user} />)
  }

  useEffect(() => {
    switch (page) {
      case 'Dashboard':
        setCurrentDashboard(<UserHomeDashboard addPackage={addPackage} user={user} />)
        break
      case 'User Info':
        setCurrentDashboard(<UserInfoDashboard user={user} />)
        break
      case 'Recipients List':
        setCurrentDashboard(<RecipientListDashboard user={user} />)
        break
      case 'Add Package':
        setCurrentDashboard(<AddPackage goBack={goBack} user={user} />)
        break
      // case "Shipment History":
      //   setCurrentDashboard(<UserHomeDashboard/>)
      //   break;
      // case "Payment Details":
      //   setCurrentDashboard(<PaymentDashboard/>)
      //   break;
      // case "Complaints":
      //   setCurrentDashboard(<ComplaintsDashboard/>)
    }

    console.log('page changes')
  }, [page])

  const pageChangeHandler = (menuItem) => {
    switch (menuItem.key) {
      case 'Dashboard':
        setCurrentDashboard(<UserHomeDashboard addPackage={addPackage} user={user} />)
        break
      case 'User Info':
        setCurrentDashboard(<UserInfoDashboard user={user} />)
        break
      case 'Recipients List':
        setCurrentDashboard(<RecipientListDashboard user={user} />)
        break
      case 'Active Shipments':
        setCurrentDashboard(<ActiveShipmentsDashboard addPackage={addPackage} user={user} />)
        break
      case 'Shipment History':
        setCurrentDashboard(<ShipmentsHistoryDashboard addPackage={addPackage} user={user} />)
        break
      case 'Payment Details':
        setCurrentDashboard(<PaymentDashboard user={user} />)
        break
      case 'Complaints':
        setCurrentDashboard(<ComplaintsDashboard user={user} />)
    }
  }

  const logout = () => {
    logoutHandler('Login')
    message.warning('User has been logged out')
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
                <path d='M91.6801 85.2563C90.2547 81.7654 88.1862 78.5946 85.5899 75.9203C83.0014 73.2384 79.9351 71.1 76.5604 69.6234C76.5302 69.6078 76.4999 69.6 76.4697 69.5844C81.1771 66.0688 84.2374 60.3422 84.2374 53.8813C84.2374 43.1781 75.8501 34.5063 65.4983 34.5063C55.1464 34.5063 46.7592 43.1781 46.7592 53.8813C46.7592 60.3422 49.8194 66.0688 54.5268 69.5922C54.4966 69.6078 54.4664 69.6156 54.4362 69.6313C51.051 71.1078 48.0135 73.225 45.4067 75.9281C42.8127 78.6044 40.7446 81.7748 39.3165 85.2641C37.9135 88.6801 37.1568 92.3425 37.0874 96.0531C37.0854 96.1365 37.0995 96.2195 37.129 96.2971C37.1585 96.3747 37.2027 96.4455 37.259 96.5052C37.3154 96.5649 37.3827 96.6124 37.457 96.6447C37.5314 96.6771 37.6112 96.6938 37.6919 96.6938H42.2255C42.558 96.6938 42.8225 96.4203 42.83 96.0844C42.9812 90.0531 45.3235 84.4047 49.4643 80.1234C53.7486 75.6938 59.4383 73.2563 65.4983 73.2563C71.5582 73.2563 77.248 75.6938 81.5323 80.1234C85.673 84.4047 88.0154 90.0531 88.1665 96.0844C88.1741 96.4281 88.4385 96.6938 88.771 96.6938H93.3046C93.3853 96.6938 93.4652 96.6771 93.5395 96.6447C93.6139 96.6124 93.6812 96.5649 93.7375 96.5052C93.7939 96.4455 93.8381 96.3747 93.8675 96.2971C93.897 96.2195 93.9112 96.1365 93.9091 96.0531C93.8336 92.3188 93.0855 88.6859 91.6801 85.2563V85.2563ZM65.4983 67.3188C62.03 67.3188 58.7658 65.9203 56.3101 63.3813C53.8544 60.8422 52.5018 57.4672 52.5018 53.8813C52.5018 50.2953 53.8544 46.9203 56.3101 44.3813C58.7658 41.8422 62.03 40.4438 65.4983 40.4438C68.9665 40.4438 72.2307 41.8422 74.6865 44.3813C77.1422 46.9203 78.4947 50.2953 78.4947 53.8813C78.4947 57.4672 77.1422 60.8422 74.6865 63.3813C72.2307 65.9203 68.9665 67.3188 65.4983 67.3188Z' fill='#1890FF' />
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
export default UserHome
