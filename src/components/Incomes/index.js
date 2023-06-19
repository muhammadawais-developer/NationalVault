import React from 'react';

import {Main, MainTop, H1, H2, Accurals, Accural, Date, Amount, Rate, Plans} from "./IncomesElements";
import './plans.css';
import AccuralRow from './accural';
import {Accuraldata} from './data';

const Incomes = () => {
  return (
    <>
      <Main>
        <MainTop>
          <H1>Incomes</H1>
        </MainTop>
        <H2>Plans</H2>
        <Plans>
        <div class="pricing-wrapper clearfix">
          <div class="pricing-table">
            <h3 class="pricing-title">3% Daily</h3>
            <div class="price">FOR 3 MONTHS</div>
            <ul class="table-list">
              <li>Principle Return <br/> <span>NO</span></li>
              <li>Withdraw System <br/> <span>Manual</span></li>
              <li>Range <br/> <span>$150 - $100000</span></li>
            </ul>
            <div class="table-buy">
              <button class="pricing-action">Deposit</button>
            </div>
          </div>
          
          <div class="pricing-table recommended">
            <h3 class="pricing-title">5% Daily</h3>
            <div class="price">FOR 3 MONTHS</div>
            <ul class="table-list">
              <li>Principle Return <br/> <span>NO</span></li>
              <li>Withdraw System <br/> <span>Manual</span></li>
              <li>Range <br/> <span>$1000 - $100000</span></li>
            </ul>
            <div class="table-buy">
              <button class="pricing-action">Deposit</button>
            </div>
          </div>

          <div class="pricing-table">
            <h3 class="pricing-title">7% Daily</h3>
            <div class="price">FOR 3 MONTHS</div>
            <ul class="table-list">
              <li>Principle Return <br/> <span>NO</span></li>
              <li>Withdraw System <br/> <span>Manual</span></li>
              <li>Range <br/> <span>$5000 - $100000</span></li>
            </ul>
            <div class="table-buy">
              <button class="pricing-action">Deposit</button>
            </div>
          </div>
        </div>
        </Plans>

        <H2>Accruals</H2>
        <Accurals>
          <Accural>
            <Date>Date</Date>
            <Amount style={{fontWeight: 400}}>Amount</Amount>
            <Rate style={{color: '#fff'}}>Rate</Rate>
          </Accural>
          <AccuralRow accuraldata={Accuraldata} />
        </Accurals> 

      </Main>

    </>
  )
}

export default Incomes