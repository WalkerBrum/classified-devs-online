import * as yup from 'yup';

export type ClassifiedStorage = {
  jobTitle: string;
  mainSkills: string;
  level: string;
  description: string;
  workingModel: string;
  city:string;
  uf: string;
  remuneration: number;
}

export const userClassifiedSchema = () => {
  return yup.object({
    jobTitle: yup.string().required('Selecione um título para a vaga.'),
    mainSkills: yup.string().min(5, 'Deve conter pelo o menos 5 caracters.').required('Informe as principais tecnologias para a vaga.'),
    level: yup.string().required('Selecione o nível para a vaga.'),
    description: yup.string().min(20, 'Deve conter pelo o menos 20 caracters.').required('Informe a descrição da vaga.'),
    workingModel: yup.string().required('Selecione o modelo de trabalho.'),
    city: yup.string().min(3, 'Uma cidade deve ter pelo menos 3 caracteres.').required('Informe o nome da cidade.'),
    uf: yup.string().length(2, 'O UF de uma cidade deve ter 2 caracteres').required('Informe o UF'),
    remuneration: yup.string().required('Informe a remuneração para o trabalho')
  })
}