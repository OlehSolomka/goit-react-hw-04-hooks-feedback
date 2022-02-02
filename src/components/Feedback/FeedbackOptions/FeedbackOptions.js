import s from "./FeedbackOptions.module.css";
const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={s.wrap}>
      {options.map((option) => (
        <button
          className={s.button}
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;
