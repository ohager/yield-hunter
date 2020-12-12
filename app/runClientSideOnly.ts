import { isClientSide } from './isClientSide'
import { EffectCallback } from 'react'

export const runClientSideOnly = (fn: Function): EffectCallback =>
  isClientSide ? fn() : () => {}
