import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  // initialize useNavigate
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  // useEffect takes in a function, and a dependency array
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <div>dashboard</div>
  )
}

export default Dashboard