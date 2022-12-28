import { Request, Response } from 'express'

import ListCategoriesUseCase from './ListCategoriesUseCase'

export default class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoriesUseCase) {}

  handle(req: Request, res: Response): Response {
    const all = this.listCategoryUseCase.execute()

    return res.status(201).json(all)
  }
}
