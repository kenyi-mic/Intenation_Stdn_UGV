import Banner from "./Banner";
import Main from './Main'

function Home() {
  return (
    <div>
      <div>
        <div>
          <Banner />
        </div>
        <img src="http://placehold.it/" alt="background"/>
        <Main/>
      </div>
    </div>
  );
}

export default Home;
