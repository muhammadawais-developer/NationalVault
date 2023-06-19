import React, { useState } from 'react';
import { UserData } from '../Charts/data.js';

import LineChart from '../Charts/Line.js';

import {Main, MainTop, Date, H1, Insights, InsightWrapper, InsMiddle, InsLeft, InsTitle, InsAmount, InsProgress, ProgImg, Circle, InsProgressNumber, Stamp} from "./DashboardElements.js";
import {H2, RecentTransaction, TxTable, TxTHead, TxTBody, TxTTh, TxTTr, TxTTd, Collapsable } from './DashboardElements.js';
import { SectionRight, RecentAnalytics, Analytics, Analytic, Month, Value, Graph} from './DashboardElements.js';

const Dashboard = () => {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [{
      label: "Average incomes",
      data: UserData.map((data) => data.income),
      fill: {value: -10},
      backgroundColor: 'rgba(1, 191, 131, 0.2)',
      borderColor: 'rgb(1, 191, 131)',
      pointRadius: 4,
      pointBackgroundColor: 'rgb(1, 191, 131)',
      tension: 0
    }]
  })

  return (
    <>
      <Main>
        <MainTop>
          <H1>Dashboard</H1>
          <Date>30/01/2012</Date>
        </MainTop>
        <Insights>
          <InsightWrapper>
            {/* <InsIcon> <MdOutlineAccountBalanceWallet/> </InsIcon> */}
            <InsMiddle>
              <InsLeft>
              <InsTitle>Balance</InsTitle>
                <InsAmount>$25,450</InsAmount>
              </InsLeft>
              <InsProgress>
                  <ProgImg>
                    <Circle className='antimask' cx='38' cy='38' r='36'></Circle>
                    <Circle className='balance' cx='38' cy='38' r='36' pathLength='100'></Circle>
                    <Circle className='balance' fill="url(#g)" filter="url(#sofGlow)" cx='38' cy='38' r='36' pathLength='100'></Circle>
                    <defs>
                      <radialGradient id='g'>
                          <stop stopColor='#00f' offset='100'/>
                          <stop stopColor='#01bf71' offset='100'/>
                      </radialGradient>
                      <filter id='sofGlow' width='300%' height='300%' x='-100%' y='-100%'>
                        <feGaussianBlur in="thicken" stdDeviation='6' result="blurred" />
                      </filter>
                    </defs>
                  </ProgImg>
                  <InsProgressNumber>81%</InsProgressNumber>
              </InsProgress>
            </InsMiddle>
            <Stamp>Last 24 hours</Stamp>
          </InsightWrapper>

          <InsightWrapper>
            {/* <InsIcon> <GiStabbedNote/> </InsIcon> */}
            <InsMiddle>
              <InsLeft>
              <InsTitle>Expenses</InsTitle>
                <InsAmount>$10,870</InsAmount>
              </InsLeft>
              <InsProgress>
                  <ProgImg>
                    <Circle className='antimask' cx='38' cy='38' r='36'></Circle>
                    <Circle className='expenses' cx='38' cy='38' r='36' pathLength='100'></Circle>
                    <Circle className='expenses' fill="url(#g)" filter="url(#sofGlow)" cx='38' cy='38' r='36' pathLength='100'></Circle>
                    <defs>
                      <radialGradient id='g'>
                          <stop stop-color='#00f' offset='100'/>
                          <stop stop-color='#01bf71' offset='100'/>
                      </radialGradient>
                      <filter id='sofGlow' width='300%' height='300%' x='-100%' y='-100%'>
                        <feGaussianBlur in="thicken" stdDeviation='6' result="blurred" />
                      </filter>
                    </defs>
                  </ProgImg>
                  <InsProgressNumber>30%</InsProgressNumber>
              </InsProgress>
            </InsMiddle>
            <Stamp>Last Month</Stamp>
          </InsightWrapper>

          <InsightWrapper>
            {/* <InsIcon> <MdOutlineSavings/> </InsIcon> */}
            <InsMiddle>
              <InsLeft>
              <InsTitle>Savings</InsTitle>
                <InsAmount>$5,923</InsAmount>
              </InsLeft>
              <InsProgress>
                  <ProgImg>
                    <Circle className='antimask' cx='38' cy='38' r='36'></Circle>
                    <Circle className='savings'  cx='38' cy='38' r='36' pathLength='100'></Circle>
                    <Circle className='savings' fill="url(#g)" filter="url(#sofGlow)" cx='38' cy='38' r='36' pathLength='100'></Circle>
                    <defs>
                      <radialGradient id='g'>
                          <stop stop-color='#00f' offset='100'/>
                          <stop stop-color='#01bf71' offset='100'/>
                      </radialGradient>
                      <filter id='sofGlow' width='300%' height='300%' x='-100%' y='-100%'>
                        <feGaussianBlur in="thicken" stdDeviation='6' result="blurred" />
                      </filter>
                    </defs>
                  </ProgImg>
                  <InsProgressNumber>16%</InsProgressNumber>
              </InsProgress>
            </InsMiddle>
            <Stamp>Last Month</Stamp>
          </InsightWrapper>
        </Insights>
        
        <RecentTransaction>
          <H2> Recent Transations </H2>
          <TxTable>
            <TxTHead>
              <TxTTr>
                <TxTTh>Transaction ID</TxTTh>
                <TxTTh>Type</TxTTh>
                <TxTTh>Source</TxTTh>
                <TxTTh>Amount</TxTTh>
                <TxTTh>Currency</TxTTh>
                <TxTTh>Date</TxTTh>
              </TxTTr>
            </TxTHead>
            <TxTBody>
              <TxTTr>
                <TxTTd>106172</TxTTd>
                <TxTTd>Withdrawal</TxTTd>
                <TxTTd>Grand Plaza</TxTTd>
                <TxTTd>370</TxTTd>
                <TxTTd>USD</TxTTd>
                <TxTTd>29-01-2012</TxTTd>
              </TxTTr>
              <TxTTr>
                <TxTTd>106064</TxTTd>
                <TxTTd>Withdrawal</TxTTd>
                <TxTTd>John Doe</TxTTd>
                <TxTTd>10,500</TxTTd>
                <TxTTd>USD</TxTTd>
                <TxTTd>28-01-2012</TxTTd>
              </TxTTr>
              <TxTTr>
                <TxTTd>106011</TxTTd>
                <TxTTd>Deposit</TxTTd>
                <TxTTd>Nesco Ltd.</TxTTd>
                <TxTTd>35,500</TxTTd>
                <TxTTd>USD</TxTTd>
                <TxTTd>24-01-2012</TxTTd>
              </TxTTr>
              <TxTTr>
                <TxTTd>105981</TxTTd>
                <TxTTd>Deposit</TxTTd>
                <TxTTd>Holly Blake</TxTTd>
                <TxTTd>820</TxTTd>
                <TxTTd>USD</TxTTd>
                <TxTTd>24-01-2012</TxTTd>
              </TxTTr>
            </TxTBody>
          </TxTable>
          <Collapsable to="/transactions">Show All</Collapsable>
        </RecentTransaction>
      </Main>

      <SectionRight>
        <RecentAnalytics>
          <H2>Recent Analytics</H2>
          <Analytics>
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
          </Analytics>
        </RecentAnalytics>

        <RecentAnalytics>
          <Graph>
            <LineChart chartdata={userData}/>
          </Graph>
        </RecentAnalytics>

      </SectionRight>

    </>
  )
}

export default Dashboard