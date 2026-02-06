/*📝 Bài tập: Quản lý Kho sách (Bookstore Management)
Phần 1: Khai báo biến cơ bản
Bạn hãy tạo một file lab1.ts và thực hiện các yêu cầu sau:

Khai báo các biến sau với kiểu dữ liệu rõ ràng (Explicit Typing):

bookTitle: kiểu chuỗi, giá trị là "Lập trình TypeScript".

bookPrice: kiểu số, giá trị là 150000.

isAvailable: kiểu boolean, giá trị là true.

discount: kiểu any, gán giá trị ban đầu là 10%, sau đó thử gán lại thành chuỗi "10%".

Khai báo hằng số:

STORE_NAME: giá trị là "Sun-Asterisk Book Store". (Thử gán lại giá trị cho hằng số này để xem TS báo lỗi gì).

*/
var bookTitle = "Lập trình TypeScript";
var bookPrice = 150000;
var isAvailable = true;
var discount = "10%";
var STORE_NAME = "Sun-Asterisk Book Store";
// STORE_NAME = "Lan"
/*Phần 2: Làm việc với Mảng và Tuple
Mảng (Array): Tạo một mảng categories chứa danh sách các thể loại sách (ví dụ: "Programming", "Design", "Logic"). Chỉ cho phép mảng này chứa chuỗi.

Tuple: Tạo một biến bookStatus kiểu Tuple để lưu cặp giá trị: [mã kho (số), tình trạng (chuỗi)]. Ví dụ: [101, "In Stock"].
*/
var categories = ["Programming", "Design", "Logic"];
var bookStatus = [101, "In stock"];
/* Phần 3: Kiểu Enum (Liệt kê)
Tạo một enum đặt tên là BookLevel gồm 3 giá trị: BEGINNER, INTERMEDIATE, ADVANCED.

Tạo một biến myLevel và gán giá trị BookLevel.INTERMEDIATE.

In ra màn hình console giá trị của myLevel để xem số thứ tự mặc định của nó là bao nhiêu.
*/
var BookLevel;
(function (BookLevel) {
    BookLevel[BookLevel["BEGINNER"] = 0] = "BEGINNER";
    BookLevel[BookLevel["INTERMEDIATE"] = 1] = "INTERMEDIATE";
    BookLevel[BookLevel["ADVANCED"] = 2] = "ADVANCED";
})(BookLevel || (BookLevel = {}));
var myLevel = BookLevel.INTERMEDIATE;
console.log("Gia tri cua myLevel = ".concat(myLevel));
/* Phần 4: Hàm và Kiểu trả về
Viết một hàm calculateTotal:

Nhận vào 2 tham số: price (số) và quantity (số).

Kiểu trả về của hàm phải là string.

Nội dung: Tính tổng tiền và trả về chuỗi: "Tổng cộng: XXX VND".
*/
function calculateTotal(price, quantity) {
    var hoaDon = "T\u1ED5ng c\u1ED9ng: ".concat(price * quantity, " VND");
    console.log(hoaDon);
    return hoaDon;
}
calculateTotal(1000, 2);
/*Phần 5: Tổng hợp kịch bản thực tế
Hãy viết một đoạn code ngắn mô phỏng việc mua sách:

Tạo một mảng các đối tượng sách (Dùng mảng hoặc any[] nếu chưa học Interface).

Sử dụng Template String (dấu backtick `) để in ra thông tin một cuốn sách theo mẫu: "Sách: [Tên sách] - Giá: [Giá] - Trạng thái: [Còn hàng/Hết hàng]"
*/
var BookStatus;
(function (BookStatus) {
    BookStatus["INSTOCK"] = "In Stock";
    BookStatus["OUTSTOCK"] = "Out of Stock";
})(BookStatus || (BookStatus = {}));
var Book = /** @class */ (function () {
    function Book(name, price, status) {
        this.name = "";
        this.price = 0;
        this.status = false;
        this.desciption = "";
        this.name = name;
        this.price = price;
        this.status = status;
    }
    Book.prototype.getInfo = function () {
        if (this.status === true) {
            console.log("Sach: ".concat(this.name, " - Gia: ").concat(this.price, " - Trang thai: ").concat(BookStatus.INSTOCK));
        }
        if (this.status === false) {
            console.log("Sach: ".concat(this.name, " - Gia: ").concat(this.price, " - Trang thai: ").concat(BookStatus.OUTSTOCK));
        }
    };
    return Book;
}());
var book1 = [
    new Book("Sach 1", 1, false),
    new Book("Sach 2", 2, true),
];
book1.forEach(function (element) {
    element.getInfo();
});
/*
Union Types: Khai báo biến bookId có thể là số HOẶC chuỗi (Dùng dấu |).

Literal Types: Khai báo biến shippingMethod chỉ được phép nhận 1 trong 2 giá trị: "Standard" hoặc "Express". Nếu gán giá trị khác (ví dụ "Fast") thì TS phải báo lỗi.

Optional Property: Trong class Book, hãy thêm một thuộc tính description nhưng không bắt buộc phải có khi khởi tạo (Dùng dấu ?).
*/
var bookId;
var shippingMethod;
// shippingMethod = "Fast";
