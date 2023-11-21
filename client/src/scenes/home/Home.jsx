import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe"; 
import Banner from "./Banner"

function Home() {
  return (
    <div className="home">
      <MainCarousel />
      <ShoppingList />
      <Banner/>
      <Subscribe />
    </div>
  );
}

export default Home;