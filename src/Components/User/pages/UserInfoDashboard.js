
import { Row, Input, Form, Button, InputNumber } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
// import { useCallback, useState } from 'react'

const UserHomeDashboard = (user) => {
  const [form] = Form.useForm()

  const updateUserInfo = () => {
    // TODO
    return 1
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Row className='table-form-comp'>
        <h1 style={{ fontSize: 50 }}>User Info</h1>

      </Row>

      <Form
        name='User Info'
        form={form}
        layout='horizontal'
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        onFinish={updateUserInfo}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        colon
      >
        <Form.Item
          label='User ID'
          key='userId'
          name='userId'
          rules={[{ required: true, message: 'Missing User ID' }]}
        >
          <Input maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Name'
          key='name'
          name='name'
          rules={[{ required: true, message: 'Missing Name' }]}
        >
          <Input maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Description'
          key='description'
          name='description'
          rules={[{ required: true, message: 'Missing Description' }]}
        >
          <Input maxLength={255} />
        </Form.Item>

      </Form>
      <Row>

        <Button block type='primary' icon={<InboxOutlined />} size='large' style={{ marginLeft: '30%', marginRight: '30%' }}>
          Create New Package
        </Button>
      </Row>
    </>

  )
}

export default UserHomeDashboard
