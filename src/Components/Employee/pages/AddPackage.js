
import { Row, Input, Form, Button, Select, Radio, message, Modal } from 'antd'
import { EditOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import RecipientSelectInput from '../Modals/RecipientSelectInput'

const AddPackage = ({ user, goBack }) => {
  const [form] = Form.useForm()

  const packageTypes = [
    'Document',
    'Fragile',
    'Heavy',
    'Luxury',
    'Other'
  ]

  const paymentMethods = [
    'Business',
    'Yapi Kredi',
    'Is Bank'
  ]

  const confirmSubmit = () => {
    // TODO
    message.success('Package Created Successfully')
    goBack()
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const buttonClickHandler = () => {
    // get package price
    Modal.confirm({
      title: 'Total Cost = 300TL',
      content: 'Are you sure you want to proceed with the package delivery?',
      bodyStyle: { fontWeight: '600', paddingTop: '10px' },
      okText: 'Confirm',
      onOk: () => confirmSubmit()
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
          key='packageType'
          name='packageType'
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
          label='Dimensions'
          key='dimensions'
          name='dimensions'
          rules={[{ required: true, message: 'Missing Dimensions' }]}
        >
          <Input placeholder='Enter Dimension HH - WW - BB in centimeters' maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Recipient'
          key='recipient'
          name='recipient'
          rules={[{ required: true, message: 'Missing Recipient' }]}
        >
          <RecipientSelectInput />
        </Form.Item>

        <Form.Item
          label='Payment Method'
          key='paymentMethod'
          name='paymentMethod'
          rules={[{ required: true, message: 'Missing Payment Method' }]}
        >
          <Radio.Group>
            {paymentMethods.map(method => (
              <Radio.Button key={method} value={method} style={{ marginRight: '20px' }}>
                {method}
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
