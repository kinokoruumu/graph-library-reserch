import * as React from "react";
import * as Styled from "./styled";
import { Typography } from "../Typography";
import { Spacer } from "../Spacer";

type Props = {
  title?: string;
  subtitle?: string;
};

const PageContent: React.FunctionComponent<Props> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <Styled.Container>
      {title != null && (
        <Styled.TitleContainer>
          <div>
            <Typography weight="bold" size="xl">
              {title}
            </Typography>
            {subtitle && (
              <Spacer pt={1}>
                <Typography color="secondary" size="sm">
                  {subtitle}
                </Typography>
              </Spacer>
            )}
          </div>
        </Styled.TitleContainer>
      )}
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
    </Styled.Container>
  );
};

export { PageContent };
