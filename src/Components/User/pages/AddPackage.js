
import { Row, Input, Form, Button, Select, Radio, message, Modal } from 'antd'
import { EditOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'
import RecipientSelectInput from '../Modals/RecipientSelectInput'
import { getUserPayments, getPackagePrice, createPackage } from '../../../ApiHelper/backend_helper'

const AddPackage = ({ user, goBack }) => {
  const [form] = Form.useForm()
  const [paymentMethods, setPaymentMethods] = useState([])

  useEffect(() => {
    //
    getUserPayments(user.id)
      .then((data) => {
        setPaymentMethods(data)
      })
      .catch(e => {
        message.error(e.message)
        console.log(e)
      })
      .finally(() => {
        form.resetFields()
      })
  }, [user])

  const packageTypes = [
    'Document',
    'Fragile',
    'Heavy',
    'Luxury',
    'Other'
  ]

  // const paymentMethods = [
  //   'Business',
  //   'Yapi Kredi',
  //   'Is Bank'
  // ]

  const confirmSubmit = (values) => {
    // TODO
    // createPackage

    values.deliveryStatus = 'To be Assigned'

    createPackage(user.id, values)
      .then(() => {
        message.success('Package Created Successfully')
      })
      .catch(e => {
        message.error(e.message)
        console.log(e)
      })
      .finally(() => {
        form.resetFields()
      })

    goBack()
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const buttonClickHandler = (values) => {
    // get package price

    getPackagePrice(values)
      .then((data) => {
        Modal.confirm({
          title: 'Total Cost = ' + data + ' TL',
          content: 'Are you sure you want to proceed with the package delivery?',
          bodyStyle: { fontWeight: '600', paddingTop: '10px' },
          okText: 'Confirm',
          onOk: () => confirmSubmit(values)
        })
      })
      .catch(e => {
        message.error(e.message)
        console.log(e)
      })
      .finally(() => {
      })
  }

  return (
    <>
      <Row className='table-form-comp' style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: 50 }}>Create New Package</h1>

      </Row>

      <Form
        name='User Info'
        form={form}
        layout='horizontal'
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        onFinish={buttonClickHandler}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        colon
      >
        <Form.Item
          label='Package Type'
          key='type'
          name='type'
          rules={[{ required: true, message: 'Missing Package Type' }]}
        >
          <Select placeholder='Choose Package Type'>
            {packageTypes.map(type => (
              <Select.Option key={type} value={type}>
                {type}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label='Weight'
          key='weight'
          name='weight'
          rules={[{ required: true, message: 'Missing Weight' }]}
        >
          <Input placeholder='Enter Weight in grams' maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Volume'
          key='volume'
          name='volume'
          rules={[{ required: true, message: 'Missing Volume' }]}
        >
          <Input placeholder='Enter Volumne in meter cube' maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Recipient'
          key='recipient'
          name='recipient'
          rules={[{ required: true, message: 'Missing Recipient' }]}
        >
          <RecipientSelectInput user={user} />
        </Form.Item>

        <Form.Item
          label='Payment Method'
          key='paymentMethod'
          name='paymentMethod'
          rules={[{ required: true, message: 'Missing Payment Method' }]}
        >
          <Radio.Group>
            {paymentMethods.map(method => (
              <Radio.Button key={method.accountNumber} value={method.accountNumber} style={{ marginRight: '20px' }}>
                {method.bankName}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 1, span: 12 }}>
          <Button block type='primary' htmlType='submit' size='large' style={{ marginTop: '100px', marginLeft: '30%', marginRight: '30%' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Row />
    </>

  )
}

export default AddPackage
