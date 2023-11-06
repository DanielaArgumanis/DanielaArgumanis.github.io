import styled from '@emotion/styled';

export const PortfolioHome = styled('div')`
  padding: ${(props) => `${props.theme.spacing(4)} 0`};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PortfolioTitleContainer = styled('div')`
  text-align: left;
`;

export const ContactSection = styled('div')`
  display: flex;
  gap: ${(props) => props.theme.spacing(6)};
  justify-content: center;
  padding: ${(props) => `${props.theme.spacing(8)} 0`};

  svg {
    width: 60px;
    height: 60px;

    :hover {
      cursor: pointer;
      .left-line {
        transition: all 0.2s ease-in;
        transform: translateY(-28px);
      }
      .top-line {
        transition: all 0.2s ease-in 0.2s;
        transform: translateX(28px);
      }
      .right-line {
        transition: all 0.2s ease-in 0.4s;
        transform: translateY(28px);
      }
      .bottom-line {
        transition: all 0.2s ease-in 0.6s;
        transform: translateX(-28px);
      }

      line {
        stroke: ${(props) => props.theme.palette.accents[1]};
      }
    }
  }
`;
