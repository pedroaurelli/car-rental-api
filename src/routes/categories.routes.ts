import { Router } from 'express'

import PostgresCategoriesRepository from '../repositories/PostgresCategoriesRepository'
import { CreateCategoryService } from '../services/CreateCategoryService'

const categoriesRoutes = Router()
const categoriesRepository = new PostgresCategoriesRepository()

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
