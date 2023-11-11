// @ts-nocheck
import Joi from 'joi';
import { UuidFilterSchemaObject } from './UuidFilter.schema';
import { UuidNullableFilterSchemaObject } from './UuidNullableFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { PoolRelationFilterSchemaObject } from './PoolRelationFilter.schema';
import { PoolWhereInputSchemaObject } from './PoolWhereInput.schema';
import { ProductRelationFilterSchemaObject } from './ProductRelationFilter.schema';
import { ProductWhereInputSchemaObject } from './ProductWhereInput.schema';
import { CustomerOrderRelationFilterSchemaObject } from './CustomerOrderRelationFilter.schema';
import { CustomerOrderWhereInputSchemaObject } from './CustomerOrderWhereInput.schema'

export const PurchaseWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#PurchaseWhereInput'),
Joi.array().items(Joi.link('#PurchaseWhereInput'))),
  OR: Joi.array().items(Joi.link('#PurchaseWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#PurchaseWhereInput'),
Joi.array().items(Joi.link('#PurchaseWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  poolId: Joi.alternatives().try(Joi.object().keys(UuidNullableFilterSchemaObject),
Joi.string()),
  productId: Joi.alternatives().try(Joi.object().keys(UuidNullableFilterSchemaObject),
Joi.string()),
  customerOrderId: Joi.alternatives().try(Joi.object().keys(UuidFilterSchemaObject),
Joi.string()),
  quantity: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  pool: Joi.alternatives().try(Joi.object().keys(PoolRelationFilterSchemaObject),
Joi.object().keys(PoolWhereInputSchemaObject)),
  product: Joi.alternatives().try(Joi.object().keys(ProductRelationFilterSchemaObject),
Joi.object().keys(ProductWhereInputSchemaObject)),
  customerOrder: Joi.alternatives().try(Joi.object().keys(CustomerOrderRelationFilterSchemaObject),
Joi.object().keys(CustomerOrderWhereInputSchemaObject))
}