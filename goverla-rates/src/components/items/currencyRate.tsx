import {FC} from "react";
import {format} from 'date-fns'

const CurrencyRate: FC<{ absolute: number, relative: number, updatedAt: string }> = ({
                                                                                         absolute,
                                                                                         relative,
                                                                                         updatedAt
                                                                                     }) => {

    const refactorRate = (n: number) => {
        return Number(n / 100).toFixed(2)
    }

    return <div style={{
        fontSize: '18px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap:5
    }}>

            <span style={{fontSize:'18px'}}>{refactorRate(absolute)}
            </span>


        <div style={{
            display: 'flex',
            gap: 5
        }}>
            <span style={{
                color: relative >= 0 ? 'green' : 'red'
            }}>{relative < 0 ? '↓' : '↑'} {relative / 100}</span>
            <span>{format(new Date(updatedAt), 'HH:MM')}</span>
        </div>
    </div>
}
export default CurrencyRate