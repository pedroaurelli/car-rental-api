// 1

// Controllers são importantes para remover as responsabilidades de dentro da rota
// - Todo useCase só terá um controller
// - Queremos forçar que um useCase tenha somente uma responsabilidade (método handle)

import { Response, Request } from 'express'

import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {

  }

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body

    this.createCategoryUseCase.execute({ name, description })

    return res.status(201).send()
  }
}
