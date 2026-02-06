/*
Yêu cầu 1: Type Alias
Tạo một Type Alias tên là Status gồm các giá trị: "active" | "inactive" | "suspended".

Tạo một Type Alias tên là ContactInfo là một Object gồm: email: string và phone: number.
*/
/*
Yêu cầu 3: Thực thi
Tạo một mảng employeeList kiểu IEmployee[].

Thêm ít nhất 2 nhân viên vào mảng (với đầy đủ các thông tin lồng nhau như email, phone).

Viết một hàm printEmployeeStatus(emp: IEmployee) để in ra: "Nhân viên: [name] - Trạng thái: [status] - Email: [contact.email]"
*/
var employeeList = [];
var employee1 = { id: 1, name: "Lan1", role: "QA1", status: "active", contact: { email: "ngo.thi.thuy.lan+1@sun-asterisk.com", phone: 1123456789 } };
var employee2 = { id: 2, name: "Lan2", role: "QA2", status: "inactive", contact: { email: "ngo.thi.thuy.lan+2@sun-asterisk.com", phone: 2123456789 } };
var employee3 = { id: 3, name: "Lan3", role: "QA3", status: "suspended", contact: { email: "ngo.thi.thuy.lan+3@sun-asterisk.com", phone: 3123456789 } };
employeeList.push(employee1, employee2, employee3);
function printEmployeeStatus(emp) {
    console.log("Nh\u00E2n vi\u00EAn: ".concat(emp.name, " - Tr\u1EA1ng th\u00E1i: ").concat(emp.status, " - Email: ").concat(emp.contact.email));
}
printEmployeeStatus(employee1);
