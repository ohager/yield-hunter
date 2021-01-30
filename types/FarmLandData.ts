import { BurstValue } from '@burstjs/util'
import { Contract, ContractDataView } from '@burstjs/contracts'

export class FarmLandData {
  public readonly farmLandId: string
  public readonly farmingPower: BurstValue = BurstValue.fromBurst(0)
  public readonly currentFarmer: string
  public readonly farmValue: BurstValue = BurstValue.fromBurst(0)
  public readonly farmers: string[] = []
  public readonly lordInvestments: BurstValue[] = []
  public readonly lords: string[] = []
  public readonly lordTax: BurstValue = BurstValue.fromBurst(0)
  public readonly patron: string
  public readonly patronLevel: BurstValue
  public readonly winnerFarmer: string
  public readonly winnerFarmerBalance: BurstValue

  private constructor(data: any) {
    Object.keys(data).forEach((k) => {
      this[k] = data[k]
    })
  }

  /**
   *     // --- "variant values"

   * @param contract
   */
  public static fromContract(contract: Contract): FarmLandData {
    /**
     long farmingPower= 300 * ONE_BURST;
     long seed = INITIAL_SEED;
     long lordTax = 18 * ONE_BURST;
     long lordTaxPct = lordTax * 90/100;
     Address farmer1,farmer2,farmer3;
     long currentFarmer = ONE;
     long winnerFarmer = ONE;
     long winnerFarmerBalance = INITIAL_SEED;
     long looserFarmerBalance;
     Address patron;
     long patronBalance;
     Address lord1,lord2,lord3,lord4;
     long lord1Invest,lord2Invest,lord3Invest,lord4Invest;
     long numberlords;
     // --- "locals"
     long taxPerLord;
     long hash;
     boolean canStake;
     */

    const Addresses = {
      FarmingPower: 0,
      FarmValue: 1,
      Farmers: [4, 5, 6],
      CurrentFarmer: 7,
      WinnerFarmer: 8,
      WinnerFarmerBalance: 9,
      LooserFarmer: 10,
      Patron: 11,
      PatronLevel: 12,
      Lords: [13, 14, 15, 16],
      LordsInvestments: [17, 18, 19, 20],
      TaxPerLord: 22,
    }

    const view = new ContractDataView(contract)
    const patron = view.getVariableAsDecimal(Addresses.Patron)
    const patronLevel = BurstValue.fromPlanck(
      view.getVariableAsDecimal(Addresses.PatronLevel)
    )
    const farmValue = BurstValue.fromPlanck(
      view.getVariableAsDecimal(Addresses.FarmValue)
    )
    const farmingPower = BurstValue.fromPlanck(
      view.getVariableAsDecimal(Addresses.FarmingPower)
    )
    const farmers = Addresses.Farmers.map<string>(
      view.getVariableAsDecimal.bind(view)
    ).filter((address) => address !== '0')

    const lords = Addresses.Lords.map<string>(
      view.getVariableAsDecimal.bind(view)
    ).filter((address) => address !== '0')

    const lordInvestments = Addresses.LordsInvestments.map<BurstValue>(
      (address) => BurstValue.fromPlanck(view.getVariableAsDecimal(address))
    )
    const currentFarmerIndex = Number.parseInt(
      view.getVariableAsDecimal(Addresses.CurrentFarmer)
    )
    const winnerFarmerIndex = Number.parseInt(
      view.getVariableAsDecimal(Addresses.WinnerFarmer)
    )
    const winnerFarmerBalance = BurstValue.fromPlanck(
      view.getVariableAsDecimal(Addresses.WinnerFarmer)
    )
    const lordTax = BurstValue.fromPlanck(
      view.getVariableAsDecimal(Addresses.TaxPerLord)
    )

    const currentFarmer = farmers[currentFarmerIndex - 1]
    const winnerFarmer = farmers[winnerFarmerIndex - 1]

    return new FarmLandData({
      farmLandId: contract.at,
      farmingPower,
      currentFarmer,
      winnerFarmer,
      winnerFarmerBalance,
      farmValue,
      farmers,
      lordInvestments,
      lords,
      lordTax,
      patron,
      patronLevel,
    })
  }

  public get highestPayout(): BurstValue {
    return this.patronLevel
      ? this.patronLevel.clone().subtract(BurstValue.fromBurst(100))
      : BurstValue.fromBurst(0)
  }

  public get lordMaxROIperDay(): BurstValue {
    return this.lordTax
      ? this.lordTax.clone().multiply(360)
      : BurstValue.fromBurst(0)
  }
}
