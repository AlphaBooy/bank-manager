export interface Revenus {
    ID: string,
    montant: number,
    Date: Date,
    IDCrediteur: number,
    IDCategorie: number,
    Description: string
}

export interface RevenusDisplay {
    ID: string,
    Montant: number,
    Date: string,
    Crediteur: string,
    Categorie: string,
    Description: string
}

export interface RevenusMois {
    TOTAL: number,
    MOIS: number
}
