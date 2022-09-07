import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import { useMemo } from 'react';

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div className='screenDiv'>
      <h1>Search</h1>
      <hr />

      <div className='row'>
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            type='text'
            placeholder='Search heroe'
            className='form-control'
            name='searchText'
            autoComplete='off'
            value={searchText}
            onChange={handleInputChange}
          />

          <button className='btn btn-outline-primary mt-2 '>Search</button>
        </form>
        <div className='col-7'>
          <h4 className='mt-3'>Results</h4>
          <hr />
          {q === '' ? (
            <div className='alert alert-info'> Search Heroe</div>
          ) : (
            heroesFilter.length === 0 && (
              <div className='alert alert-danger'>No results: {q}</div>
            )
          )}
          {heroesFilter.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
