function getFormattedDate(filename: string): string {
    // Trích xuất ngày tháng từ tên tệp
    const dateStr = filename.split('.')[0];

    // Chuyển đổi chuỗi ngày tháng sang đối tượng Date
    const day = parseInt(dateStr.substring(0, 2));
    const month = parseInt(dateStr.substring(2, 4)) - 1; // Tháng trong Date object bắt đầu từ 0
    const year = parseInt(dateStr.substring(4, 8));
    const dateObj = new Date(year, month, day);

    // Mảng chứa các ngày trong tuần bằng tiếng Anh
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Đối tượng ánh xạ ngày trong tuần từ tiếng Anh sang tiếng Việt
    const daysOfWeekMapping: { [key: string]: string } = {
        Sunday: 'CN',
        Monday: 'Th2',
        Tuesday: 'Th3',
        Wednesday: 'Th4',
        Thursday: 'Th5',
        Friday: 'Th6',
        Saturday: 'Th7',
    };

    // Xác định ngày trong tuần và chuyển đổi sang tiếng Việt
    const dayOfWeek = daysOfWeekMapping[daysOfWeek[dateObj.getDay()]];

    // Định dạng kết quả
    const formattedDate = `${dayOfWeek}, ${day.toString().padStart(2, '0')}/${(month + 1)
        .toString()
        .padStart(2, '0')}/${year}`;

    return formattedDate;
}
function convertMonths(input: string): string {
    switch (input) {
        case 'thg 1':
            return 'Tháng 1';
        case 'thg 2':
            return 'Tháng 2';
        case 'thg 3':
            return 'Tháng 3';
        case 'thg 4':
            return 'Tháng 4';
        case 'thg 5':
            return 'Tháng 5';
        case 'thg 6':
            return 'Tháng 6';
        case 'thg 7':
            return 'Tháng 7';
        case 'thg 8':
            return 'Tháng 8';
        case 'thg 9':
            return 'Tháng 9';
        case 'thg 10':
            return 'Tháng 10';
        case 'thg 11':
            return 'Tháng 11';
        case 'thg 12':
            return 'Tháng 12';
        default:
            return input; // Trường hợp không khớp, trả về nguyên bản
    }
}
export {getFormattedDate,convertMonths}