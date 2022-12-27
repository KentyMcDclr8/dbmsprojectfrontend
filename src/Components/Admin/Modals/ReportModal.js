import { useEffect, useState, useRef } from 'react'
import { Modal, Table, message, Tooltip, Input, Button, Space } from 'antd'
// import { getMessageResourceKey } from '@/helper/backend_helper'
import { ExpandOutlined, CaretDownOutlined } from '@ant-design/icons'

const ReportModal = ({ onChange, columns, data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Pagination
  const defaultPageSize = 10
  const [totalCount, setTotalCount] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPageSize, setCurrentPageSize] = useState(defaultPageSize)

  useEffect(() => {
    // setTotalCount(3)
    console.log(' report modal data', data)
    console.log(' isModalVisible', isModalVisible)
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
  }

  return (
    <>
      <Tooltip
        title='View Report'
      >
        <ExpandOutlined style={{ marginLeft: '10px', fontSize: '170%', color: 'green' }} onClick={() => showModal()} />
      </Tooltip>
      <Modal
        title='Report'
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

export default ReportModal
