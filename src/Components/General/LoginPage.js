import React from 'react'
import { UserAddOutlined, IdcardOutlined } from '@ant-design/icons'
import { message, Button, Layout, Input, Row, Form, theme } from 'antd'
import { login } from '../../ApiHelper/backend_helper'

const { Header, Content, Footer, Sider } = Layout

const LoginPage = ({ changePage, setUserData }) => {
  const [form] = Form.useForm()

  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const customerSignUp = (id) => {
    changePage('Customer Sign-up')
  }

  const courierSignUp = (id) => {
    changePage('Courier Sign-up')
  }

  const loginHandler = (values) => {
    console.log('Logind')
    // Api should return user type

    console.log('Login VALUES = ', values)

    login(values.id, values.password)
      .then(data => {
        // setColumnData(colData)
        console.log('data', data)
        setUserData(data)
        if (data.type == 'Customer') {
          changePage('User')
        } else if (data.type == 'Employee') {
          changePage('Employee')
        } else if (data.type == 'Admin') {
          changePage('Admin')
        } else if (data.type == 'Courier') {
          changePage('Courier')
        }
        message.success('Login Successful')
      })
      .catch(e => {
        console.log('e.message', e)
        if (e.message === 'Courier is not approved') {
          message.error('Courier is not approved yet')
        } else {
          message.error('Invalid User ID or Password')
        }
      })
      .finally(() => {
        form.resetFields()
      })

    // changePage('User')
    // message.success('Login Successful')
  }

  return (
    <Layout style={{ backgroundColor: '#3c9ce4' }}>
      <Header className='header' style={{ backgroundColor: '#3c9ce4' }}>
        <Button onClick={() => customerSignUp()} icon={<UserAddOutlined />} style={{ marginRight: 30 }}>
          User Sign-up
        </Button>
        <Button onClick={() => courierSignUp()} icon={<IdcardOutlined />} style={{ marginRight: 20 }}>
          Courier Sign-up
        </Button>

      </Header>
      <Content
        style={{
          padding: '0 80px'
        }}
      >

        <Layout
          style={{
            margin: '223px 650px',
            background: colorBgContainer
          }}
        >

          <Content
            style={{
              margin: '20px 50px',
              minHeight: 400
            }}
          >
            <Row style={{
              marginBottom: '30px',
              marginLeft: '150px',
              marginTop: '10px'
            }}
            >

              <svg width='171' height='165' viewBox='0 0 171 165' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M166.5 82.5C166.5 125.428 130.388 160.5 85.5 160.5C40.6121 160.5 4.5 125.428 4.5 82.5C4.5 39.5719 40.6121 4.5 85.5 4.5C130.388 4.5 166.5 39.5719 166.5 82.5Z' fill='white' stroke='#1890FF' stroke-width='9' />
                <path d='M119.674 106.57C117.813 102.207 115.113 98.2432 111.724 94.9004C108.345 91.5479 104.343 88.875 99.9376 87.0293C99.8981 87.0098 99.8587 87 99.8192 86.9805C105.964 82.5859 109.959 75.4277 109.959 67.3516C109.959 53.9727 99.0104 43.1328 85.4977 43.1328C71.985 43.1328 61.0368 53.9727 61.0368 67.3516C61.0368 75.4277 65.0314 82.5859 71.1763 86.9902C71.1368 87.0098 71.0974 87.0195 71.0579 87.0391C66.6392 88.8848 62.6741 91.5312 59.2713 94.9102C55.8853 98.2555 53.1857 102.218 51.3215 106.58C49.4901 110.85 48.5024 115.428 48.4118 120.066C48.4092 120.171 48.4276 120.274 48.4661 120.371C48.5046 120.468 48.5623 120.557 48.6358 120.632C48.7094 120.706 48.7972 120.765 48.8943 120.806C48.9913 120.846 49.0956 120.867 49.2009 120.867H55.1188C55.5528 120.867 55.898 120.525 55.9079 120.105C56.1052 112.566 59.1628 105.506 64.5679 100.154C70.1603 94.6172 77.5874 91.5703 85.4977 91.5703C93.4081 91.5703 100.835 94.6172 106.428 100.154C111.833 105.506 114.89 112.566 115.088 120.105C115.097 120.535 115.443 120.867 115.877 120.867H121.795C121.9 120.867 122.004 120.846 122.101 120.806C122.198 120.765 122.286 120.706 122.36 120.632C122.433 120.557 122.491 120.468 122.529 120.371C122.568 120.274 122.586 120.171 122.584 120.066C122.485 115.398 121.509 110.857 119.674 106.57ZM85.4977 84.1484C80.9705 84.1484 76.7096 82.4004 73.504 79.2266C70.2984 76.0527 68.5329 71.834 68.5329 67.3516C68.5329 62.8691 70.2984 58.6504 73.504 55.4766C76.7096 52.3027 80.9705 50.5547 85.4977 50.5547C90.025 50.5547 94.2859 52.3027 97.4915 55.4766C100.697 58.6504 102.463 62.8691 102.463 67.3516C102.463 71.834 100.697 76.0527 97.4915 79.2266C94.2859 82.4004 90.025 84.1484 85.4977 84.1484Z' fill='#1890FF' />
              </svg>

            </Row>
            <Form
              name='User Info'
              form={form}
              layout='horizontal'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 17 }}
              onFinish={loginHandler}
              autoComplete='off'
              colon
            >
              <Form.Item
                label='User ID'
                key='id'
                name='id'
                rules={[{ required: true, message: 'Missing User ID' }]}
              >
                <Input maxLength={255} />
              </Form.Item>
              <Form.Item
                label='Password'
                key='password'
                name='password'
                rules={[{ required: true, message: 'Missing Password' }]}
              >
                <Input type='password' maxLength={255} />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
                <Button
                  style={{
                    marginTop: '10px',
                    backgroundColor: '#1890ff'
                  }}
                  block type='primary' htmlType='submit'
                >
                  Login
                </Button>
              </Form.Item>

            </Form>
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: '#3c9ce4',
          color: 'white'

        }}
      >
        BilCargo ©2022
      </Footer>
    </Layout>
  )
}
export default LoginPage
