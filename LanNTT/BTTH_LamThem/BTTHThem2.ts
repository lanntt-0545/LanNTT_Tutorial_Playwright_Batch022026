/*
Yêu cầu 1: Type Alias
Tạo một Type Alias tên là Status gồm các giá trị: "active" | "inactive" | "suspended".

Tạo một Type Alias tên là ContactInfo là một Object gồm: email: string và phone: number.
*/

type Status = "active" | "inactive" | "suspended";
type ContactInfo = {
    email: string;
    phone: number;
}

/*
Yêu cầu 2: Interface Kế thừa
Tạo interface IPerson gồm: id: number, name: string.

Tạo interface IEmployee kế thừa IPerson, thêm:

role: string

status: Status (Sử dụng Type Alias ở yêu cầu 1)

contact: ContactInfo (Sử dụng Type Alias ở yêu cầu 1)
*/
interface IPerson{
    id: number;
    name: string;
}

interface IEmployee extends IPerson{
    role: string;
    status: Status;
    contact: ContactInfo;
}

/*
Yêu cầu 3: Thực thi
Tạo một mảng employeeList kiểu IEmployee[].

Thêm ít nhất 2 nhân viên vào mảng (với đầy đủ các thông tin lồng nhau như email, phone).

Viết một hàm printEmployeeStatus(emp: IEmployee) để in ra: "Nhân viên: [name] - Trạng thái: [status] - Email: [contact.email]"
*/

const employeeList : IEmployee[]= [];
const employee1 : IEmployee = {id: 1, name: "Lan1", role: "QA1", status: "active", contact: {email: "ngo.thi.thuy.lan+1@sun-asterisk.com", phone: 1123456789}};
const employee2 : IEmployee = {id: 2, name: "Lan2", role: "QA2", status: "inactive", contact: {email: "ngo.thi.thuy.lan+2@sun-asterisk.com", phone: 2123456789}};
const employee3 : IEmployee = {id: 3, name: "Lan3", role: "QA3", status: "suspended", contact: {email: "ngo.thi.thuy.lan+3@sun-asterisk.com", phone: 3123456789}};
employeeList.push(employee1,employee2,employee3);

function printEmployeeStatus(emp: IEmployee): void{

        console.log(`Nhân viên: ${emp.name} - Trạng thái: ${emp.status} - Email: ${emp.contact.email}`) 
}

printEmployeeStatus(employee1);



