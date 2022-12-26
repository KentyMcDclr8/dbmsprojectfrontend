import React, { useEffect, useState } from 'react'
import { CarOutlined, ExclamationCircleOutlined, WindowsOutlined, ProfileOutlined, InboxOutlined, HistoryOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons'
import { Button, message, Layout, Menu, Row, theme } from 'antd'
import UserHomeDashboard from './pages/UserHomeDashboard'
import UserInfoDashboard from './pages/UserInfoDashboard'
import ActiveShipmentsDashboard from './pages/ActiveShipmentsDashboard'
import ShipmentsHistoryDashboard from './pages/ShipmentsHistoryDashboard'
import VehicleDashboard from './pages/VehicleDashboard'

const { Header, Content, Footer, Sider } = Layout

const MenuItems = [
  {
    key: 'Dashboard',
    icon: React.createElement(WindowsOutlined),
    label: 'Dashboard'
  },
  {
    key: 'Courier Info',
    icon: React.createElement(ProfileOutlined),
    label: 'Courier Info'
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
    key: 'Registered Vehicle',
    icon: React.createElement(CarOutlined),
    label: 'Registered Vehicle'
  }
]

const UserHome = ({ user, logoutHandler }) => {
  const [currentDashboard, setCurrentDashboard] = useState(<UserHomeDashboard />)
  const [page, setPage] = useState('Dashboard')

  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const goBack = () => {
    setCurrentDashboard(<UserHomeDashboard user={user} />)
  }

  useEffect(() => {
    switch (page) {
      case 'Dashboard':
        setCurrentDashboard(<UserHomeDashboard user={user} />)
        break
      case 'User Info':
        setCurrentDashboard(<UserInfoDashboard user={user} />)
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
        setCurrentDashboard(<UserHomeDashboard user={user} />)
        break
      case 'Courier Info':
        setCurrentDashboard(<UserInfoDashboard user={user} />)
        break
      case 'Active Shipments':
        setCurrentDashboard(<ActiveShipmentsDashboard user={user} />)
        break
      case 'Shipment History':
        setCurrentDashboard(<ShipmentsHistoryDashboard user={user} />)
        break
      case 'Registered Vehicle':
        setCurrentDashboard(<VehicleDashboard user={user} />)
        break
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
              <svg width='182' height='167' viewBox='0 0 182 167' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M164.938 26.0938H17.0625C13.9166 26.0938 11.375 28.4259 11.375 31.3125V135.688C11.375 138.574 13.9166 140.906 17.0625 140.906H164.938C168.083 140.906 170.625 138.574 170.625 135.688V31.3125C170.625 28.4259 168.083 26.0938 164.938 26.0938ZM157.828 129.164H24.1719V37.8359H157.828V129.164Z' fill='#1890FF' />
                <path opacity='0.1' d='M24.1719 129.164H157.828V37.8359H24.1719V129.164ZM108.062 68.4961C108.062 67.7785 108.24 67.1914 108.471 67.1914H130.404C130.635 67.1914 130.812 67.7785 130.812 68.4961V76.3242C130.812 77.0418 130.635 77.6289 130.404 77.6289H108.471C108.24 77.6289 108.062 77.0418 108.062 76.3242V68.4961ZM108.062 91.9805C108.062 91.2629 108.631 90.6758 109.324 90.6758H142.33C143.023 90.6758 143.592 91.2629 143.592 91.9805V99.8086C143.592 100.526 143.023 101.113 142.33 101.113H109.324C108.631 101.113 108.062 100.526 108.062 99.8086V91.9805ZM38.4262 108.387C38.9238 99.6944 44.0959 92.1436 51.6852 87.8218C48.4682 84.5601 46.5131 80.2546 46.5131 75.5088C46.5131 65.4138 55.382 57.2432 66.3127 57.2432C77.2434 57.2432 86.1123 65.4138 86.1123 75.5088C86.1123 80.2546 84.1572 84.5764 80.9402 87.8218C88.5117 92.1272 93.7016 99.6944 94.1992 108.387C94.2089 108.564 94.1792 108.74 94.1121 108.906C94.045 109.072 93.9418 109.224 93.8088 109.352C93.6758 109.48 93.5157 109.582 93.3384 109.652C93.1611 109.721 92.9702 109.757 92.7773 109.757H84.9748C84.2283 109.757 83.624 109.219 83.5707 108.534C82.8953 100.298 75.3949 93.7744 66.2949 93.7744C57.1949 93.7744 49.6945 100.298 49.0191 108.534C48.9658 109.219 48.3615 109.757 47.615 109.757H39.8125C38.9949 109.757 38.3551 109.137 38.4262 108.387Z' fill='#1890FF' />
                <path opacity='0.1' d='M57.1002 75.5088C57.1002 77.7579 58.0683 79.915 59.7915 81.5054C61.5148 83.0958 63.852 83.9893 66.289 83.9893C68.7261 83.9893 71.0633 83.0958 72.7865 81.5054C74.5098 79.915 75.4779 77.7579 75.4779 75.5088C75.4779 74.3951 75.2402 73.2924 74.7784 72.2635C74.3167 71.2346 73.6398 70.2997 72.7865 69.5122C71.9333 68.7247 70.9203 68.1 69.8055 67.6739C68.6906 67.2477 67.4957 67.0283 66.289 67.0283C65.0823 67.0283 63.8874 67.2477 62.7726 67.6739C61.6578 68.1 60.6448 68.7247 59.7915 69.5122C58.9382 70.2997 58.2614 71.2346 57.7996 72.2635C57.3378 73.2924 57.1002 74.3951 57.1002 75.5088Z' fill='#1890FF' />
                <path d='M108.469 77.6289H130.401C130.633 77.6289 130.81 77.0418 130.81 76.3242V68.4961C130.81 67.7785 130.633 67.1914 130.401 67.1914H108.469C108.238 67.1914 108.06 67.7785 108.06 68.4961V76.3242C108.06 77.0418 108.238 77.6289 108.469 77.6289ZM109.322 101.113H142.327C143.021 101.113 143.589 100.526 143.589 99.8086V91.9805C143.589 91.2629 143.021 90.6758 142.327 90.6758H109.322C108.629 90.6758 108.06 91.2629 108.06 91.9805V99.8086C108.06 100.526 108.629 101.113 109.322 101.113ZM39.8102 109.757H47.6128C48.3593 109.757 48.9636 109.219 49.0169 108.534C49.6923 100.298 57.1927 93.7744 66.2927 93.7744C75.3927 93.7744 82.8931 100.298 83.5684 108.534C83.6218 109.219 84.2261 109.757 84.9725 109.757H92.7751C92.9679 109.757 93.1588 109.721 93.3361 109.652C93.5135 109.582 93.6735 109.48 93.8065 109.352C93.9395 109.224 94.0427 109.072 94.1098 108.906C94.177 108.74 94.2066 108.564 94.197 108.387C93.6993 99.6944 88.5095 92.1272 80.938 87.8218C84.2769 84.4539 86.1219 80.0617 86.11 75.5088C86.11 65.4138 77.2411 57.2432 66.3104 57.2432C55.3798 57.2432 46.5108 65.4138 46.5108 75.5088C46.5108 80.2546 48.4659 84.5601 51.6829 87.8218C47.8284 90.0135 44.6092 93.0287 42.3003 96.6099C39.9914 100.191 38.6614 104.232 38.4239 108.387C38.3528 109.137 38.9927 109.757 39.8102 109.757ZM66.2927 67.0283C71.3581 67.0283 75.4815 70.8282 75.4815 75.5088C75.4815 80.1894 71.3581 83.9893 66.2927 83.9893C61.2272 83.9893 57.1038 80.1894 57.1038 75.5088C57.1038 70.8282 61.2272 67.0283 66.2927 67.0283Z' fill='#1890FF' />
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
              <Button onClick={() => logout()} block type='primary' style={{ marginLeft: '10px', marginRight: '10px', marginTop: '380px' }} danger>
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
