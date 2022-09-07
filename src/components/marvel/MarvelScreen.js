import { HeroList } from '../hero/HeroList';

export const MarvelScreen = () => {
  return (
    <div className='screenDiv'>
      <h1>Marvel Screen</h1>
      <hr />
      <HeroList publisher={'Marvel Comics'} />
    </div>
  );
};
