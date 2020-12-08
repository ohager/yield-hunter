import {ConsoleLogger, Monitor} from "@burstjs/monitor";
import {Contract} from "@burstjs/contracts";
import {Api as BurstApi} from "@burstjs/core";

const logger = process.env.NODE_ENV !== 'production' ? new ConsoleLogger() : undefined

export class ContractsService {

    constructor(private burstapi: BurstApi) {
    }

    public monitorContracts() {
        let monitor = new Monitor<Contract[]>({
            key: 'contracts-monitor',
            asyncFetcherFn: async () => {
                const contractIds = process.env.NEXT_PUBLIC_CONTRACTS.split(',')
                const promises: Promise<Contract>[] = [];
                for (let i = 0; i < contractIds.length; i++) {
                    let contractId = contractIds[i];
                    promises.push(this.burstapi.contract.getContract(contractId))
                }
                return Promise.all(promises);
            },
            compareFn: (contracts) => true,
            timeoutSecs: 240,
            intervalSecs: 5,
            logger,
        }).start();

        monitor.onFulfilled(({key,data}) => {
            monitor.stop()
            console.log('fulfilled', data)
            monitor.start()
        })
    }

}
