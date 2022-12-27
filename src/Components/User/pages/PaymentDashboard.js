
import { Row, Col, Modal, Button, Card, Form, message, DatePicker, Tooltip, Skeleton, Space, Table, Input, Radio } from 'antd'

import { IdcardOutlined, DeleteOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'

import { getUserPayments, createPaymentMethod, deletePaymentMethod } from '../../../ApiHelper/backend_helper'

const PaymentDashboard = (user) => {
  const [addModal, setAddModal] = useState(false)
  const [form] = Form.useForm()
  const [cardData, setCardData] = useState([])

  useEffect(() => {
    reset()
  }, [user])

  const reset = () => {
    console.log('user in recipient', user)

    getUserPayments(user.user.id)
      .then((data) => {
        setCardData(data)
      })
      .catch(e => {
        message.error(e.message)
        console.log(e)
      })
      .finally(() => {
        form.resetFields()
      })
  }

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

  const addPaymentApi = (values) => {
    // TODO
    createPaymentMethod(user.user.id, values)
      .then((data) => {
        message.success('New Payment Method Added Successfully')
      })
      .catch(e => {
        message.error(e.message)
        console.log(e)
      })
      .finally(() => {
        form.resetFields()
        reset()
      })

    setAddModal(false)
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
    deletePaymentMethod(card.accountNumber, user.user.id)
      .then(_ => {
        message.success('Payment Method Deleted Successfully')
      })
      .catch(e => message.error(e.message))
      .finally(() => {
        reset()
      })
    // TODO
  }

  return (
    <>
      <Row className='table-form-comp'>
        <h1 style={{ fontSize: 50 }}>Payment Details</h1>

      </Row>

      <Row>
        {cardData.map(card => (
          <Col>
            <Card
              title={<h2 style={{ fontSize: 25, fontWeight: 'normal' }}>{card.accountTitle}</h2>}
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
              <h2 style={{ fontSize: 16, fontWeight: 'normal' }}>{card.bankName}</h2>
              <h2 style={{ fontSize: 16, fontWeight: 'normal' }}>{card.accountNumber}</h2>
              <h2 style={{ fontSize: 16, fontWeight: 'normal' }}>Expiry date {card.expiryDate}</h2>
            </Card>
          </Col>
        ))}

      </Row>
      <Row>

        <Button onClick={() => addPaymentMethod()} type='primary' icon={<IdcardOutlined />} size='large' style={{ marginTop: '5%', marginLeft: '30%', marginRight: '30%', width: '40%' }}>
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
            label='Account Title'
            key='accountTitle'
            name='accountTitle'
            rules={[{ required: true, message: 'Missing Card Name' }]}
          >
            <Input maxLength={255} />
          </Form.Item>
          <Form.Item
            label='Bank Name'
            key='bankName'
            name='bankName'
            rules={[{ required: true, message: 'Missing Bank Name' }]}
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
          <Form.Item
            label='CVV'
            key='cvv'
            name='cvv'
            rules={[{ required: true, message: 'Missing CVV' }]}
          >
            <Input maxLength={255} />
          </Form.Item>
          <Form.Item
            label='Expiry Date'
            key='expiryDate'
            name='expiryDate'
            rules={[{ required: true, message: 'Missing Expiry Date' }]}
          >
            <DatePicker />
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
