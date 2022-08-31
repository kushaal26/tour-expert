import React from "react"
import {Link} from "react-router-dom"
export const PopoverContent = (props) => {
    const {productId} = props
    console.log(productId)
    return (
        <>
            {productId &&
                <><div>{"test"} </div>
                    
                </>
            }
        </>
            
    )

}