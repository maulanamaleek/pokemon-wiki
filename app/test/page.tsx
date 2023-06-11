import { prisma } from '@utils/prisma'
import React from 'react'
console.log('envs', process.env)

const TestPage = async () => {
  const user = await prisma.user.findFirst({
    where: {
      email: 'test@test.com'
    }
  })
  return (
    <div>TestPage {user?.email} {user?.avatarUrl}</div>
  )
}

export default TestPage