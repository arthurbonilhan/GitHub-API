import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GithubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit (event: React.FormEvent) {
    event.preventDefault();

    navigate('/' + search.toLocaleLowerCase().trim());
  }

  return (
    <Container>
      <a href="/"><GithubLogo /></a>
      
      <SearchForm onSubmit={handleSubmit}>
        <input placeholder="Pesquise um Usuario/Org" 
        value={search}
        onChange={e => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  )
}

export default Header;