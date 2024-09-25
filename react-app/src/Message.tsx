import React from 'react'
import { Avatar } from "flowbite-react"

function Message() {
    const name = 'Zaki'
    if(name)
        return <h1>Hello {name}!</h1>
    return <h1>Hello World!</h1>
  
}

export default Message