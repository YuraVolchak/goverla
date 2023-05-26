import {JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal} from "react";
import {format} from "date-fns";
import CurrencyItem from './currencyItem'
import SettingPannel from "./settingPannel";
import {useCookies} from "../../utils";

const CurrencyItemsTable: ({data}: { data: any }) => (string | any) = ({data}) => {
    const reformatListCur = (d: Array<any>): string[] => d.map(el => el.currency.alias)
    const {cookies, setCookies} = useCookies('currs')
    if (!data) {
        return 'waiting'
    }
    return (
        <>
            <div style={{position: 'relative'}}>
                <span>Оновлено: {format(new Date(data?.updatedAt || ''), "dd-MM HH:MM:ss ")}</span>
            </div>
            <div>
                <SettingPannel totalList={reformatListCur(data?.rates)} onChange={setCookies} list={cookies || ''}/>
            </div>

            <div style={{
                maxHeight: '300px',
                overflow: 'auto'
            }}>
                {data?.rates?.map((el: {
                    id: Key | null | undefined;
                    currency: {
                        codeAlpha: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
                    };
                }) => {
                    if (cookies?.toUpperCase().includes(el.currency.codeAlpha as string))
                        return (
                            <div key={el.id}>
                                <CurrencyItem item={el}/>
                            </div>
                        )
                })}

            </div>
        </>


    )


}
export default CurrencyItemsTable

