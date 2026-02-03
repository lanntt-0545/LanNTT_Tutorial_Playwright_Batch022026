const userName: string = "Lan";
const age : number = 10;
const isActive: boolean = false;
const roles: string[]=["User"];
const user: {name: string, email: string, isAdmin: boolean} = {name:"Lan",email:"ngo.thi.thuy.lan@sun-asterisk.com", isAdmin:false};
console.log(`User: (email:  ${user.email}, Roles: ${roles}, Active: ${isActive})`);
function checkage(ageInput: number): void{
    if(ageInput >= 18){
        console.log(`Adult`);
    }else{
        console.log(`Under 18`)
    }
}
checkage(age);

