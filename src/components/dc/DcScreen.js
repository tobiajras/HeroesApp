import { HeroList } from '../hero/HeroList';

export const DcScreen = () => {
  return (
    <div className='screenDiv'>
      <h1>DC Screen</h1>
      <hr />
      <HeroList publisher={'DC Comics'} />
    </div>
  );
};
