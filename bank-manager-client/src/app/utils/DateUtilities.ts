export default class DateUtilities {
    static dateFormat(datetime: Date): string {
        const datetimeArray = (datetime + "").split('-');
        return datetimeArray[2].split('T')[0] + "/" +                   // Day (dd)
               datetimeArray[1] + "/" +                                          // Mounth (mm)
               datetimeArray[0] + " " +                                          // Year (yyyy)
               datetimeArray[2].split('T')[1].split('.')[0];    // Time (hh:mm:ss)
    }
}
