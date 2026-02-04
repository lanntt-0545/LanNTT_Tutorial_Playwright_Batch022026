interface IUser{
    name: string;
    email: string;
    isAdmin: boolean;
}

class User implements IUser{
    name: string;
    email: string;
    isAdmin: boolean;
    
    constructor (name :string, email: string, isAdmin: boolean ){
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
    }

    getInfo (): void{
        console.log(`User: ${this.name}, Email: ${this.email}, Admin: ${this.isAdmin}`)
    }
}

const user1= new User ("Lan", "ngo.thi.thuy.lan@sun-asterisk.com",false);
user1.getInfo();


class AdminUser extends User{
    deleteUser(user: User){
        user.name = "";
        user.email = "";
        user.isAdmin = false;
    }
}

const user: User[] = [];
const user2 = new User ("Lan2", "ngo.thi.thuy.lan+2@sun-asterisk.com",false);
const user3 = new User ("Lan3", "ngo.thi.thuy.lan+3@sun-asterisk.com",false);
user.push(user1);
user.push(user2);
user.push(user3);

const adminUser: AdminUser[] = [];
const user4 = new AdminUser ("Lan4", "ngo.thi.thuy.lan+4@sun-asterisk.com",true);
const user5 = new AdminUser ("Lan5", "ngo.thi.thuy.lan+5@sun-asterisk.com",true);
adminUser.push(user4);
adminUser.push(user5);

for(let i = 0; i< user.length; i++){
    user[i].getInfo();
}

for(const i of adminUser){
    i.getInfo();
}