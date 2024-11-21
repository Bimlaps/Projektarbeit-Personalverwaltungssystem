import React from 'react'
import SumCard from './SumCard'
import { FaBuilding, FaUsers, FaMoneyBillWave, FaFileAlt, FaCheckCircle, FaHourglassHalf, FaTimesCircle,  } from 'react-icons/fa'

const AdminSum = () => {
  return (
    <div className='p-6'>
        <h3 className='text-2xl font-bold'>Dashboard Overview</h3>

        <div className='grid grid-cols-1 md:grid-cols3 gap-4 mt-6'>
            <SumCard icon={<FaUsers />} text="Total Staff" number={15} color="bg-teal-500"/>
            <SumCard icon={<FaBuilding />} text="Total Departments" number={5} color="bg-blue-500"/>
            <SumCard icon={<FaMoneyBillWave />} text="Salary" number="3800€" color="bg-teal-500"/>
        </div>

        <div className='mt-12'>
          <h4 className='text-center text-2xl font-bold'>Anwesenheit</h4>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
          <SumCard icon={<FaFileAlt />} text="Urlaub beantragt" number={15} color="bg-teal-500"/>
          <SumCard icon={<FaCheckCircle />} text="Urlaub genehmigt" number={15} color="bg-orange-500"/>
          <SumCard icon={<FaHourglassHalf />} text="Urlaub in Bearbeitung" number={15} color="bg-blue-500"/>
          <SumCard icon={<FaTimesCircle />} text="Urlaub abgelehnt" number={15} color="bg-red-500"/>
          </div>

        </div>
        
    </div>
  )
}

export default AdminSum