import { useState } from "react";
import FeedbackList from "./components/FeedbackList";

import Header from "./components/Header";
import FeedbackData from "./data/FeedBackData";

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <div className="container">
      <Header />
      <FeedbackList feedback={feedback} />
    </div>

  )
}

export default App;