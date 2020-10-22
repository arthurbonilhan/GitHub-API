import React from 'react';
import { Link } from 'react-router-dom';

import { Container,
         Topside,
         RepoIcon,
         Botside,
         StarIcon,
         ForkIcon,
       } 
from './styles';

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RapoCard: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,
  
}) => {
  const languageClass = language ? language.toLocaleLowerCase() : 'other';


  return (
    <Container>
      <Topside>
        <header>
          <RepoIcon/>
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>
        <p>

        </p>
      </Topside>

      <Botside>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </Botside>
    </Container>
  );
}

export default RapoCard;