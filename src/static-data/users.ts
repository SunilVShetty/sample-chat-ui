export interface User {
    name: string;
    email: string;
    password: string;
}

const Users: User[] = [
    {name: 'Sunil V', email: 'sunilvshetty@outlook.com', password: 'Sunil@1234'},
    {name: 'Amit Kumar', email: 'amitkumar@gmail.com', password: 'Amit@1234'},
]

export { Users };