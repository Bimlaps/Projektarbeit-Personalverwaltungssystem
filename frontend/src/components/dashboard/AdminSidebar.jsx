import React from 'react'
import {NavLink} from 'react'
import {FaTachometerAlt, FaBuilding, FaUsers, FaCogs, FaMoneyBillWave, FaCalendarAlt} from 'react-icons/fa'

const AdminSidebar = () => {
  return (
    <div className="bg-gray-600 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w64">
        <div className='bg-teal-600 h-12 flex items-center justify-center'>
            <h3 className='text-2xl text-center font-pacific'>Staff</h3>
        </div>
        <div className="px-4">
            <NavLink to="admin-dashboard"
                className={({ isActive }) => `${isActive ? "bg-teal-400" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`}
                end
                >

                <FaTachometerAlt />
                <span>Dashboard</span>
            </NavLink>
            <NavLink to="admin-dashboard"
                className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                <FaUsers />
                <span>Staff</span>
            </NavLink>
            <NavLink to="admin-dashboard/departments"
                className={({ isActive }) => `${isActive ? "bg-teal-400" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`}>

                <FaBuilding />
                <span>Department</span>
            </NavLink>
            <NavLink to="admin-dashboard"
                className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                <FaCalendarAlt />
                <span>Anwesenheit</span>
            </NavLink>
            <NavLink to="admin-dashboard"
                className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                <FaMoneyBillWave />
                <span>Salary</span>
            </NavLink>
            <NavLink to="admin-dashboard"
                className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                <FaCogs />
                <span>Setting</span>
            </NavLink>
        </div>
    </div>
  )
}

export default AdminSidebar