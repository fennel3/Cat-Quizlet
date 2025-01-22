export interface IDBSettings {
    host: string
  
    port: number
  
    user: string
  
    password: string
  
    database: string
  }
  
//   export const GetDBSettings = (): IDBSettings => {
//     const env = process.env.NODE_ENV
  
//     if (env == 'development')
//         return {
//             host: process.env.DATABASE_HOST,
//             user: process.env.DATABASE_USER,
//             password: process.env.DATABASE_PASSWORD,
//             database: process.env.DATABASE_NAME,
//             port: process.env.DATABASE_PORT || 3306,
//           };
//     else
//       return {
//         host: process.env.host!, //'58.84.143.251',
  
//         port: parseInt(process.env.port!),
  
//         user: process.env.user!,
  
//         password: process.env.password!,
  
//         database: process.env.database!,
//       }
//   }

  export function GetDBSettings() {
  return {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT || 3306,
  };
}