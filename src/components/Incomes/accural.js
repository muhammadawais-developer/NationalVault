import React from 'react'
import {Accural, Date, Amount, Rate} from './IncomesElements';

const AccuralRow = (props) => {

  const accuraldata = props.accuraldata

  return (
    <>
        {accuraldata.map((data) => (
          <Accural>
            <Date>{data.date}</Date>
            <Amount>{data.amount}</Amount>
            <Rate>{data.rate}</Rate>
          </Accural>
        ))}
    </>
  )
}

export default AccuralRow