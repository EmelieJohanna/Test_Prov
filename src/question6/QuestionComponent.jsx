import { useState } from "react";

import { useDispatch } from "react-redux";
import { setQuestion } from "./questionSlice";

export default function QuestionComponent() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleQuestionChange = (e) => {
    dispatch(setInput(e.target.value));
  };

  const handleSubmit = () => {
    dispatch(setQuestion(input));
    setInput("");
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleQuestionChange} />
      <button onClick={handleSubmit}>Submit question</button>
    </div>
  );
}
