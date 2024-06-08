function calculateTimeDifference(endDate = new Date()): { days: number, hours: number, minutes: number, seconds: number } {
    // Khởi tạo startDate với ngày cố định là 26 tháng 4 năm 2023
    const startDate = new Date(2023, 3, 26);
    startDate.setHours(21, 0, 0);
    // Chuyển đổi cả hai ngày sang cùng múi giờ Việt Nam (UTC+7)
    const startDateInUTC7 = new Date(startDate.toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }));
    const endDateInUTC7 = new Date(endDate.toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }));

    // Tính toán sự khác biệt tổng cộng bằng mili giây
    const difference = endDateInUTC7.getTime() - startDateInUTC7.getTime();

    // Chuyển đổi mili giây thành giây, phút, giờ và ngày
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // Tính toán phần còn lại của giây, phút và giờ sau khi trừ đi số ngày, giờ và phút đầy đủ
    const remainingSeconds = seconds % 60;
    const remainingMinutes = minutes % 60;
    const remainingHours = hours % 24;

    // Trả về kết quả dưới dạng một đối tượng chứa số ngày, giờ, phút và giây chênh lệch
    return {
        days: days,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds,
    };
}
export { calculateTimeDifference };
