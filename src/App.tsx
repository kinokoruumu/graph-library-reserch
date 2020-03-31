import React from "react";
import styled from "styled-components";
import StackChart from "./components/StackChart";
import LineChart from "./components/LineChart";
import BarAndLineChart from "./components/BarAndLineChart";
import AreaChart from "./components/AreaChart";
import LineExample from "./components/chartjs/LineChart";
import BarExample from "./components/chartjs/BarChart";
import { PageContent } from "./components/PageContent";
import { Flex } from "./components/Flex";
import { Color, Space, Radius, Size } from "./styles/variables";
import { Typography } from "./components/Typography";
import { Spacer } from "./components/Spacer";
import { SwitchChart } from "./components/SwitchChart";
import { getSampleData } from "./utils/ChartUtils";
import { fontSize } from "./components/Typography/Typography";

const Container = styled.div`
  padding: ${Space * 1.5}px;
  background-color: ${Color.background.dark};

  .custom-tooltip-container {
    background-color: ${Color.background.default};
    box-shadow: 0px 0px 16px #041c3315;
    border-radius: ${Radius.SMALL};
  }
  .custom-tooltip-title {
    padding: ${Space}px ${Space * 1.5}px;
    border-bottom: ${Size.Border.Small} solid ${Color.gray.light};
    color: ${Color.text.secondary};
    font-size: ${fontSize["sm"]};
  }
  .custom-tooltip-text {
    display: flex;
    align-items: center;
    font-size: ${fontSize["sm"]};
    .circle {
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: ${Color.gray.light};
      margin-right: ${Space * 0.5}px;
    }
    .custom-tooltip-value {
      margin-left: ${Space}px;
      font-weight: bold;
    }
  }

  .custom-tooltip-content {
    padding: ${Space * 3}px ${Space * 1.5}px;
  }
`;

const HalfContent = styled.div`
  flex: 1;
  padding: ${Space * 1.5}px;
  min-width: 300px;
`;

const data = getSampleData();

function App() {
  return (
    <Container>
      <Spacer p={1.5}>
        <Typography size="xxxxl" weight="bold">
          Highcharts
        </Typography>
      </Spacer>
      <Flex display="flex">
        <HalfContent>
          <PageContent title="SwitchChart">
            <SwitchChart data={data} />
          </PageContent>
        </HalfContent>
      </Flex>
      <Flex display="flex">
        <HalfContent>
          <PageContent title="BarAndLineChart">
            <BarAndLineChart />
          </PageContent>
        </HalfContent>
        <HalfContent>
          <PageContent title="LineChart">
            <LineChart />
          </PageContent>
        </HalfContent>
      </Flex>
      <Flex display="flex">
        <HalfContent>
          <PageContent title="StackChart">
            <StackChart />
          </PageContent>
        </HalfContent>
        <HalfContent>
          <PageContent title="AreaChart">
            <AreaChart />
          </PageContent>
        </HalfContent>
      </Flex>
      <Spacer p={1.5}>
        <Typography size="xxxxl" weight="bold">
          Charts.js
        </Typography>
      </Spacer>
      <Flex display="flex">
        <HalfContent>
          <PageContent title="LineExample">
            <LineExample />
          </PageContent>
        </HalfContent>
        <HalfContent>
          <PageContent title="BarExample">
            <BarExample />
          </PageContent>
        </HalfContent>
      </Flex>
    </Container>
  );
}

export default App;
