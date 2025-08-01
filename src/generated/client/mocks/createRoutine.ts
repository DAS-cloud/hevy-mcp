/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { Routine } from '../types/Routine.ts'
import { faker } from '@faker-js/faker'

export function createRoutine(data?: Partial<Routine>): Routine {
  return {
    ...{
      id: faker.string.alpha(),
      title: faker.string.alpha(),
      folder_id: faker.number.float(),
      updated_at: faker.string.alpha(),
      created_at: faker.string.alpha(),
      exercises: faker.helpers.multiple(() => ({
        index: faker.number.float(),
        title: faker.string.alpha(),
        rest_seconds: faker.string.alpha(),
        notes: faker.string.alpha(),
        exercise_template_id: faker.string.alpha(),
        supersets_id: faker.number.float(),
        sets: faker.helpers.multiple(() => ({
          index: faker.number.float(),
          type: faker.string.alpha(),
          weight_kg: faker.number.float(),
          reps: faker.number.float(),
          distance_meters: faker.number.float(),
          duration_seconds: faker.number.float(),
          rpe: faker.number.float(),
          custom_metric: faker.number.float(),
        })),
      })),
    },
    ...(data || {}),
  }
}