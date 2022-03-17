import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.organization.create({
        data: {
            id: 2,
          name: 'Shifa Laboratory ',
          domain: 'Islamabad',
          type: 'Pathology Labs'
        },
      })
//     try {
//     const allUsers = await prisma.organization.findMany()
//     console.log(allUsers)  
//    } catch (error) {
//        console.log(error)
//    } 

}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })