import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// todo: add seeder for other table
async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'test@test.com' },
    update: {},
    create: {
      id: 1,
      email: 'test@test.com',
      avatarUrl: 'avatar url'
    },
  })
  console.log({ user })
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })