import { BurstValue } from '@burstjs/util'
import { Contract, ContractDataView } from '@burstjs/contracts'

export class FarmLandData {
  public readonly farmLandId: string
  public readonly currentFarmer: string
  public readonly farmValue: BurstValue = BurstValue.fromBurst(0)
  public readonly farmers: string[] = []
  public readonly lordInvestments: BurstValue[] = []
  public readonly lords: string[] = []
  public readonly lordTax: BurstValue = BurstValue.fromBurst(0)
  public readonly margin: number
  public readonly patron: string
  public readonly patronLevel: BurstValue
  public readonly winnerFarmer: string
  public readonly winnerFarmerBalance: BurstValue

  private constructor(data: any) {
    Object.keys(data).forEach((k) => {
      this[k] = data[k]
    })
  }

  public static fromContract(contract: Contract): FarmLandData {
    /**
     long one  = 1;
     Address Patron;
     long seed = INITIAL_SEED;
     long PatronLevel;
     Address farmer1,farmer2,farmer3;
     long CurrentFarmer = one;
     long WinnerFarmer = one;
     long WinnerFarmerBalance = INITIAL_SEED;
     long looserFarmer;
     Address lord1,lord2,lord3,lord4;
     long lord1Invest,lord2Invest,lord3Invest,lord4Invest;
     long numberlords;
     long TaxPerLord;
     long two = 2;
     long three = 3;
     long four = 4;
     long marge =102;
     long lordTax = LORD_TAX *90/100;
     long hash;
     */

    const Addresses = {
      Patron: 1,
      FarmValue: 2,
      PatronLevel: 3,
      Farmers: [4, 5, 6],
      CurrentFarmer: 7,
      WinnerFarmer: 8,
      WinnerFarmerBalance: 9,
      LooserFarmer: 10,
      Lords: [11, 12, 13, 14],
      LordsInvestments: [15, 16, 17, 18],
      TaxPerLord: 20,
      Margin: 24,
    }

    const view = new ContractDataView(contract)
    const patron = view.getVariableAsDecimal(Addresses.Patron)
    const patronLevel = BurstValue.fromPlanck(
      view.getVariableAsDecimal(Addresses.PatronLevel)
    )
    const farmValue = BurstValue.fromPlanck(
      view.getVariableAsDecimal(Addresses.FarmValue)
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
    const margin =
      Number.parseInt(view.getVariableAsDecimal(Addresses.Margin)) - 100
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
      currentFarmer,
      winnerFarmer,
      winnerFarmerBalance,
      farmValue,
      farmers,
      margin,
      lordInvestments,
      lords,
      lordTax,
      patron,
      patronLevel,
    })
  }

  public get highestPayout(): BurstValue {
    return this.patronLevel
      ? this.copyBurstValue(this.patronLevel).subtract(
          BurstValue.fromBurst(100)
        )
      : BurstValue.fromBurst(0)
  }

  public get lordMaxROIperDay(): BurstValue {
    return this.lordTax
      ? this.copyBurstValue(this.lordTax).multiply(360)
      : BurstValue.fromBurst(0)
  }

  private copyBurstValue(burstValue: BurstValue): BurstValue {
    return BurstValue.fromBurst(burstValue.getBurst())
  }
}
