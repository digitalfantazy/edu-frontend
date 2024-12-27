import Catalog from '@/components/Catalog/Catalog';
import Intro from '@/components/Intro/Intro';

// import PrivateRoute from '../utils/privateRoute';

function MainPage({ refProp, scrollToCatalog }: any) {
  return (
    <div className="MainPage">
      <Intro scrollToCatalog={scrollToCatalog} />
      {/* <PrivateRoute element={<Catalog refProp={refProp} />} /> */}
      <Catalog refProp={refProp} />
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
    </div>
  );
}

export default MainPage;
