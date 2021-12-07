import styled from 'styled-components';

import coverBackground from '../../assets/cover_background.png';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CoverSection = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 900px;
  background: url(${coverBackground});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 100px;

  & > img {
    width: 400px;
  }
`;

export const WelcomeSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const WelcomeDetail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 30px;

  & > img {
    width: 150px;
    height: 150px;
  }

  & > p {
    font-size: 25px;
    width: 50%;
    text-align: center;
  }
`;

export const SnowmenCounter = styled.div``;

export const Counter = styled.div``;

export const LodgeMembers = styled.div``;

export const MintRoadmapSection = styled.section``;

export const RoadmapCheckpoint = styled.div``;

export const SavageSnowmenRoadmapSection = styled.section``;

export const SnowmenRaritySection = styled.section``;

export const SnowmenTokenomicsSection = styled.section``;

export const TokenomicsTreasury = styled.div``;

export const TokenomicsDetail = styled.div``;

export const TeamSection = styled.section``;
