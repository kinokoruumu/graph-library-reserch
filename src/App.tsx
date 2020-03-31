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
import { Color, Space } from "./styles/variables";
import { Typography } from "./components/Typography";
import { Spacer } from "./components/Spacer";

const Container = styled.div`
  padding: ${Space * 1.5}px;
  background-color: ${Color.background.dark};
`;

const HalfContent = styled.div`
  flex: 1;
  padding: ${Space * 1.5}px;
  min-width: 300px;
`;

function App() {
  return (
    <Container>
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
      <Spacer p={1.5}>
        <Typography size="xxxxl" weight="bold">
          Highcharts
        </Typography>
      </Spacer>
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
    </Container>
  );
}

export default App;
