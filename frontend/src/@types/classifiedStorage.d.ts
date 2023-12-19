export type ClassifiedStorage = {
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
  date_created: date;
  date_modificated: null | date;
}