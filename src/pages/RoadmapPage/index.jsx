import React from 'react';

import {
  Container,
  Main,
  CoverSection,
  WelcomeSection,
  WelcomeDetail,
  SnowmenCounter,
  Counter,
  LodgeMembers,
  MintRoadmapSection,
  RoadmapCheckpoint,
  SavageSnowmenRoadmapSection,
  SnowmenRaritySection,
  SnowmenTokenomicsSection,
  TokenomicsTreasury,
  TokenomicsDetail,
  TeamSection,
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import snowmanImage from '../../assets/snowman.png';
import headImage1 from '../../assets/head1.png';
import headImage2 from '../../assets/head2.png';
import headImage3 from '../../assets/head3.png';
import headImage4 from '../../assets/head4.png';
import snowmanTrail from '../../assets/snowman_trail.png';
import rarityChart from '../../assets/rarity_chart.png';
import tokenomicsDiagram from '../../assets/tokenomics_diagram.png';

const RoadmapPage = () => {
  return (
    <Container>
      <Header />
      <Main>
        <CoverSection>
          <img src={snowmanImage} alt="Cover" />
        </CoverSection>
        <WelcomeSection>
          <WelcomeDetail>
            <img src={headImage4} alt="Snowman head" />
            <p>
              Welcome to The Lodge. If you want to be a member you’ll need a
              snowman first. Nothing personal, just want to make sure you aren’t
              just anybody. The Lodge consists of only the most savage, laid
              back avax chads in all the snow caps. Fresh pow on deck, heaters
              inside, beer on tap, nothing beats The Lodge. You understand now
              right?
            </p>
            <img src={headImage2} alt="Snowman head" />
          </WelcomeDetail>
          <SnowmenCounter>
            <Counter>
              <span>- 0 +</span>
            </Counter>
            <Button>Mint Snowmen</Button>
          </SnowmenCounter>
          <LodgeMembers>
            <span>9999/10000 Have Joined The Lodge</span>
          </LodgeMembers>
        </WelcomeSection>
        <MintRoadmapSection>
          <h2>Mint Roadmap</h2>
          <RoadmapCheckpoint>
            <span>25%</span>
            <div>
              <p>-1,250 AVAX allocated to the Snowmen Treasury.</p>
              <p>-Liquidity Pool (LDOGE-AVAX) opens on Trader Joe.</p>
              <p>
                -625 AVAX paired with LODGE and added to the pool as initial
                liquidity.
              </p>
            </div>
          </RoadmapCheckpoint>
          <RoadmapCheckpoint>
            <span>50%</span>
            <div>
              <p>-2,500 AVAX allocated to the Snowmen Treasury.</p>
              <p>-The Snowmen Treasury begins $LODGE buy backs.</p>
              <p>-Random airdrops to stakers & LP farmers begin.</p>
            </div>
          </RoadmapCheckpoint>
          <RoadmapCheckpoint>
            <span>75%</span>
            <div>
              <p>-3,750 AVAX allocated to the Snowmen Treasury.</p>
              <p>-The Snowmen Treasury begins burning $LODGE.</p>
              <p>-Giveaway of 10 Snowmen to Snowmen stakers.</p>
            </div>
          </RoadmapCheckpoint>
          <RoadmapCheckpoint>
            <span>100%</span>
            <div>
              <p>-Phase 3 begins.</p>
              <p>-Snowmen Treasury is chalk full of AVAX.</p>
              <p>
                -Savage Snowmen launch party (special guests, holders free
                entry)
              </p>
            </div>
          </RoadmapCheckpoint>
        </MintRoadmapSection>
        <SavageSnowmenRoadmapSection>
          <img src={snowmanTrail} alt="Savage snowman roadmap" />
          <div>
            <h4>Phase 1</h4>
            <p>
              Mint a Snowman to join like-minded Avax Chads in The Lodge. We all
              just like to have a good time and enjoy Avalanche.
            </p>
            <h4>Phase 2</h4>
            <p>
              Stake your Snowman and start earning $LODGE! The earlier you
              accumulate the better. $LODGE is our ecosystem token and the
              currency of The Lodge.
            </p>
            <h4>Phase 3</h4>
            <p>
              Get your team to The Lodge first! Collaborate with fellow
              giga-brain Snowmen to solve the mystery of the Savage Snowmen.
              <br />
              This is only the beginning...
            </p>
          </div>
        </SavageSnowmenRoadmapSection>
        <SnowmenRaritySection>
          <img src={rarityChart} alt="Rarity chart" />
          <div>
            <p>
              Each Snowman is 100% unique. There are no Snowmen that are the
              same and some may have rarer attributes than others. However, all
              Snowmen are unified by being the select few members of The Lodge.
              Same same, but different.{' '}
            </p>
            <p>
              After mint, it is the Snowman responsibility to select who they
              want to join The Lodge. The power of who buys a Snowman in the
              secondary market is completely up to the members. You may let in
              fellow Chads or let in [REDACTED]s.
            </p>
          </div>
        </SnowmenRaritySection>
        <SnowmenTokenomicsSection>
          <TokenomicsDetail>
            <img src={tokenomicsDiagram} alt="Tokenomics Diagram" />
            <div className="">
              <h5>$LODGE Tokenomics:</h5>
              <p>
                Initial Supply: 20 million Available Supply: 100 million Total
                Supply: 250 million
              </p>

              <h5>Initial liquidity:</h5>
              <p>20 million $LODGE & 625 AVAX. Will be locked.</p>

              <h5>How To Earn $LODGE:</h5>
              <p>
                -Stake Snowman or Snowmen in Vault, reducing Snowmen circulating
                supply.
              </p>
              <p>
                -Add liquidity on Trader Joe and stake LP tokens into Snowmen
                Farm. incentivizing locked liquidity.
              </p>
            </div>
          </TokenomicsDetail>
          <TokenomicsTreasury className="">
            <h5>Snowmen Treasury:</h5>
            <p>
              -20% of mint & 2.5% of each secondary market sale is allocated to
              the treasury.
            </p>
            <p>
              -Buy back $LODGE on the open market putting more AVAX into the
              liquidity pool in ratio to $LODGE.
            </p>
            <p>-Burn $LODGE to decrease supply making the token more scarce.</p>
            <p>
              -Airdrop massive rewards to LP & Snowmen stakers incentivizing the
              Snowmen ecosystem.
            </p>
            <p>
              -Invest funds into yield farming protocols, generating stable
              revenue in order to sustain the positive feedback loop and grow
              the Snowmen ecosystem.
            </p>
          </TokenomicsTreasury>
        </SnowmenTokenomicsSection>
        <TeamSection>
          <div>
            <img src={headImage1} alt="Founder" />
            <span>Founder: Frosty</span>
          </div>
          <div>
            <img src={headImage2} alt="Founder" />
            <span>Founder: Esco</span>
          </div>
          <div>
            <img src={headImage3} alt="Artist" />
            <span>Artist: KAROH</span>
          </div>
          <div>
            <img src={headImage4} alt="Dev" />
            <span>Dev:</span>
          </div>
          <div>
            <img src={headImage4} alt="Dev" />
            <span>Dev:</span>
          </div>
        </TeamSection>
      </Main>
      <Footer />
    </Container>
  );
};

export default RoadmapPage;
