import Category from '../../model/Category'
import ICategoriesRepository from '../../repositories/Interfaces/ICategoriesRepository'

export default class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list()

    return categories
  }
}
