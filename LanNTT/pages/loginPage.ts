
export class LoginPage{
    async  gotoLoginPage():Promise<void>{
        console.log(`Dang chay ham gotoLoginPage`)
        return new Promise (resolve => setTimeout(resolve,2000));
    }
    async login(username: string, password: string): Promise <void>{
        console.log(`Dang chay ham login`)
        return new Promise (resolve => setTimeout(resolve,2000));
    }
}
