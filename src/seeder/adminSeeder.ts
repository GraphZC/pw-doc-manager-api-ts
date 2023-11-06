import employee from '@/services/employeeService';
import { EmployeeRole } from '@prisma/client'
const adminSeeder = async () => {
    await employee.createEmployee({
        username: 'admin',
        password: 'admin',
        name: 'admin',
        telephone: '0812345678',
        role: EmployeeRole.ADMIN,
    });
}

export default adminSeeder