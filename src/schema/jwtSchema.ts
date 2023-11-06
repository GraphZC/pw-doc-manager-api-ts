import { EmployeeRole } from "@prisma/client";

export interface JwtPayload {
    username: string;
    role: EmployeeRole;
    iat: number;
    exp: number;
}
