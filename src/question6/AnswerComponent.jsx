import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer } from "./questionSlice";

export default function AnswerComponent() {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.question.question);
  const answer = useSelector((state) => state.question.answer);
  const [input, setInput] = useState("");

  const handleAnswerChange = (e) => {
    dispatch(setInput(e.target.value));
  };

  const handleSubmit = () => {
    dispatch(setAnswer(input));
    setInput("");
  };

  return (
    <div>
      <p>Question: {question}</p>
      <input type="text" value={input} onChange={handleAnswerChange} />
      <button onClick={handleSubmit}>Submit answer</button>

      <p>Answer: {answer}</p>
    </div>
  );
}
