import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 1rem;
  /* XAxis, YAxisのtick lineを消す */
  .recharts-cartesian-axis-tick-line {
    display: none;
  }
`;

export const TooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const Lable = styled.p`
  margin: 0;
  text-align: left;
  color: #79848f;
  padding-bottom: 1rem;
`;

export const Body = styled.p`
  margin: 0;
  text-align: left;
  color: #091c31;
`;
