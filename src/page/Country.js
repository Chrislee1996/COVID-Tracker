import React from 'react'
import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'


const Country =()=> {
const [country, setCountry ]= useState([])
let params = useParams()

useEffect(() => {
    getCountry(params.type)
},[params.type])

const getCountry = async(name) => {
    const data = await fetch(`https://api.covid19api.com/live/country/${name}`)
    const currentCountry = await data.json()
    setCountry(currentCountry)
    console.log(currentCountry)
}

  return (
    <div>
        <h1>s</h1>
    </div>
  )
}

export default Country