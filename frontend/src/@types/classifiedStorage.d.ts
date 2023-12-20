export type ClassifiedStorage = {
  date_created: date,
  data: {
    id: string;
    cpfOrCnpj: string | undefined;
    jobTitle: string;
    mainSkills: string;
    level: string;
    description: string;
    workingModel: string;
    city:string;
    uf: string;
    remuneration: string;
    date_modificated: null | date;
  }
}