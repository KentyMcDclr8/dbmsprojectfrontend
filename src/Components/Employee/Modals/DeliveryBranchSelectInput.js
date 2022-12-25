import { useEffect, useState, useRef } from 'react'
import { Modal, Table, message, Typography, Input, Button, Space } from 'antd'
// import { getMessageResourceKey } from '@/helper/backend_helper'
import { SearchOutlined, CaretDownOutlined } from '@ant-design/icons'

const DeliveryBranchSelectInput = ({ value, onChange }) => {
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
      // setIsLoading(true)
      // getRecipients()
      //   .then(data => {
      //     console.log('dataKey', data)

      //     const colData = data.data.map(d => ({
      //       ...d,
      //       id: d.id,
      //       key: d.id
      //     }))

      //     setData(colData)
      //   })
      //   .catch(e => {
      //     message.error('Error has occurred! ' + e.message)
      //   })
      //   .finally(() => {
      //     setIsLoading(false)
      //   })
      setData([
        { name: 'ather', id: 1, email: 'atherilyas@gmail.com', phone: '+90 552 717 46 33', address: 'Bilkent, Ankara' },
        { name: 'ather', id: 12, email: 'atherilyas@gmail.com', phone: '+90 552 717 46 33', address: 'Bilkent, Ankara' },
        { name: 'ather', id: 13, email: 'atherilyas@gmail.com', phone: '+90 552 717 46 33', address: 'Bilkent, Ankara' },
        { name: 'ather', id: 142, email: 'atherilyas@gmail.com', phone: '+90 552 717 46 33', address: 'Bilkent, Ankara' },
        { name: 'ather', id: 124, email: 'atherilyas@gmail.com', phone: '+90 552 717 46 33', address: 'Bilkent, Ankara' },
        { name: 'ather', id: 112, email: 'atherilyas@gmail.com', phone: '+90 552 717 46 33', address: 'Bilkent, Ankara' },
        { name: 'ather', id: 1111, email: 'atherilyas@gmail.com', phone: '+90 552 717 46 33', address: 'Bilkent, Ankara' },
        { name: 'ather', id: 1231, email: 'atherilyas@gmail.com', phone: '+90 552 717 46 33', address: 'Bilkent, Ankara' }
      ])
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
      title: 'Address',
      id: 'address',
      dataIndex: 'address',
      key: 'address',
      name: 'address',
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
        <span>{value || <div style={{ color: '#dcdcdc' }}>Select Delivery Branch </div>}</span>
        <span>
          <CaretDownOutlined style={{ color: '#d9d9d9' }} />
        </span>
      </div>
      <Modal
        title='Select Delivery Branch '
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

export default DeliveryBranchSelectInput
