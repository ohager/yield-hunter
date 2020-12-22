import { BurstValue } from '@burstjs/util'

export function copyBurstValue(value: BurstValue): BurstValue {
  return BurstValue.fromBurst(value.getBurst())
}
