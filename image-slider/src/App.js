import ImageSlider from './components/ImageSlider';
import './App.css';

const App = () => {

  const slides = [
    { url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60", title: "nature" },
    { url: "https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60", title: "nature" },
    { url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", title: "nature" },
  ];

  return (
    <div>
      <h1>Image Slider</h1>
      <div className="slider-container">
        <ImageSlider slides={slides} />
      </div>
    </div>
  )
};

export default App;