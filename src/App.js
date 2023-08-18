import HomePage from "./pages/homePage";
// index.js or App.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AboutUsPage from "./pages/AboutUsPage";


function App() {
  return (
    <div className="bg-[#F4F4F4]">
      {/* <HomePage /> */}
      <AboutUsPage />
    </div>
  );
}

export default App;
