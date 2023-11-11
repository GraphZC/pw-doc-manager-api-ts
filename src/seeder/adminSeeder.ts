import employee from '@/services/employeeService';
import { EmployeeRole } from '@prisma/client'
const adminSeeder = async () => {
    await employee.createEmployee({
        name: 'Admin',
        username: 'admin',
        password: 'admin',
        role: EmployeeRole.ADMIN
    })
}

export default adminSeeder