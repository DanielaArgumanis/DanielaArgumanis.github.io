// @Components
import Typography from '@commonComponents/Typography/Typography';
import PageLink from '@commonComponents/PageLink/PageLink';
import Card from '@commonComponents/Card/Card';

// @Styles
import {
  Pill,
  PillContainer,
  ProjectCardContent,
  ProjectCardDescription,
  ProjectImage,
  ProjectImageContainer,
} from './Projects.styles';
import { PortfolioLink } from '@styles/Styles';

type ProjectItemProps = {
  title: string;
  description: string;
  technologies: readonly string[];
  image: string;
  urls: readonly { name: string; url: string }[];
  position: string;
};

const ProjectItem = ({
  title,
  description,
  technologies,
  image,
  urls,
  position,
}: ProjectItemProps) => {
  return (
    <PortfolioLink
      to={urls[0].url}
      target="_blank"
      aria-label={`Link to ${urls[0].name}`}
    >
      <Card noPadding isInteractive>
        <ProjectCardContent>
          <ProjectCardDescription>
            <Typography variant="title3">{title}</Typography>
            <Typography variant="body2" as="p">
              {description}
            </Typography>
            {urls.map((url) => (
              <PageLink key={url.name} {...url} />
            ))}
            <PillContainer>
              {technologies.map((technology) => (
                <Pill key={technology}>
                  <Typography variant="smallLabel">{technology}</Typography>
                </Pill>
              ))}
            </PillContainer>
          </ProjectCardDescription>
          <ProjectImageContainer>
            <ProjectImage src={image} position={position} />
          </ProjectImageContainer>
        </ProjectCardContent>
      </Card>
    </PortfolioLink>
  );
};

export default ProjectItem;
