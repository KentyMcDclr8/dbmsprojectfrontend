
import { Row, Input, Form, Button, message, Switch } from 'antd'
import { EditOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'

const UserInfoDashboard = (user) => {
  const [form] = Form.useForm()
  const [viewMode, setViewMode] = useState(true)

  useEffect(() => {
    console.log('User = ', user)
    form.setFieldsValue(user.user)
  }, [user])

  const updateUserInfo = () => {
    // TODO
    message.success('User Information Updated Successfully')
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const buttonClickHandler = () => {
    if (viewMode) {
      setViewMode(false)
    } else {
      setViewMode(true)
      updateUserInfo()
    }
  }

  return (
    <>
      <Row className='table-form-comp'>
        <h1 style={{ fontSize: 50 }}>Courier Info</h1>

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
          label='Available'
          key='available'
          name='available'
          valuePropName='checked'
          initialValue
          rules={[{ required: true, message: 'Missing Available' }]}
        >
          <Switch disabled={viewMode} checkedChildren='True' unCheckedChildren='False' />
        </Form.Item>
        {!viewMode && (<Form.Item wrapperCol={{ offset: 4, span: 12 }}>
          <Button type='primary' htmlType='submit' icon={<EditOutlined />} size='large' style={{ marginTop: '30px', marginLeft: '30%', marginRight: '30%', width: '50%' }}>
            Update
          </Button>
        </Form.Item>)}
      </Form>
      {viewMode && (<Row wrapperCol={{ offset: 4, span: 12 }}>
        <Button onClick={() => buttonClickHandler()} type='primary' icon={<EditOutlined />} size='large' style={{ marginTop: '30px', marginLeft: '30%', marginRight: '30%', width: '25%' }}>
          Edit
        </Button>
                    </Row>)}
      <Row />
    </>

  )
}

export default UserInfoDashboard
