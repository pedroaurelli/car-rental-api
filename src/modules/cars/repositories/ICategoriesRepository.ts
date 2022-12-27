import Category from '../model/Category'

// DTO - Data Transfer Object - regra no ESLint
export interface ICreateCategoryDTO {
  name: string
  description: string
}

export default interface ICategoriesRepository {
  findByName(name: string): Category
  list(): Category[]
  create({ name, description }: ICreateCategoryDTO): void
}
