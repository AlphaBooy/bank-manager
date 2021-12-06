export default class PriceUtilities {
    static priceFormat(price: number): string {
        const priceArray = price.toString().split('.');
        return priceArray[0] + "," + priceArray[1] + "€";
    }
}
