import Layout from '../../Components/Layout'

const SignIn = () => {
  return (
    <Layout>
      <div className='flex flex-col justify-center items-center w-96 border border-black rounded-md p-4'>
        <span className='font-bold text-center'>Sign in</span>
        <hr className='w-full mt-2 border-black opacity-20' />
        <div className='flex flex-col gap-3 justify-center items-center mt-4 w-full'>
          <input type="text" placeholder='email' className='border border-gray-400 p-1 rounded w-3/4 outline-none' />
          <input type="text" placeholder='password' className='border border-gray-400 p-1 rounded w-3/4 outline-none' />
          <button className='bg-black text-white w-3/4 rounded p-1'>Sign in</button>
          <a href="" className='mt-1 font-medium'>Forgot password?</a>
        </div>
        <hr className='w-full my-2 border-black opacity-20' />
        <button className='bg-black text-white w-3/4 rounded p-1'>Create new account</button>
      </div>    </Layout>
  )
}

export default SignIn
