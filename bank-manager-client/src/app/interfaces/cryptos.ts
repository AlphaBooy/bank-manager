export interface Cryptos {
    ID: string,
    nomCrypto: string,
    acronymeCrypto: string,
    montantEUR: number,
    montantCrypto: number,
    tauxEUR: number,
    type: string,
    sousType: string,
    date: Date
}

export interface CryptosDisplay {
    ID: string,
    nomCrypto: string,
    acronymeCrypto: string,
    montantEUR: number,
    montantCrypto: number,
    tauxEUR: number,
    type: string,
    sousType: string,
    date: string
}

export interface cryptoByType {
    nomCrypto: string,
    acronymeCrypto: string,
    TOTALCRYPTO: number,
    TOTALEUR: number,
}
