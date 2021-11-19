import { PrismaClient } from '@prisma/client'
import faker from 'faker'

const prisma = new PrismaClient()

async function main() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
  await prisma.item.deleteMany()
  await prisma.member.deleteMany()
  for (let i = 0; i < 5; i++) {
    await prisma.member.create({
      data: {
        email: `${faker.internet.email()}`,
        firstName: `${faker.name.firstName()}`,
        lastName: `${faker.name.lastName()}`,
        password: `${faker.random.alphaNumeric()}`,
        items: {
          create: [
            {
              closet: 'MINE',
              season: 'SPRING',
              color: 'WHITE',
              apparelType: 'BOTTOM',
              shortDesc: `${faker.lorem.words(3)}`,
              longDesc: `${faker.lorem.words(7)}`,
              size: 'M',
            },
            {
              closet: 'MINE',
              season: 'SPRING',
              color: 'BLACK',
              apparelType: 'TOP',
              shortDesc: `${faker.lorem.words(3)}`,
              longDesc: `${faker.lorem.words(7)}`,
              size: 'M',
            },
            {
              closet: 'MINE',
              season: 'SPRING',
              color: 'BLACK',
              apparelType: 'TOP',
              shortDesc: `${faker.lorem.words(3)}`,
              longDesc: `${faker.lorem.words(7)}`,
              size: 'M',
            },
          ],
        },
      },
    })
  }
}

main()
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect
  })
