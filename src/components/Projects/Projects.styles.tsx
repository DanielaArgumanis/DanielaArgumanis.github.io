import styled from '@emotion/styled';

// @Styles
import { CardContainer } from '@styles/Styles';

// @Types
import { Breakpoint } from '@theme/Theme.types';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1)};
  max-width: 100%;
  margin: ${({ theme }) => theme.spacing(1)};
`;

export const Pill = styled.div`
  display: inline-flex;
  border-radius: 20px;
  border: solid 1px ${({ theme }) => theme.palette.primary};

  > span {
    margin: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(1)}`};
  }
`;

export const ProjectCard = styled(CardContainer)<{ reverse?: boolean }>`
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  ${(props) => props.theme.breakpoints.down(Breakpoint.laptopS)} {
    flex-direction: column;
  }
`;

export const ProjectCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)};
  width: 40%;

  ${(props) => props.theme.breakpoints.down(Breakpoint.laptopS)} {
    width: 100%;
  }
`;

export const ProjectImageContainer = styled.div`
  width: 60%;
  height: 100%;

  ${(props) => props.theme.breakpoints.down(Breakpoint.laptopS)} {
    flex-direction: column;
    width: 100%;
  }
`;

export const ProjectImage = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
  object-position: right;
`;
