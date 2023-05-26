import {useEffect, useState} from "react";

export const useCookies = (Name:string) => {
    const [cookies, setCookiesState] = useState<string|null>('')

    const getCookies = (name: string) => {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }
    const setCookies = (value: string, name: string=Name,  daysToExpire: number=30) => {
        let cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        if (daysToExpire) {
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + daysToExpire);
            cookie += '; expires=' + expirationDate.toUTCString();
        }
        document.cookie = cookie;
        setCookiesState(cookie)
    }
    const deleteCookies = (name: string) => {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    }

    useEffect(() => {
        setCookiesState(getCookies(Name))
    })
    return {cookies,setCookies,deleteCookies}
}