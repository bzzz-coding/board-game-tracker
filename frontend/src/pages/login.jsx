import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { name, email, password, password2 } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }


  const onSubmit = (e) => {
    e.preventDefault()
  }



  return (
    <>
      <section className='w-full max-w-xs mx-auto my-6'>
        <div className='flex justify-center text-2xl my-3'>
          <h1 className='mx-auto inline-block align-baseline'>
            <FaSignInAlt className='inline-block align-baseline' /> Login
          </h1>
        </div>

        <p>Login and track games</p>
      </section>

      <section className='w-full max-w-xs mx-auto'>
        <form onSubmit={onSubmit}>
          {/* form group */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group">
              <span>Email</span>
              <input type="email" name="email" value={email} onChange={onChange} className="input input-bordered w-full max-w-xs" />
            </label>

            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <label className="input-group">
              <span>Password</span>
              <input type="password" name="password" value={password} onChange={onChange} className="input input-bordered w-full max-w-xs" />
            </label>
          </div>

          <button type='submit' className="btn btn-outline mt-6 w-full max-w-xs ">Login</button>
        </form>

      </section>
    </>
  )
}
export default Login