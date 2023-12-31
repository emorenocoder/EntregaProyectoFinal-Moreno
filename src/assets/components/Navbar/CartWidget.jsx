import React from 'react'
import UserContext from '../../Context/userContext/userContext'

const CartWidget = () => {

    const style = {
        color: "white",
        marginRight: "10px"
    }
    return (
        <div style={style}>
            <UserContext.Consumer>
                {
                    ({user}) => <p>Welcome,{ user.name}</p>
                }
            </UserContext.Consumer>
        </div>
    )
}

export default CartWidget