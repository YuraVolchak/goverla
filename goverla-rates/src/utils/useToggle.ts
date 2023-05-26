import {useState} from "react";

export const useToggle = (defValue = false) => {
    const [state, setState] = useState(defValue)
    const toggleHandler = (): void => {
        setState(!state)
    }
    return {toggle: state, toggleHandler: toggleHandler, setToddle: setState}


}