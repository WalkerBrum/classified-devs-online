import { ClassifiedStorage } from "src/@types/classifiedStorage";

export const filterClassifiedStorage = (classifiedStorage: ClassifiedStorage[], cpfOrCnpj: string | undefined) => {
  const filterMyClassified = classifiedStorage.filter((classified) => classified.data.some((classifiedData) => classifiedData.cpfOrCnpj === cpfOrCnpj));

  return filterMyClassified
}