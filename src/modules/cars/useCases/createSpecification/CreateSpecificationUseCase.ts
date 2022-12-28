import ISpecificationsRepository from '../../repositories/Interfaces/ISpecificationsRepository'

interface IRequest {
  name: string
  description: string
}

export default class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {

  }

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error(`Specification ${name} already exists`)
    }

    this.specificationsRepository.create({
      name,
      description
    })
  }
}
