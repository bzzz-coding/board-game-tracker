import { useState, useEffect } from 'react'
// useSelector to select something from state, useDispatch to dispatch a function such as register, or reset
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

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

    if(password !== password2) {
      toast.error('Passwords do not match')
    } else {
      // comes from the form
      const userData = {
        name,
        email,
        password
      }
      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }


  return (
    <>
      <section className='w-full max-w-xs mx-auto my-6'>
        <div className='flex justify-center text-2xl my-3'>
          <h1 className='mx-auto inline-block align-baseline'>
            <FaUser className='inline-block align-baseline' /> Register
          </h1>
        </div>

        <p>Please create an account</p>
      </section>

      <section className='w-full max-w-xs mx-auto'>
        <form onSubmit={onSubmit}>
          {/* form group */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <span>Name</span>
              <input type="text" name="name" value={name} onChange={onChange} className="input input-bordered w-full max-w-xs" />
            </label>

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

            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <label className="input-group">
              <span>Password</span>
              <input type="password" name="password2" value={password2} onChange={onChange} className="input input-bordered w-full max-w-xs" />
            </label>
          </div>

          <button type='submit' className="btn btn-outline mt-6 w-full max-w-xs ">Register</button>
        </form>

      </section>
    </>
  )
}

export default Register