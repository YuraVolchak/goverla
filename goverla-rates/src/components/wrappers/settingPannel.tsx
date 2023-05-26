import {FC} from "react";
import {useToggle} from "../../utils";


const SettingPannel: FC<{ totalList: Array<string>, list: string, onChange: (s: string) => void }> = ({
                                                                                                  totalList,
                                                                                                  list: cookies,
                                                                                                  onChange
                                                                                              }) => {
    const {
        toggle, toggleHandler
    } = useToggle(false)
    const onCurrSelect = (el: string) => {
        let cookiesArr = cookies ? cookies.split('*') : []
        if (cookiesArr.includes(el)) {
            cookiesArr.splice(cookiesArr.indexOf(el), 1)
        } else (cookiesArr.push(el))
        onChange(cookiesArr.join('*'))
    }


    return <div style={{padding:'20px 0'}}>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
            <button onClick={() => {
                toggleHandler()
            }}>{!toggle?"Вибір валюти":"Зберегти"}
            </button>
            <span>Купівля</span>
            <span>Продаж</span>
        </div>
        {toggle && <div style={{display: 'flex', gap: 5,padding:'10px'}}>
            {totalList.map(el => {
                return <div style={
                    {
                        border: cookies && cookies.includes(el) ? '2px solid green' : 'none'
                    }
                } onClick={() => {
                    onCurrSelect(el)

                }}><img src={`/icons/${el}.svg`} width={30} alt={el} title={el}/></div>
            })}
        </div>}
    </div>

}
export default SettingPannel