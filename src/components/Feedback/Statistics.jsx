export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p>good: {good}</p>
      <p>neutral :{neutral}</p>
      <p>bad: {bad}</p>
      <p>total: {total()}</p>
      <p>p: {positivePercentage()}%</p>
    </>
  );
};
