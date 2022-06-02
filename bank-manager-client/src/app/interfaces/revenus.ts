export interface Revenus {
    ID: string,
    Montant: number,
    Date: Date,
    IDCrediteur: number,
    IDCategorie: number,
    Description: string
}

export interface RevenusDisplay {
    ID: string,
    montant: number,
    Date: string,
    Crediteur: string,
    Categorie: string,
    Description: string
}
