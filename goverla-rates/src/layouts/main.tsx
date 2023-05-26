import CurrencyItemsTable from "../components/wrappers/currencyItemsTable";
import {useGetRates} from "../utils";

export const MainLayout = () => {
    const {data} = useGetRates()

    return <div>
        <CurrencyItemsTable data={data}/>
    </div>
}