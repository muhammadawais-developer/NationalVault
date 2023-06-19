import React, {useState} from 'react';

import BarChart from '../Charts/Bar';
import {UserData} from '../Charts/data';

import {Main, MainTop, Date, H1, /*H2, Insights, InsightWrapper, InsMiddle, InsLeft, InsTitle, InsAmount, InsProgress, ProgImg, Circle, InsProgressNumber, Stamp*/} from "./AnalysticsElements";
//import {H2, RecentTransaction, TxTable, TxTHead, TxTBody, TxTTh, TxTTr, TxTTd, Collapsable } from './AnalysticsElements';
import { /*SectionRight,*/ RecentAnalytics, AnalyticsWrapper, Analytic, Month, Value, Graph} from './AnalysticsElements';

const Analytics = () => {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [{
      label: "Average incomes",
      data: UserData.map((data) => data.income),
      fill: origin,
      backgroundColor: 'rgba(1, 191, 131, 0.2)',
      borderColor: 'rgb(1, 191, 131)',
      tension: 0
    }]
  })

  return (
    <>
      <Main>
        <MainTop>
          <H1>Analytics</H1>
          <Date>30/01/2012</Date>
        </MainTop>

        <RecentAnalytics>
          <AnalyticsWrapper>
            <Analytic>
              <Month>Dec</Month>
              <Value>+8</Value>
              <Value>+9.7</Value>
              <Value neg='true'>-3.4</Value>
              <Value>+1.1</Value>
            </Analytic>
            <Analytic>
              <Month>Nov</Month>
              <Value>+3</Value>
              <Value neg='true'>-12</Value>
              <Value>+7</Value>
              <Value neg='true'>-7</Value>
            </Analytic>
            <Analytic>
              <Month>Oct</Month>
              <Value neg='true'>-1.2</Value>
              <Value>+8</Value>
              <Value>+6.5</Value>
              <Value neg='true'>-3</Value>
            </Analytic>
            <Analytic>
              <Month>Sep</Month>
              <Value neg='true'>-2.9</Value>
              <Value>10</Value>
              <Value>6.7</Value>
              <Value>12</Value>
            </Analytic>
            <Analytic>
              <Month>Aug</Month>
              <Value>5</Value>
              <Value>7</Value>
              <Value neg='true'>-14.3</Value>
              <Value >-8.2</Value>
            </Analytic>
          </AnalyticsWrapper>
        </RecentAnalytics>

        <Graph>
          <BarChart chartdata={userData}/>
        </Graph>

      </Main>

    </>

  )
}

export default Analytics