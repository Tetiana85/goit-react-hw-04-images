import { ThreeDots } from 'react-loader-spinner';
import { FormatedLoader } from './Loader.styled';
export const Loader = () => (
  <FormatedLoader>
    <ThreeDots
      height="150"
      width="150"
      radius="9"
      color="#3f51b5"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </FormatedLoader>
);
