// 2

// Apenas para padronizar a nomeclatura, mas o useCase é o SERVICE*

import ICategoriesRepository from '../../repositories/Interfaces/ICategoriesRepository'

interface IRequest {
  name: string
  description: string
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('Category already exists')
    }

    this.categoriesRepository.create({ name, description })
  }
}
