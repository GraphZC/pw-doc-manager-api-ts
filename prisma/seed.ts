import { EmployeeRole, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const admin = await prisma.employee.create({
        data: {
            name: 'Admin',
            username: 'admin',
            password: 'admin',
            role: EmployeeRole.ADMIN,
        }, 
    });
    console.log({ admin });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });