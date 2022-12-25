
import { Row, Input, Form, Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

const EmployeeInfoDashboard = (user) => {
  const [form] = Form.useForm()
  const [viewMode, setViewMode] = useState(true)
  const [buttonText, setButtonText] = useState('Edit')

  const updateUserInfo = () => {
    // TODO
    setButtonText('Edit')
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const buttonClickHandler = () => {
    if (viewMode) {
      setViewMode(false)
      setButtonText('Update')
    } else {
      setViewMode(true)
      updateUserInfo()
    }
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
        wrapperCol={{ span: 14 }}
        onFinish={buttonClickHandler}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        colon
      >
        <Form.Item
          label='User ID'
          key='id'
          name='id'
          initialValue={user.id}
          rules={[{ required: true, message: 'Missing User ID' }]}
        >
          <Input disabled maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Name'
          key='name'
          name='name'
          initialValue={user.name}
          rules={[{ required: true, message: 'Missing Name' }]}
        >
          <Input disabled={viewMode} maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Email'
          key='email'
          name='email'
          initialValue={user.email}
          rules={[{ required: true, message: 'Missing Email' }]}
        >
          <Input type='email' disabled={viewMode} maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Phone'
          key='phone'
          name='phone'
          initialValue={user.phone}
          rules={[{ required: true, message: 'Missing Phone' }]}
        >
          <Input type='phone' disabled={viewMode} maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Password'
          key='password'
          name='password'
          initialValue={user.password}
          rules={[{ required: true, message: 'Missing Password' }]}
        >
          <Input type='password' disabled={viewMode} maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Building No'
          key='buildingNo'
          name='buildingNo'
          initialValue={user.buildingNo}
          rules={[{ required: true, message: 'Missing Building No' }]}
        >
          <Input disabled={viewMode} maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Street No'
          key='streetNo'
          name='streetNo'
          initialValue={user.buildingNo}
          rules={[{ required: true, message: 'Missing Street No' }]}
        >
          <Input disabled={viewMode} maxLength={255} />
        </Form.Item>
        <Form.Item
          label='City'
          key='city'
          name='city'
          initialValue={user.city}
          rules={[{ required: true, message: 'Missing City' }]}
        >
          <Input disabled={viewMode} maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Province'
          key='province'
          name='province'
          initialValue={user.province}
          rules={[{ required: true, message: 'Missing Province' }]}
        >
          <Input disabled={viewMode} maxLength={255} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 12 }}>
          <Button onClick={() => buttonClickHandler()} type='primary' htmlType='submit' icon={<EditOutlined />} size='large' style={{ marginTop: '30px', marginLeft: '30%', marginRight: '30%', width: '50%' }}>
            {buttonText}
          </Button>
        </Form.Item>
      </Form>
      <Row />
    </>

  )
}

export default EmployeeInfoDashboard
