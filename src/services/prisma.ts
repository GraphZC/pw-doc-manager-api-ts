import { PrismaClient } from '@prisma/client'

class Prisma {
    private static instance: PrismaClient = new PrismaClient()
    
    private constructor() {}
    
    public static client(): PrismaClient {
        return Prisma.instance
    }
}

export default Prisma