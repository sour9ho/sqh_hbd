import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "components/Title/Title";
import HyperLink from "components/HyperLink/HyperLink";
import DivisionLine from "components/DivisionLine/DivisionLine";

const HomeBlock = styled.div`
  margin: 6rem 15% 5rem 15%;
  max-width: 30rem;
  padding: 0;
`

const TestCautionBlock = styled.ul`
  margin-bottom: 1.5rem;
  padding: 1.5rem 2rem 1.5rem 3rem;

  border: 1px solid;
`

const TestCautionLi = styled.li`
  margin: 0.5rem 0rem;
  font-size: 18px;
  font-weight: 300;
`

const ButtonWrapper = styled.div`
  margin: 0;
  display: flex;
  justify-content: right;
`

const ButtonBlock = styled.button`
  /* position */
  padding: 0.2rem 0.5rem;
  margin-left: auto;
  
  /* shape */
  // 와 진짜 어메이징
  box-sizing: border-box;
  border: solid ${props => props.satisfied ? '#ffeb3c' : '#f2f2f2'};
  border-radius: 0.4rem;
  background-color: ${props => props.satisfied ? '#ffeb3c' : '#f2f2f2'};

  /* font */
  font: inherit;
  font-size: 20px;
  font-weight: 400;
  color: black;

  /* animation */
  transition: all ease 0.2s;
`

const FooterBlock = styled.footer`
  margin: 4rem 15% 5rem 15%;
  max-width: 30rem;
  color: gray;
  font-size: 12px;
  font-weight: 300;
  line-height: 12px;
`

function Home({questionInfo, testName}) {

  const { totalScore, numOfQuestions, shortAnswer, multipleAnswer } = questionInfo

  return (
    <>
      <HomeBlock className="Home">
        <Title
          testName={testName}
        />
        <TestCautionBlock className="test-caution-block">
          <TestCautionLi>{`본 시험은 <파트타임 파트너>와 <연애수업/연애사업>의 등장인물 신규호의 생일 축하하기 위해 만들어진 모의고사입니다.`}</TestCautionLi>
          <TestCautionLi>{`
            시험은 총 ${numOfQuestions}문제이며,
            ${multipleAnswer !== 0 ? `객관식 ${multipleAnswer}문제` : ""}${(multipleAnswer !== 0 && shortAnswer !== 0) ? "와 " : ""}${shortAnswer !== 0 ? `주관식 ${shortAnswer}문제` : ""}로
            구성되어 있습니다.
          `}</TestCautionLi>
          <TestCautionLi>{`총점은 ${totalScore}점입니다.`}</TestCautionLi>
          <TestCautionLi>{`문항에 따라 배점이 다르니, 각 물음의 끝에 표시된 배점을 참고해주세요.`}</TestCautionLi>
          <TestCautionLi>{`모든 문항에 답해야 시험지를 제출할 수 있습니다. 시험지를 제출하기 전, 모든 문항에 답했는지 다시 한 번 확인해주세요.`}</TestCautionLi>
          <TestCautionLi>{`준비가 끝나면 아래의 '시험 시작' 버튼을 눌러 시험을 시작해주세요.`}</TestCautionLi>
        </TestCautionBlock>
        <ButtonWrapper>
          <Link to="/play">
            <ButtonBlock>시험 시작</ButtonBlock>
          </Link>
        </ButtonWrapper>
        
      </HomeBlock>
      <FooterBlock>
        <DivisionLine/>
        <p>원작: <HyperLink link={"https://ridibooks.com/books/3274000002?_rdt_sid=author&_rdt_idx=0"}>파트타임 파트너</HyperLink>, <HyperLink link={"https://ridibooks.com/books/2971000001?_rdt_sid=author&_rdt_idx=1"}>연애수업/연애사업</HyperLink> / 작가: <HyperLink link={"https://ridibooks.com/author/31996#books"}>체리만쥬</HyperLink></p>
        <p>문제 제작: <HyperLink link={"https://twitter.com/lala_dduddu"}>@lala_dduddu</HyperLink> <HyperLink link={"https://twitter.com/cherry_pingu"}>@cherry_pingu</HyperLink></p>
      </FooterBlock>
    </>
  )
}

export default Home;