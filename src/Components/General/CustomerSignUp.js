import React from 'react'
import { UserOutlined, IdcardOutlined } from '@ant-design/icons'
import { Button, Layout, Input, Row, Form, theme, message } from 'antd'
import { customerSignUpAPI } from '../../ApiHelper/backend_helper'

const { Header, Content, Footer, Sider } = Layout

const CustomerSignUp = ({ changePage }) => {
  const [form] = Form.useForm()

  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const goToLoginPage = (id) => {
    changePage('Login')
  }

  const courierSignUp = (id) => {
    changePage('Courier Sign-up')
  }

  const submitHandler = (values) => {
    //
    customerSignUpAPI(values)
      .then((data) => {
        // setColumnData(colData)
        message.success(`User signed up successfully. Your user ID = ${data}`)
      })
      .catch(e => {
        message.error(e.message)
        console.log(e)
      })
      .finally(() => {
        form.resetFields()
      })

    console.log('Login')
    changePage('Login')
  }

  return (
    <Layout style={{ backgroundColor: '#3c9ce4' }}>
      <Header className='header' style={{ backgroundColor: '#3c9ce4' }}>
        <Button onClick={() => goToLoginPage()} icon={<UserOutlined />} style={{ marginRight: 30 }}>
          Login
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
            margin: '63px 550px',
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
              marginLeft: '240px',
              marginTop: '10px'
            }}
            >
              <svg width='171' height='165' viewBox='0 0 171 165' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M166.5 82.5C166.5 125.428 130.388 160.5 85.5 160.5C40.6121 160.5 4.5 125.428 4.5 82.5C4.5 39.5719 40.6121 4.5 85.5 4.5C130.388 4.5 166.5 39.5719 166.5 82.5Z' fill='white' stroke='#1890FF' stroke-width='9' />
                <path d='M101.9 95.3617C104.287 94.0795 107.019 93.3496 109.929 93.3496H109.939C110.235 93.3496 110.373 92.9945 110.156 92.7973C107.13 90.0817 103.673 87.8884 99.9277 86.3072C99.8883 86.2875 99.8488 86.2776 99.8094 86.2579C105.934 81.8096 109.919 74.5798 109.919 66.4229C109.919 52.9102 98.9907 41.9619 85.5076 41.9619C72.0245 41.9619 61.1059 52.9102 61.1059 66.4229C61.1059 74.5798 65.0906 81.8096 71.2256 86.2579C71.1861 86.2776 71.1467 86.2875 71.1072 86.3072C66.6983 88.1714 62.7432 90.8443 59.3403 94.257C55.9571 97.6341 53.2637 101.637 51.4102 106.044C49.5867 110.358 48.6025 114.981 48.5104 119.665C48.5078 119.77 48.5263 119.875 48.5647 119.973C48.6032 120.071 48.6609 120.16 48.7345 120.236C48.808 120.311 48.8959 120.371 48.9929 120.412C49.09 120.453 49.1942 120.474 49.2995 120.474H55.2076C55.6317 120.474 55.9868 120.128 55.9967 119.704C56.1939 112.09 59.2417 104.959 64.6369 99.5536C70.2097 93.9611 77.6268 90.8838 85.5175 90.8838C91.11 90.8838 96.4756 92.4323 101.101 95.3321C101.22 95.4068 101.357 95.4488 101.497 95.454C101.637 95.4592 101.776 95.4274 101.9 95.3617ZM85.5175 83.3877C81.0001 83.3877 76.749 81.6222 73.5434 78.4166C71.9663 76.8435 70.7159 74.9739 69.8644 72.9154C69.013 70.857 68.5772 68.6504 68.5822 66.4229C68.5822 61.8956 70.3477 57.6347 73.5434 54.4291C76.7391 51.2235 80.9902 49.458 85.5175 49.458C90.0447 49.458 94.2859 51.2235 97.4915 54.4291C99.0687 56.0022 100.319 57.8718 101.171 59.9303C102.022 61.9887 102.458 64.1953 102.453 66.4229C102.453 70.9501 100.687 75.211 97.4915 78.4166C94.2859 81.6222 90.0349 83.3877 85.5175 83.3877ZM121.795 106.862H113.509V98.5771C113.509 98.1432 113.154 97.7881 112.72 97.7881H107.197C106.763 97.7881 106.408 98.1432 106.408 98.5771V106.862H98.1227C97.6888 106.862 97.3337 107.217 97.3337 107.651V113.175C97.3337 113.609 97.6888 113.964 98.1227 113.964H106.408V122.249C106.408 122.683 106.763 123.038 107.197 123.038H112.72C113.154 123.038 113.509 122.683 113.509 122.249V113.964H121.795C122.229 113.964 122.584 113.609 122.584 113.175V107.651C122.584 107.217 122.229 106.862 121.795 106.862Z' fill='#1890FF' />
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
                label='Building No'
                key='buildingNumber'
                name='buildingNumber'
                rules={[{ required: true, message: 'Missing Building No' }]}
              >
                <Input maxLength={255} />
              </Form.Item>
              <Form.Item
                label='Street No'
                key='streetNumber'
                name='streetNumber'
                rules={[{ required: true, message: 'Missing Street No' }]}
              >
                <Input maxLength={255} />
              </Form.Item>
              <Form.Item
                label='City'
                key='city'
                name='city'
                rules={[{ required: true, message: 'Missing City' }]}
              >
                <Input maxLength={255} />
              </Form.Item>
              <Form.Item
                label='Province'
                key='province'
                name='province'
                rules={[{ required: true, message: 'Missing Province' }]}
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
export default CustomerSignUp
