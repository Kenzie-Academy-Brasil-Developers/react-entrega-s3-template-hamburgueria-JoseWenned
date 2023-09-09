import { forwardRef } from "react"

export const Input = forwardRef(({...rest}, ref) => {
    return(
        <>
            <input ref={ref} {...rest}/>
        </>
    )
})