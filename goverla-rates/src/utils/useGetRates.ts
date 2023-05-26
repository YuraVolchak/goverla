import axios from "axios";
import {useEffect, useState} from "react";

const defPayload = {
    "operationName": "Point",
    "variables": {
        "alias": "goverla-ua"
    },
    "query": "query Point($alias: Alias!) {\n  point(alias: $alias) {\n    id\n    rates {\n      id\n      currency {\n        alias\n        name\n        exponent\n        codeAlpha\n        codeNumeric\n        __typename\n      }\n      bid {\n        absolute\n        relative\n        updatedAt\n        __typename\n      }\n      ask {\n        absolute\n        relative\n        updatedAt\n        __typename\n      }\n      __typename\n    }\n    updatedAt\n    __typename\n  }\n}\n"
}
export const useGetRates = () => {
    const [data, setData] = useState<{
        rates: any; updatedAt: string | Date
}|null>(null)

    const fetchData = () => {
        axios.post(`https://api.goverla.ua/graphql`, defPayload)
            .then(response => {
                // @ts-ignore
                setData(response.data.data.point)
            })

    }
    useEffect(() => {
        fetchData()
        setInterval(fetchData,10000)
    }, [])
    return {
        data:data,
        getData:fetchData
    }


}