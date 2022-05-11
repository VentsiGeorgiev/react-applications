import { FeedbackProvider } from './context/FeedbackContext';
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbaackStats";
import FeedbackList from "./components/FeedbackList";

function App() {

  return (
    <>
      <FeedbackProvider>
        <Header />
        <div className="container">
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </div>
      </FeedbackProvider>
    </>

  )
}

export default App;