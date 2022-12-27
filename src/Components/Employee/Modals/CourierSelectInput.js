import { useEffect, useState, useRef } from 'react'
import { Modal, Table, message, Typography, Input, Button, Space } from 'antd'
// import { getMessageResourceKey } from '@/helper/backend_helper'
import { SearchOutlined, CaretDownOutlined } from '@ant-design/icons'
import { getAllCourier } from '../../../ApiHelper/backend_helper'

const CourierSelectInput = ({ value, onChange }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Pagination
  const defaultPageSize = 10
  const [totalCount, setTotalCount] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPageSize, setCurrentPageSize] = useState(defaultPageSize)

  useEffect(() => {
    if (isModalVisible) {
      getAllCourier()
        .then((data) => {
          setData(data)
        })
        .catch(e => {
          message.error(e.message)
          console.log(e)
        })
        .finally(() => {
        })
    }
  }, [isModalVisible])

  useEffect(() => {
    setTotalCount(data.length)
    setCurrentPage(1)
  }, [data])

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    clear()
  }

  const handleItemClick = item => {
    onChange?.(item.id)
    clear()
  }

  const clear = () => {
    setIsModalVisible(false)
    setData([])
  }

  // const data
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      id: 'id',
      name: 'id',
      type: 'number'
    },
    {
      title: 'Name',
      id: 'name',
      dataIndex: 'name',
      key: 'name',
      name: 'name',
      type: 'varchar'
    },
    {
      title: 'Phone',
      id: 'phone',
      dataIndex: 'phone',
      key: 'phone',
      name: 'phone',
      type: 'number'
    },
    {
      title: 'Email',
      id: 'email',
      dataIndex: 'email',
      key: 'email',
      name: 'email',
      type: 'varchar'
    }
  ]

  return (
    <>
      <div
        className='ant-input'
        style={{
          display: 'flex',
          padding: '5px',
          borderColor: '#dcdcdc',
          borderStyle: 'block',
          borderWidth: '1px',

          justifyContent: 'space-between',
          border: 'solid 1px #dcdcdc',
          borderRadius: '5px',
          background: '#fff'
        }}
        onClick={showModal}
        // border: solid 1px gray;
        // margin: 5px;
      >
        <span>{value || <div style={{ color: '#dcdcdc' }}>Select Courier </div>}</span>
        <span>
          <CaretDownOutlined style={{ color: '#d9d9d9' }} />
        </span>
      </div>
      <Modal
        title='Select Courier '
        visible={isModalVisible}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: 'none' } }}
        width='70vw'
      >
        {data && (
          <Table
            loading={isLoading}
            pagination={{
              showSizeChanger: true,
              pageSizeOptions: [10, 20, 50, 100],
              pageSize: currentPageSize,
              total: totalCount,
              current: currentPage,
              showTotal: (total) => <span style={{ color: 'GrayText' }}>(Total {total} items)</span>,
              onChange: (pageIndex, pageSize) => {
                setCurrentPage(pageIndex)
                setCurrentPageSize(pageSize)
              }
            }}
            columns={columns}
            dataSource={data}
            size='small'
            style={{ width: '100%' }}
            scroll={{ x: 1300 }}
            onRow={(record, rowIndex) => {
              return {
                onClick: event => {
                  handleItemClick(record)
                } // click row
              }
            }}
          />
        )}
      </Modal>
    </>
  )
}

export default CourierSelectInput
