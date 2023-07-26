import { Outlet } from 'react-router-dom';
import coverImg from '../assets/cover.png';
import { CoverImage, MainContainer, MaxWidthContainer} from './styles'

export function Root() {
  return (
    <MainContainer>
      <MaxWidthContainer>
        <CoverImage src={coverImg} alt="" />
      </MaxWidthContainer>
      <Outlet />
    </MainContainer>
  );
}
