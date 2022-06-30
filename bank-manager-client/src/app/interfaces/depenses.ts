export interface Depenses {
    ID: string,
    montant: number,
    Date: Date,
    IDBeneficiaire: number,
    IDCategorie: number,
    Description: string,
    Obligatoire: boolean
}

export interface DepensesDisplay {
    ID: string,
    montant: number,
    Date: string,
    Beneficiaire: string,
    Categorie: string,
    CategorieIcon: string,
    Description: string,
    Obligatoire: boolean
}

export interface DepensesCategorie {
    TOTAL: number,
    nom: string,
    ID: number,
    icon: string
}

export interface DepensesMois {
    TOTAL: number,
    MOIS: number
}
