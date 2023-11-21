import React from 'react'
import Layout from '../../Components/Layout'

const MyAccount = () => {
  return (
    <Layout>
      <div className='flex flex-col justify-center items-center w-96 border border-black rounded-md p-4'>
        <span className='font-bold text-center '>My Account</span>
        <hr className='w-full mt-2 border-black opacity-20' />
        <div className='flex justify-between mt-4 w-full'>
          <div className='flex flex-col rounded-l-sm w-1/2'>
            <div className='font-bold text-center'>Name: &nbsp;</div>
            <span className='font-bold text-center'>Email: &nbsp;</span>
            <span className='font-bold text-center'>Adress: &nbsp;</span>
          </div>
          <div className='flex flex-col w-full'>
            <span className='font-light text-center'>Andrés Gutiérrez</span>
            <span className='font-light text-center'>tati@gmail.com</span>
            <span className='font-light text-center'>street fake 1</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MyAccount
