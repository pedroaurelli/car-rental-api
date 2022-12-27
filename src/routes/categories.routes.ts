import { Router } from 'express'

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

// [SRP] Principios de responsabildiade unica (SOLID)
// A rota não tem a responsabildiade da regra de negocio
// A rota só chama o serviço e retorna algo
categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const createCategoryService = new CreateCategoryService(categoriesRepository)

  createCategoryService.execute({ name, description })

  return res.status(201).send()
})

categoriesRoutes.get('/', (req, res) => {
  const all = categoriesRepository.list()

  return res.status(201).json(all)
})

export { categoriesRoutes }
