import {FC} from "react";

const CurrencyTitle:FC<{name:string}>=({name})=>{

    return <div style={{
        display:'flex',
        flexDirection:'column', alignItems:'center',
        gap: 5
    }}>
        <span>{name}</span>
        <img src={`/icons/${name.toLowerCase()}.svg`}  alt={name} width={'60px'}/>
    </div>
}
export default CurrencyTitle