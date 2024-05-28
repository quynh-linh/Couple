function calculateTimeDifference(endDate: Date = new Date()): { days: number, hours: number, minutes: number, seconds: number } {
    const startDate = new Date(2023, 3, 26);
    // Calculate total difference in milliseconds
    let difference = endDate.getTime() - startDate.getTime();
  
    // Calculate difference in seconds, minutes, hours, and days
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    // Calculate remaining seconds, minutes, hours, and days after extracting higher units
    const remainingSeconds = seconds % 60;
    const remainingMinutes = minutes % 60;
    const remainingHours = hours % 24;
  
    return {
        days: days,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds,
    };
}

export { calculateTimeDifference };
