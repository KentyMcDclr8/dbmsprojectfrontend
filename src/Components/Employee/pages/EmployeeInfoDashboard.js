
import { Row, Input, Form, Button, message } from 'antd'
import { EditOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'

const EmployeeInfoDashboard = (employee) => {
  const [form] = Form.useForm()
  const [viewMode, setViewMode] = useState(true)

  useEffect(() => {
    console.log('employee = ', employee)
    form.setFieldsValue(employee.employee)
  }, [employee])

  const updateEmployeeInfo = () => {
    // TODO
    message.success('Employee Information Updated Successfully')
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const buttonClickHandler = () => {
    if (viewMode) {
      setViewMode(false)
    } else {
      setViewMode(true)
      updateEmployeeInfo()
    }
  }

  return (
    <>
      <Row className='table-form-comp'>
        <h1 style={{ fontSize: 50 }}>Employee Info</h1>

      </Row>

      <Form
        name='Employee Info'
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
          label='Employee ID'
          key='id'
          name='id'
          initialValue={employee.id}
          rules={[{ required: true, message: 'Missing Employee ID' }]}
        >
          <Input disabled maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Name'
          key='name'
          name='name'
          initialValue={employee.name}
          rules={[{ required: true, message: 'Missing Name' }]}
        >
          <Input disabled={viewMode} maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Email'
          key='email'
          name='email'
          initialValue={employee.email}
          rules={[{ required: true, message: 'Missing Email' }]}
        >
          <Input type='email' disabled={viewMode} maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Phone'
          key='phone'
          name='phone'
          initialValue={employee.phone}
          rules={[{ required: true, message: 'Missing Phone' }]}
        >
          <Input type='phone' disabled={viewMode} maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Password'
          key='password'
          name='password'
          initialValue={employee.password}
          rules={[{ required: true, message: 'Missing Password' }]}
        >
          <Input type='password' disabled={viewMode} maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Position'
          key='position'
          name='position'
          initialValue={employee.position}
          rules={[{ required: true, message: 'Missing Position' }]}
        >
          <Input disabled maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Status'
          key='status'
          name='status'
          initialValue={employee.status}
          rules={[{ required: true, message: 'Missing Status' }]}
        >
          <Input disabled maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Salary'
          key='salary'
          name='salary'
          initialValue={employee.salary}
          rules={[{ required: true, message: 'Missing Salary' }]}
        >
          <Input disabled maxLength={255} />
        </Form.Item>
        <Form.Item
          label='Start Date'
          key='startDate'
          name='startDate'
          initialValue={employee.startDate}
          rules={[{ required: true, message: 'Missing Start Date' }]}
        >
          <Input disabled maxLength={255} />
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

export default EmployeeInfoDashboard
