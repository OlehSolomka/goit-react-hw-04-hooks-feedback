import s from "./Statistic.module.css";

const Statistic = ({ good, neutral, bad, total, positivePersentage }) => {
  return (
    <div className={s.wrap}>
      <p className={s.text}>Good: {good}</p>
      <p className={s.text}>Neutral: {neutral}</p>
      <p className={s.text}>Bad: {bad}</p>
      <p className={s.text}>Total: {total}</p>
      <p className={s.text}>
        Positive Feedback: {positivePersentage.toFixed()} %
      </p>
    </div>
  );
};

export default Statistic;
