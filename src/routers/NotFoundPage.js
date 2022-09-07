import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className='mt-5'>
      <h5 className='alert alert-danger '>404 Not Found</h5>
      <div>
        <Link className='btn btn-primary' to={'/'}>
          Back to home
        </Link>
      </div>
    </div>
  );
};
