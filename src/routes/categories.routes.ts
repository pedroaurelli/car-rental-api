import { Router } from 'express'

import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const categoriesRoutes = Router()

// [SRP] Principios de responsabildiade unica (SOLID)
// A rota não tem a responsabildiade da regra de negocio
// A rota só chama o serviço e retorna algo
categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res)
})

categoriesRoutes.get('/', (req, res) => {
  return listCategoriesController.handle(req, res)
})

export { categoriesRoutes }
