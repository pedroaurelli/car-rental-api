import { Router } from 'express'
import multer from 'multer'

import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { importCategoryController } from '../modules/cars/useCases/importCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const categoriesRoutes = Router()

const upload = multer({
  dest: './tmp'
})

// [SRP] Principios de responsabildiade unica (SOLID)
// A rota não tem a responsabildiade da regra de negocio
// A rota só chama o serviço e retorna algo
categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res)
})

categoriesRoutes.get('/', (req, res) => {
  return listCategoriesController.handle(req, res)
})

// Middleware para upload de arquivos
categoriesRoutes.post('/import', upload.single('file'), (req, res) => {
  return importCategoryController.handle(req, res)
})

export { categoriesRoutes }
