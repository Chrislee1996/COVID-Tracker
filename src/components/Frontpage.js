import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Card,Col,Row, ListGroup} from 'react-bootstrap'
import Moment from 'react-moment'

const Frontpage = () => {
  const [summary , setSummary] = useState([])

  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

  useEffect(() => {
    getSummary()
  },[])

  const getSummary = async () => {
    const api = await fetch(`https://api.covid19api.com/summary`)
    const data = await api.json()
    setSummary(data)
    console.log(data,'data')
  }

  return (
    <div>
      <h2>COVID Statistics as of {date}</h2>

      <h3>Total Cases</h3>
      {Object.values(summary).map((cases,index) => {
        return(
          <div key ={index}>
            <div>{cases.TotalConfirmed}</div>
          </div>
        )
      })}

      <h3>Total Deaths</h3>
      {Object.values(summary).map((cases,index) => {
        return(
          <div key ={index}>
            <div>{cases.TotalDeaths}</div>
          </div>
        )
      })}

      <h3>Daily Cases</h3>
      {Object.values(summary).map((cases,index) => {
        return(
          <div key ={index}>
            <div>{cases.NewConfirmed}</div>
          </div>
        )
      })}

      <h3>Daily Death Count</h3>
      {Object.values(summary).map((cases,index) => {
        return(
          <div key ={index}>
            <div>{cases.NewDeaths}</div>
          </div>
        )
      })}

    </div>
  )
}



export default Frontpage