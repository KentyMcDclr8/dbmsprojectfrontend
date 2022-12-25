
import { Row, Col, Modal, Button, Card, Form, message, Popconfirm, Tooltip, Skeleton, Space, Table, Input, Radio } from 'antd'

import { InboxOutlined, DeleteOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useCallback, useState } from 'react'

const PaymentDashboard = () => {
  const [addModal, setAddModal] = useState(false)
  const [form] = Form.useForm()

  const addPaymentMethod = () => {
    // TODO
    setAddModal(true)
    form.resetFields()
  }

  const cancelAddPayment = () => {
    // TODO

    setAddModal(false)
    form.resetFields()
  }

  const addPaymentApi = () => {
    // TODO
    setAddModal(false)

    form.resetFields()
    message.success('New Payment Method Added Successfully')
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
    message.success('Payment Method Deleted Successfully')
  }

  const cardData = [
    { name: 'Personal Card', bank: 'Yapi Kredi', accountNumber: '4234 2432 4324', lastUsed: '17-10-2022' },
    { name: 'Business Card', bank: 'Yapi Kredi', accountNumber: '4234 2432 4324', lastUsed: '17-10-2022' },
    { name: "Friend's Card", bank: 'Yapi Kredi', accountNumber: '4234 2432 4324', lastUsed: '17-10-2022' },
    { name: 'Business Card', bank: 'Yapi Kredi', accountNumber: '4234 2432 4324', lastUsed: '17-10-2022' },
    { name: "Friend's Card", bank: 'Yapi Kredi', accountNumber: '4234 2432 4324', lastUsed: '17-10-2022' }
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
              extra={<DeleteOutlined style={{ fontSize: '170%', color: '#ce1a2a' }} onClick={() => deleteCard(card)} />}
              style={{
                width: 350,
                fontSize: 50,
                margin: 10
              }}
              size='default'
              bordered
              type='inner'
            >
              <h2 style={{ fontSize: 16, fontWeight: 'normal' }}>{card.bank}</h2>
              <h2 style={{ fontSize: 16, fontWeight: 'normal' }}>{card.accountNumber}</h2>
              <h2 style={{ fontSize: 16, fontWeight: 'normal' }}>Last used on {card.lastUsed}</h2>
            </Card>
          </Col>
        ))}

      </Row>
      <Row>

        <Button onClick={() => addPaymentMethod()} type='primary' icon={<InboxOutlined />} size='large' style={{ marginLeft: '30%', marginRight: '30%', width: '40%' }}>
          Create New Payment Method
        </Button>
      </Row>
      <Modal
        title='Add New Payment Method'
        visible={addModal}
        onCancel={cancelAddPayment}
        footer={null}
        width={800}
      >
        <Form
          style={{ marginTop: '45px' }}
          name='Add New Payment Method'
          form={form}
          layout='horizontal'
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 17 }}
          onFinish={addPaymentApi}
          autoComplete='off'
          colon
        >
          <Form.Item
            label='Card Name'
            key='name'
            name='name'
            rules={[{ required: true, message: 'Missing Card Name' }]}
          >
            <Input maxLength={255} />
          </Form.Item>
          <Form.Item
            label='Bank'
            key='bank'
            name='bank'
            rules={[{ required: true, message: 'Missing Bank' }]}
          >
            <Input maxLength={255} />
          </Form.Item>
          <Form.Item
            label='Account Number'
            key='accountNumber'
            name='accountNumber'
            rules={[{ required: true, message: 'Missing Account Number' }]}
          >
            <Input maxLength={255} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
            <Button
              style={{
                marginTop: '10px',
                backgroundColor: '#1890ff'
              }}
              block type='primary' htmlType='submit'
            >
              Submit
            </Button>
          </Form.Item>

        </Form>
      </Modal>
    </>

  )
}

export default PaymentDashboard
