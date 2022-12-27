import React from 'react'
import { UserOutlined, UserAddOutlined } from '@ant-design/icons'
import { message, Button, Layout, Input, Row, Form, theme } from 'antd'
import { courierSignUpAPI } from '../../ApiHelper/backend_helper'

const { Header, Content, Footer, Sider } = Layout

const { TextArea } = Input

const LoginPage = ({ changePage }) => {
  const [form] = Form.useForm()

  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const customerSignUp = (id) => {
    changePage('Customer Sign-up')
  }

  const goToLoginPage = (id) => {
    changePage('Login')
  }

  const submitHandler = (values) => {
    courierSignUpAPI(values)
      .then((data) => {
        // setColumnData(colData)
        message.success(`Your Application has been submitted successfully. Your courier ID = ${data}`)
      })
      .catch(e => {
        message.error(e.message)
        console.log(e)
      })
      .finally(() => {
        form.resetFields()
      })

    changePage('Login')
  }

  return (
    <Layout style={{ backgroundColor: '#3c9ce4' }}>
      <Header className='header' style={{ backgroundColor: '#3c9ce4' }}>
        <Button onClick={() => goToLoginPage()} icon={<UserOutlined />} style={{ marginRight: 30 }}>
          Login
        </Button>
        <Button onClick={() => customerSignUp()} icon={<UserAddOutlined />} style={{ marginRight: 20 }}>
          User Sign-up
        </Button>

      </Header>
      <Content
        style={{
          padding: '0 80px'
        }}
      >

        <Layout
          style={{
            margin: '108px 600px',
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
              marginLeft: '180px',
              marginTop: '10px'
            }}
            >
              <svg width='212' height='200' viewBox='0 0 212 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M192.125 31.25H19.875C16.2105 31.25 13.25 34.043 13.25 37.5V162.5C13.25 165.957 16.2105 168.75 19.875 168.75H192.125C195.789 168.75 198.75 165.957 198.75 162.5V37.5C198.75 34.043 195.789 31.25 192.125 31.25ZM183.844 154.688H28.1562V45.3125H183.844V154.688Z' fill='#1890FF' />
                <path opacity='0.1' d='M28.1562 154.688H183.844V45.3125H28.1562V154.688ZM125.875 82.0312C125.875 81.1719 126.082 80.4688 126.351 80.4688H151.899C152.168 80.4688 152.375 81.1719 152.375 82.0312V91.4062C152.375 92.2656 152.168 92.9688 151.899 92.9688H126.351C126.082 92.9688 125.875 92.2656 125.875 91.4062V82.0312ZM125.875 110.156C125.875 109.297 126.537 108.594 127.345 108.594H165.791C166.598 108.594 167.261 109.297 167.261 110.156V119.531C167.261 120.391 166.598 121.094 165.791 121.094H127.345C126.537 121.094 125.875 120.391 125.875 119.531V110.156ZM44.7602 129.805C45.3398 119.395 51.3645 110.352 60.2047 105.176C56.4574 101.27 54.1801 96.1133 54.1801 90.4297C54.1801 78.3398 64.5109 68.5547 77.2434 68.5547C89.9758 68.5547 100.307 78.3398 100.307 90.4297C100.307 96.1133 98.0293 101.289 94.282 105.176C103.102 110.332 109.147 119.395 109.727 129.805C109.738 130.016 109.703 130.228 109.625 130.427C109.547 130.625 109.427 130.807 109.272 130.96C109.117 131.114 108.93 131.236 108.724 131.319C108.517 131.403 108.295 131.446 108.07 131.445H98.9816C98.1121 131.445 97.4082 130.801 97.3461 129.98C96.5594 120.117 87.8227 112.305 77.2227 112.305C66.6227 112.305 57.8859 120.117 57.0992 129.98C57.0371 130.801 56.3332 131.445 55.4637 131.445H46.375C45.4227 131.445 44.6773 130.703 44.7602 129.805Z' fill='#1890FF' />
                <path opacity='0.1' d='M66.5123 90.4297C66.5123 93.1233 67.64 95.7066 69.6473 97.6112C71.6546 99.5159 74.3771 100.586 77.2158 100.586C80.0546 100.586 82.777 99.5159 84.7843 97.6112C86.7916 95.7066 87.9193 93.1233 87.9193 90.4297C87.9193 89.096 87.6425 87.7753 87.1046 86.5431C86.5667 85.3108 85.7783 84.1912 84.7843 83.2481C83.7904 82.305 82.6105 81.5569 81.3119 81.0465C80.0133 80.5361 78.6214 80.2734 77.2158 80.2734C75.8102 80.2734 74.4184 80.5361 73.1198 81.0465C71.8211 81.5569 70.6412 82.305 69.6473 83.2481C68.6534 84.1912 67.8649 85.3108 67.327 86.5431C66.7891 87.7753 66.5123 89.096 66.5123 90.4297Z' fill='#1890FF' />
                <path d='M126.349 92.9688H151.896C152.165 92.9688 152.372 92.2656 152.372 91.4062V82.0312C152.372 81.1719 152.165 80.4688 151.896 80.4688H126.349C126.079 80.4688 125.872 81.1719 125.872 82.0312V91.4062C125.872 92.2656 126.079 92.9688 126.349 92.9688ZM127.342 121.094H165.788C166.595 121.094 167.258 120.391 167.258 119.531V110.156C167.258 109.297 166.595 108.594 165.788 108.594H127.342C126.535 108.594 125.872 109.297 125.872 110.156V119.531C125.872 120.391 126.535 121.094 127.342 121.094ZM46.3724 131.445H55.461C56.3306 131.445 57.0345 130.801 57.0966 129.98C57.8833 120.117 66.62 112.305 77.22 112.305C87.82 112.305 96.5567 120.117 97.3435 129.98C97.4056 130.801 98.1095 131.445 98.979 131.445H108.068C108.292 131.446 108.515 131.403 108.721 131.319C108.928 131.236 109.114 131.114 109.269 130.96C109.424 130.807 109.544 130.625 109.622 130.427C109.701 130.228 109.735 130.016 109.724 129.805C109.144 119.395 103.099 110.332 94.2794 105.176C98.1687 101.142 100.318 95.8823 100.304 90.4297C100.304 78.3398 89.9732 68.5547 77.2407 68.5547C64.5083 68.5547 54.1775 78.3398 54.1775 90.4297C54.1775 96.1133 56.4548 101.27 60.2021 105.176C55.7121 107.801 51.9623 111.412 49.2729 115.7C46.5834 119.989 45.0342 124.828 44.7575 129.805C44.6747 130.703 45.42 131.445 46.3724 131.445ZM77.22 80.2734C83.1204 80.2734 87.9235 84.8242 87.9235 90.4297C87.9235 96.0352 83.1204 100.586 77.22 100.586C71.3196 100.586 66.5165 96.0352 66.5165 90.4297C66.5165 84.8242 71.3196 80.2734 77.22 80.2734Z' fill='#1890FF' />
              </svg>

            </Row>
            <Form
              name='User Info'
              form={form}
              layout='horizontal'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 17 }}
              onFinish={submitHandler}
              autoComplete='off'
              colon
            >
              <Form.Item
                label='Name'
                key='name'
                name='name'
                rules={[{ required: true, message: 'Missing Name' }]}
              >
                <Input maxLength={255} />
              </Form.Item>
              <Form.Item
                label='Email'
                key='email'
                name='email'
                rules={[{ required: true, message: 'Missing Email' }]}
              >
                <Input maxLength={255} />
              </Form.Item>
              <Form.Item
                label='Phone'
                key='phone'
                name='phone'
                rules={[{ required: true, message: 'Missing Phone' }]}
              >
                <Input type='phone' maxLength={255} />
              </Form.Item>
              <Form.Item
                label='Password'
                key='password'
                name='password'
                rules={[{ required: true, message: 'Missing Password' }]}
              >
                <Input type='password' maxLength={255} />
              </Form.Item>
              <Form.Item
                label='Description'
                key='applicationReason'
                name='applicationReason'
                rules={[{ required: true, message: 'Missing Description' }]}
              >
                <TextArea placeholder='Add experience and reason for applying' rows={3} />
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
