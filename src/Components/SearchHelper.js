
import { Row, Col, Modal, Button, Select, message, Popconfirm, Tooltip, Skeleton, Space, Table, Input, Radio } from 'antd'
import { FilterOutlined, PlusOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
// import { v4 as uuidv4 } from 'uuid'
import { useEffect, useMemo, useCallback, useState } from 'react'

const handleSearch = ({ selectedKeys, confirm, columnName, columnType, searchHandler }) => {
  confirm({
    filtered: true,
    closeDropdown: true
  })

  searchHandler(selectedKeys)
}

const handleReset = ({ clearFilters, confirm, searchHandler }) => {
  clearFilters()
  confirm({
    closeDropdown: true
  })
  searchHandler({})
}

export const getSearchProps = ({ columnName, columnType, searchHandler }) => {
  // if columnType is boolean, dropdown is an option group
  if (columnType === 'boolean') {
    return {
      sorter: (a, b, sortOrder) => {
        // sorting is handled in handleChange function (provided by antd, attached directly to table)
      },
      sortDirections: ['descend', 'ascend'],
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters
      }) => (
        <div className='p-3'>
          <div className='pb-3'>
            <Radio.Group
              onChange={(e) =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])}
              value={selectedKeys[0]}
            >
              <Space direction='vertical'>
                <Radio value='true'>True</Radio>
                <Radio value='false'>False</Radio>
              </Space>
            </Radio.Group>
          </div>
          <Space>
            <Button
              type='primary'
              onClick={() =>
                handleSearch(selectedKeys, confirm, columnName, columnType, searchHandler)}
              icon={<SearchOutlined />}
              size='medium'
            >
              Search
            </Button>
            <Button
              onClick={() => handleReset(clearFilters, confirm, searchHandler)}
              size='medium'
            >
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <FilterOutlined
          style={{ color: filtered ? '#1890ff' : undefined }}
        />
      )
    }
  }
  // if columnType is NOT boolean, dropdoown is input field
  return {
    sorter: (a, b, sortOrder) => {
      // sorting is handled in handleChange function (provided by antd, attached directly to table)
    },
    sortDirections: ['descend', 'ascend'],
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div className='p-3'>
        <Input
          placeholder={`Search ${columnName}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() =>
            handleSearch(selectedKeys, confirm, columnName, columnType, searchHandler)}
          className='mb-2 d-block'
        />
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Button
            style={{ display: 'flex', alignItems: 'center' }}
            type='primary'
            onClick={() =>
              handleSearch(selectedKeys, confirm, columnName, columnType, searchHandler)}
            icon={<SearchOutlined />}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters, confirm, searchHandler)}>
            Reset
          </Button>
        </div>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    )
  }
}
