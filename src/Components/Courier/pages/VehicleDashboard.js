
import { Row, Col, Modal, Button, Card, Form, message, Popconfirm, Tooltip, Skeleton, Space, Table, Input, Radio } from 'antd'

import { CarOutlined, DeleteOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useCallback, useState } from 'react'

const PaymentDashboard = (user) => {
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
    { name: 'Toyota Corolla', color: 'black', number: 'LEA 4234' },
    { name: 'Fiat', color: 'White', number: 'LEA 1234' },
    { name: 'Suzuki Swift', color: 'black', number: 'LEA 3124' }
  ]

  return (
    <>
      <Row className='table-form-comp'>
        <h1 style={{ fontSize: 50 }}>Registered Vehicles</h1>

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
              <h2 style={{ fontSize: 16, fontWeight: 'normal' }}>{card.color}</h2>
              <h2 style={{ fontSize: 16, fontWeight: 'normal' }}>{card.number}</h2>
            </Card>
          </Col>
        ))}

      </Row>
      <Row>

        <Button onClick={() => addPaymentMethod()} type='primary' icon={<CarOutlined />} size='large' style={{ marginTop: '10%', marginLeft: '30%', marginRight: '30%', width: '40%' }}>
          Register New Vehicle
        </Button>
      </Row>
      <Modal
        title='Add New Vehicle'
        visible={addModal}
        onCancel={cancelAddPayment}
        footer={null}
        width={800}
      >
        <Form
          style={{ marginTop: '45px' }}
          name='Add New Vehicle'
          form={form}
          layout='horizontal'
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 17 }}
          onFinish={addPaymentApi}
          autoComplete='off'
          colon
        >
          <Form.Item
            label='Car Name'
            key='name'
            name='name'
            rules={[{ required: true, message: 'Missing Car Name' }]}
          >
            <Input maxLength={255} />
          </Form.Item>
          <Form.Item
            label='Color'
            key='color'
            name='color'
            rules={[{ required: true, message: 'Missing Color' }]}
          >
            <Input maxLength={255} />
          </Form.Item>
          <Form.Item
            label='Number'
            key='number'
            name='number'
            rules={[{ required: true, message: 'Missing Number' }]}
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
