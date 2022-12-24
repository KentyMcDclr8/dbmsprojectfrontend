import { Col, Row, Layout, Skeleton } from 'antd'
import { useEffect, useState } from 'react'


import UserSidebar from './UserSidebar'
import UserHomeDashboard from './pages/UserHomeDashboard'

import styles from './user.css'

const UserHomePage = (user) => {

  const [currentPage, setCurrentPage] = useState('')

  // Default Page
  useEffect(() => {
   setCurrentPage('UserDashboard')
  }, [])

  const handleShowUserHome = () => {
    setCurrentPage('UserHome')
  }

  const handleShowUserInfo = () => {
    setCurrentPage('UserInfo')
  }

  const handleShowRecipientsList = () => {
    setCurrentPage('RecipientsList')
  }

  const handleShowActiveShipments = () => {
    setCurrentPage('ActiveShipments')
  }

  const handleShowShipmentHistory = () => {
    setCurrentPage('ShipmentHistory')
  }

  const handleShowPaymentDetails = () => {
    setCurrentPage('PaymentDetails')
  }

  const handleShowComplaints = () => {
    setCurrentPage('Complaints')
  }

  return (
    <>
    <h2>UserHomePage</h2>

          <Row className='content'>
            <Col className='col-side-menu'>
            
                  <UserSidebar
                    handleShowUserHome={handleShowUserHome}
                    handleShowUserInfo={handleShowUserInfo}
                    handleShowRecipientsList={handleShowRecipientsList}
                    handleShowActiveShipments={handleShowActiveShipments}
                    handleShowShipmentHistory={handleShowShipmentHistory}
                    handleShowPaymentDetails={handleShowPaymentDetails}
                    handleShowComplaints={handleShowComplaints}
                  // logOut={logOut}
                  />
            </Col>

             <Col className="content-container">
              {!user ? (<Skeleton />) : (currentPage === '' && <Skeleton active />)}
              {currentPage === 'UserHome' && (<UserHomeDashboard user={user} />)}
               {/* {currentPage === 'UserInfo' && (<UserInfoDashboard user={user} />)} */}
              {/* {currentPage === 'RecipientsList' && (<RecipientsListDashboard user={user} />)}
              {currentPage === 'ActiveShipments' && <ActiveShipmentsDashboard user={user} />}
              {currentPage === 'ShipmentHistory' && <ShipmentHistoryDashboard user={user} />}
              {currentPage === 'PaymentDetails' && <PaymentDetailsDashboard user={user} />}
              {currentPage === 'Complaints' && <ComplaintsDashboard user={user} />} */} 
              <Skeleton />
            </Col> 

          {/* </Pane>
        </SplitPane> */}

        </Row>

    </>
  )
}

export default UserHomePage
