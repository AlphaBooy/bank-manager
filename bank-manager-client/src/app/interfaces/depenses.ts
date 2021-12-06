export interface Depenses {
  ID: string,
  montant: number,
  Date: Date,
  IDBeneficiaire: number,
  IDCategorie: number,
  Description: string,
  Obligatoire: number
}

export interface DepensesDisplay {
    ID: string,
    montant: string,
    Date: string,
    Beneficiaire: string,
    Categorie: string,
    Description: string
}
