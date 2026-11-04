import { Navigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext.jsx'

function RotaProtegida({ children }) {
    const { usuario } = useAuth()

    if (!usuario) {
        return <Navigate to="/login" replace/>
    }

    return children
}

export default RotaProtegida