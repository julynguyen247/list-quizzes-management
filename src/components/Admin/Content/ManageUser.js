import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.css";
import { CiCirclePlus } from "react-icons/ci";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers,getUserWithPaginate } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
const ManageUser = (props) => {
  const LIMIT_USER=6;
  const[pageCount,setPageCount]=useState(0);
  const [currentPage,setCurrentPage]=useState(1);
  const [listUsers, setlistUsers] = useState([]);
  const [showModalUpdateUser,setShowModalUpdateUser]=useState(false)
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [dataUpdate,setDataUpdate]=useState({})
  const [showModalDeleteUser,setShowModalDeleteUser]=useState(false)
  const [dataDelete,setdataDelete]=useState({})
  useEffect(() => {
    fetchListUsersWithPaginate(1);
  }, []);
  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setlistUsers(res.DT);
    }
  };
  const fetchListUsersWithPaginate = async (page) => {
    let res = await getUserWithPaginate(page,LIMIT_USER);
    if (res.EC === 0) {
      setlistUsers(res.DT.users);
      setPageCount(res.DT.totalPages)
    }
  };

  const handleClickBtnUpdate=(user)=>{
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  }
  const resetUpdateData=()=>{
    setDataUpdate({});
  }
  const handleClickBtnDelete=(user)=>{
    setShowModalDeleteUser(true)
    setdataDelete(user)
  }

  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <CiCirclePlus />
            Add new users
          </button>
        </div>
        <div className="table-users-container">
          {/* <TableUser
           listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnDelete={handleClickBtnDelete}
          /> */}
          <TableUserPaginate
          listUsers={listUsers}
          handleClickBtnUpdate={handleClickBtnUpdate}
          handleClickBtnDelete={handleClickBtnDelete}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          pageCount={pageCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModalUpdateUser
        setShow={setShowModalUpdateUser}
          show={showModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModalDeleteUser
        show={showModalDeleteUser}
        setShow={setShowModalDeleteUser}
        dataDelete={dataDelete}
        fetchListUsers={fetchListUsers}
        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
export default ManageUser;
