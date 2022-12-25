
import { Row, Col, Card, Button, Select } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
// import { useCallback, useState } from 'react'

const EmployeeHomeDashboard = ({ employee, addPackage }) => {
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
        <h1 style={{ fontSize: 50 }}>Welcome {employee == null ? null : employee.name}</h1>

      </Row>

      <Row>
        <Col>

          <Card
            title={<h2 style={{ fontSize: 25, fontWeight: 'normal' }}> Packages Managed</h2>}
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
            title={<h2 style={{ fontSize: 25, fontWeight: 'normal' }}>Complaints Resolved</h2>}
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
            title={<h2 style={{ fontSize: 25, fontWeight: 'normal' }}>Courier Applications Evaluated</h2>}
            style={{
              width: 390,
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
            title={<h2 style={{ fontSize: 25, fontWeight: 'normal' }}>Delivery Branches Handled</h2>}
            style={{
              width: 350,
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
      </Row>
      <Row />
    </>

  )
}

export default EmployeeHomeDashboard
