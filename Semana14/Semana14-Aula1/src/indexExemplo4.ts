const fileName: string = 'users.json'

try {
    const data: Buffer = fs.readFileSync(fileName)
    const treatedData: string = data.toString()
    const users: any = JSON.parse(treatedData);
    const usersInfo: string [] = users.map((user: any) => `${user.userName} - ${user.email}`)


}