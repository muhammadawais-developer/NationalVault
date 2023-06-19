import React from 'react';
import {Main, MainTop, H1, H2, Cards, Card} from "./SubcriptionsElements";
import './subscriptions.css';

const Subcriptions = () => {

  return (
    <>
      <Main>
        <MainTop>
          <H1>Subcriptions</H1>
        </MainTop>

        <H2>Cards</H2>
        <Cards>
          <Card className='unequipped'>
            <div class="card">
            <div class="face front silver">
              <h3 class="debit">Debit Card <br/> Silver  </h3>
              <h3 class="bank">NV</h3>
              {/*<img class="chip" src="./assets/chip.png" alt="chip" />*/}
              <h3 class="number">---- ---- ---- ----</h3>
              <h5 class="valid"><span>EXPIRES</span><span>--/--</span></h5>
              <h5 class="card-holder">John Doe</h5>
            </div>
            <div class="face back silver">
              <div class="blackbar"></div>
              <div class="cvvtext">
                <div class="white-bar"></div>
                <div class="cvv">123</div>
              </div>
            </div>
            </div>
          </Card>
          
          <Card>
            <div class="card">
            <div class="face front gold">
              <h3 class="debit">Debit Card <br/> Gold </h3>
              <h3 class="bank">NV</h3>
              {/*<img class="chip" src="./assets/chip.png" alt="chip" />*/}
              <h3 class="number">4123 0233 4133 9998</h3>
              <h5 class="valid"><span>EXPIRES</span><span>12/28</span></h5>
              <h5 class="card-holder">John Doe</h5>
            </div>
            <div class="face back gold">
              <div class="blackbar"></div>
              <div class="cvvtext">
                <div class="white-bar"></div>
                <div class="cvv">123</div>
              </div>
            </div>
            </div>
          </Card>

          <Card>
            <div class="card">
              <div class="face front platinum">
                <h3 class="debit">Debit Card <br/> Platinum </h3>
                <h3 class="bank">NV</h3>
                {/*<img class="chip" src="./assets/chip.png" alt="chip" />*/}
                <h3 class="number">4123 0112 3478 8793</h3>
                <h5 class="valid"><span>EXPIRES</span><span>10/28</span></h5>
                <h5 class="card-holder">John Doe</h5>
              </div>
              <div class="face back platinum">
                <div class="blackbar"></div>
                <div class="cvvtext">
                  <div class="white-bar"></div>
                  <div class="cvv">123</div>
                </div>
              </div>
            </div>
          </Card>
        </Cards>

      </Main>
    </>
  )
}

export default Subcriptions