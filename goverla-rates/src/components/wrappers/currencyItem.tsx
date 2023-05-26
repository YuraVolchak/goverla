import CurrencyTitle from "../items/currencyTitle";
import CurrencyRate from "../items/currencyRate";
import {FC} from "react";

const CurrencyItem: FC<{ item: any }> = ({item}) => {
    const {ask, bid} = item
    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '2px solid lightGrey'}}>
            <CurrencyTitle name={item.currency.codeAlpha}/>
            <CurrencyRate absolute={ask.absolute} relative={ask.relative} updatedAt={ask.updatedAt}/>
            <CurrencyRate absolute={bid.absolute} relative={bid.relative} updatedAt={bid.updatedAt}/>
        </div>
    )
}
export default CurrencyItem