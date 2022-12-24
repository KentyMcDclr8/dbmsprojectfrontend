// import AddTableButton from '@/dbDesigner/molecules/AddTableButton'
// import TablesSearchBox from '@/dbDesigner/molecules/TablesSearchBox'
// import { fetchColumnTypesRequest } from '@/store/db/columnTypes/actions'
// import { fetchRelationsRequest } from '@/store/db/relations/actions'
// import { fetchTablesRequest } from '@/store/db/tables/actions'
// import { endInitialLoad } from '@/store/ui/initialLoad/actions'
// import { getMessageResourcesRequest } from '@/store/db/messageResources/actions'
import {
  AppstoreAddOutlined,
  LockOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PartitionOutlined,
  TableOutlined,
  UserAddOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons'
import { Button, Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

const UserSidebar = ({
  handleShowUserInfo,
  handleShowRecipientsList,
  handleShowActiveShipments,
  handleShowShipmentHistory,
  handleShowPaymentDetails,
  handleShowComplaints,
}) => {

  // const dispatch = useDispatch()
  // const { tables } = useSelector((state) => state.FetchTables)
  // const { loaded } = useSelector((state) => state.InitialLoad)
  // const { messageResources } = useSelector((state) => state.GetMessageResources)
  // const [filterTables, setFilterTables] = useState((tables))
  // const [filter, setFilter] = useState('')
  // const [isTableSelected, setIsTableSelected] = useState(false)
  // const defaultTableIndex = 0


  return (
    <>
      {/*<Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 10,
          marginTop:50,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      */}

      <Menu>

        <Menu.Item
          icon={<AppstoreAddOutlined />}
          onClick={() => handleShowUserInfo()}
        >
          User Info
        </Menu.Item>
        <Menu.Item
          icon={<AppstoreAddOutlined />}
          onClick={() => handleShowUserInfo()}
        >
          User Info
        </Menu.Item>
      </Menu>
    </>
  );
};

export default UserSidebar;
