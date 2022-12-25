
import { Row, Col, Card, Button, Select } from 'antd'
import { InboxOutlined, DeleteOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
// import { useCallback, useState } from 'react'

const PaymentDashboard = ({addPackage}) => {

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

  const deleteCard = (card) => {
    // TODO
    return 2
  }

  const cardData = [
    {name:"Personal Card", bank:"Yapi Kredi", accountNumber:"4234 2432 4324", lastUsed:"17-10-2022"},
    {name:"Business Card", bank:"Yapi Kredi", accountNumber:"4234 2432 4324", lastUsed:"17-10-2022"},
    {name:"Friend's Card", bank:"Yapi Kredi", accountNumber:"4234 2432 4324", lastUsed:"17-10-2022"},
    {name:"Business Card", bank:"Yapi Kredi", accountNumber:"4234 2432 4324", lastUsed:"17-10-2022"},
    {name:"Friend's Card", bank:"Yapi Kredi", accountNumber:"4234 2432 4324", lastUsed:"17-10-2022"}
  ]

  return (
    <>
      <Row className='table-form-comp'>
        <h1 style={{ fontSize: 50 }}>Payment Details</h1>

      </Row>

      <Row>
            {cardData.map(card => (
                  <Col>
                  <Card
                    title={<h2 style={{ fontSize: 25, fontWeight: 'normal' }}>{card.name}</h2>}
                    extra={<DeleteOutlined style={{fontSize: '170%', color:'#ce1a2a'}} onClick={() => deleteCard(card)}/>}
                    style={{
                      width: 350,
                      fontSize: 50,
                      margin: 30
                    }}
                    size='default'
                    bordered
                    type='inner'
                  >
                    <h2 style={{ fontSize: 16, fontWeight: 'normal' }}>{card.bank}</h2>
                    <h2 style={{ fontSize: 16, fontWeight: 'normal' }}>{card.accountNumber}</h2>
                    <h2 style={{ fontSize: 16,  fontWeight: 'normal' }}>Last used on {card.lastUsed}</h2>
                  </Card>
                </Col>
            ))}


  
      </Row>
      <Row>

        <Button onClick={() => gotoPackage()} block type='primary' icon={<InboxOutlined />} size='large' style={{ marginLeft: '30%', marginRight: '30%' }}>
          Create New Payment Method
        </Button>
      </Row>
    </>

  )
}

export default PaymentDashboard
