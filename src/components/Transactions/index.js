import React from 'react'
import {Main, MainTop, Date, H1, Insights, InsightWrapper, InsMiddle, InsLeft, InsTitle, InsAmount, InsProgress, ProgImg, Circle, InsProgressNumber} from "./TransactionsElements";
import {H2, RecentTransaction, TxTable, TxTHead, TxTBody, TxTTh, TxTTr, TxTTd} from './TransactionsElements';
//import { SectionRight, RecentAnalytics, Analytics, Analytic, Month, Value} from './TransactionsElements';

const Transactions = () => {
  return (
    <>
      <Main>
        <MainTop>
          <H1>Transactions</H1>
          <Date>30/01/2012</Date>
        </MainTop>
        <Insights>
          <InsightWrapper>
            <InsMiddle>
              <InsLeft>
              <InsTitle>Total Amount</InsTitle>
                <InsAmount>$36,320</InsAmount>
              </InsLeft>
              {/* <InsProgress>
                  <ProgImg>
                    <Circle className='antimask' cx='38' cy='38' r='36'></Circle>
                    <Circle className='total' cx='38' cy='38' r='36'  pathLength='100'></Circle>
                    <Circle className='total' fill="url(#g)" filter="url(#sofGlow)" cx='38' cy='38' r='36'  pathLength='100'></Circle>
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
              </InsProgress> */}
            </InsMiddle>
          </InsightWrapper>

          <InsightWrapper>
            {/* <InsIcon> <GiStabbedNote/> </InsIcon> */}
            <InsMiddle>
              <InsLeft>
              <InsTitle>Withdrawals</InsTitle>
                <InsAmount>$10,870</InsAmount>
              </InsLeft>
              <InsProgress>
                  <ProgImg>
                    <Circle className='antimask' cx='38' cy='38' r='36'></Circle>
                    <Circle className='withdrawal' cx='38' cy='38' r='36' pathLength='100'></Circle>
                    <Circle className='withdrawal' fill="url(#g)" filter="url(#sofGlow)" cx='38' cy='38' r='36' pathLength='100'></Circle>
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
          </InsightWrapper>

          <InsightWrapper>
            {/* <InsIcon> <MdOutlineSavings/> </InsIcon> */}
            <InsMiddle>
              <InsLeft>
              <InsTitle>Deposits</InsTitle>
                <InsAmount>$35,000</InsAmount>
              </InsLeft>
              <InsProgress>
                  <ProgImg>
                    <Circle className='antimask' cx='38' cy='38' r='36'></Circle>
                    <Circle className='deposit'  cx='38' cy='38' r='36' pathLength='100'></Circle>
                    <Circle className='deposit' fill="url(#g)" filter="url(#sofGlow)" cx='38' cy='38' r='36' pathLength='100'></Circle>
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
                  <InsProgressNumber>96%</InsProgressNumber>
              </InsProgress>
            </InsMiddle>
          </InsightWrapper>

          <InsightWrapper>
            {/* <InsIcon> <MdOutlineSavings/> </InsIcon> */}
            <InsMiddle>
              <InsLeft>
                <InsTitle>Daily Accural</InsTitle>
                <InsAmount>$223</InsAmount>
              </InsLeft>
              <InsProgress>
                  <ProgImg>
                    <Circle className='antimask' cx='38' cy='38' r='36'></Circle>
                    <Circle className='accural'  cx='38' cy='38' r='36' pathLength='100'></Circle>
                    <Circle className='accural' fill="url(#g)" filter="url(#sofGlow)" cx='38' cy='38' r='36' pathLength='100'></Circle>
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
                  <InsProgressNumber className='long'>12:01:12</InsProgressNumber>
              </InsProgress>
            </InsMiddle>
          </InsightWrapper>
        </Insights>
        
        <RecentTransaction>
          <H2> General Activity </H2>
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
        </RecentTransaction>

      </Main>
    </>
  )
}

export default Transactions