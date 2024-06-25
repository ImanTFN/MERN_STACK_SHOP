import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Ahmed Allaoui',
    email: 'ahmed@email.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'KAMAL Saad',
    email: 'kamal@email.com',
    password: bcrypt.hashSync('123456', 10)
  }
  
]

export default users