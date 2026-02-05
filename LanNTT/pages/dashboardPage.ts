
export class DashBoardPage{
    async  verifyLoginSuccess():Promise<void>{
        console.log(`Dang chay ham verifyLoginSuccess`)
        return new Promise (resolve => setTimeout(resolve,2000));
    }
}
