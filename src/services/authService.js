import { storageService } from './storageService'

const USERS_KEY = 'solarcheck_users'
const SESSION_KEY = 'solarcheck_session'

const demoUser = {
  id: 'demo-user',
  name: 'Usuario Demo',
  email: 'demo@solarcheck.cl',
  password: 'Demo1234',
}

const ensureDemoUser = () => {
  const users = storageService.get(USERS_KEY, [])
  const exists = users.some((user) => user.email === demoUser.email)

  if (!exists) {
    storageService.set(USERS_KEY, [...users, demoUser])
  }
}

const register = ({ name, email, password }) => {
  ensureDemoUser()

  const users = storageService.get(USERS_KEY, [])
  const exists = users.some((user) => user.email === email)

  if (exists) {
    throw new Error('Ya existe una cuenta registrada con este correo.')
  }

  const newUser = {
    id: crypto.randomUUID(),
    name,
    email,
    password,
  }

  storageService.set(USERS_KEY, [...users, newUser])
  storageService.set(SESSION_KEY, newUser)

  return newUser
}

const login = ({ email, password }) => {
  ensureDemoUser()

  const users = storageService.get(USERS_KEY, [])
  const user = users.find(
    (item) => item.email === email && item.password === password
  )

  if (!user) {
    throw new Error('Correo o contraseña incorrectos.')
  }

  storageService.set(SESSION_KEY, user)

  return user
}

const logout = () => {
  storageService.remove(SESSION_KEY)
}

const getSession = () => {
  ensureDemoUser()
  return storageService.get(SESSION_KEY, null)
}

export const authService = {
  register,
  login,
  logout,
  getSession,
}