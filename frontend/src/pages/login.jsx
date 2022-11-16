import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset)

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }


  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
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