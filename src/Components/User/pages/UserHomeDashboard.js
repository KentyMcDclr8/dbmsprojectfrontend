
import { Row, Col, Card, Button, Select } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
// import { useCallback, useState } from 'react'

const UserHomeDashboard = ({ user, addPackage }) => {
  const gotoPackage = () => {
    // TODO
    addPackage()
  }

  const getTotalDeliveries = () => {
    // TODO
    return 353
  }

  const getTotalCancelled = () => {
    // TODO
    return 20
  }

  const getTotalToBeAssigned = () => {
    // TODO
    return 2
  }

  const getTotalOnHold = () => {
    // TODO
    return 1
  }

  const getTotalOnTheWay = () => {
    // TODO
    return 2
  }

  const getTotalAwaitingPickup = () => {
    // TODO
    return 1
  }

  return (
    <>
      <Row className='table-form-comp'>
        <h1 style={{ fontSize: 50 }}>Welcome {user == null ? null : user.name}</h1>

      </Row>

      <Row>
        <Col>
          <Card
            title={<h2 style={{ fontSize: 25, fontWeight: 'normal' }}>Delivered</h2>}
            style={{
              width: 300,
              fontSize: 50,
              margin: 20
            }}
            size='default'
            bordered
            type='inner'
          >
            <h2 style={{ fontSize: 40, textAlign: 'center', fontWeight: 'normal' }}>{getTotalDeliveries()}</h2>
          </Card>
        </Col>
        <Col>
          <Card
            title={<h2 style={{ fontSize: 25, fontWeight: 'normal' }}>Cancelled</h2>}
            style={{
              width: 300,
              fontSize: 50,
              margin: 20
            }}
            size='default'
            bordered
            type='inner'
          >
            <h2 style={{ fontSize: 40, textAlign: 'center', fontWeight: 'normal' }}>{getTotalCancelled()}</h2>
          </Card>
        </Col>
        <Col>
          <Card
            title={<h2 style={{ fontSize: 25, fontWeight: 'normal' }}>To be Assigned</h2>}
            style={{
              width: 300,
              fontSize: 50,
              margin: 20
            }}
            size='default'
            bordered
            type='inner'
          >
            <h2 style={{ fontSize: 40, textAlign: 'center', fontWeight: 'normal' }}>{getTotalToBeAssigned()}</h2>
          </Card>
        </Col>
        <Col>
          <Card
            title={<h2 style={{ fontSize: 25, fontWeight: 'normal' }}>On Hold</h2>}
            style={{
              width: 300,
              fontSize: 50,
              margin: 20
            }}
            size='default'
            bordered
            type='inner'
          >
            <h2 style={{ fontSize: 40, textAlign: 'center', fontWeight: 'normal' }}>{getTotalOnHold()}</h2>
          </Card>
        </Col>
        <Col>
          <Card
            title={<h2 style={{ fontSize: 25, fontWeight: 'normal' }}>On the Way</h2>}
            style={{
              width: 300,
              fontSize: 50,
              margin: 20
            }}
            size='default'
            bordered
            type='inner'
          >
            <h2 style={{ fontSize: 40, textAlign: 'center', fontWeight: 'normal' }}>{getTotalOnTheWay()}</h2>
          </Card>
        </Col>
        <Col>
          <Card
            title={<h2 style={{ fontSize: 25, fontWeight: 'normal' }}>Awaiting Pickup</h2>}
            style={{
              width: 300,
              fontSize: 50,
              margin: 20
            }}
            size='default'
            bordered
            type='inner'
          >
            <h2 style={{ fontSize: 40, textAlign: 'center', fontWeight: 'normal' }}>{getTotalAwaitingPickup()}</h2>
          </Card>
        </Col>
      </Row>
      <Row>

        <Button onClick={() => gotoPackage()} block type='primary' icon={<InboxOutlined />} size='large' style={{ marginLeft: '30%', marginRight: '30%' }}>
          Create New Package
        </Button>
      </Row>
    </>

  )
}

export default UserHomeDashboard
