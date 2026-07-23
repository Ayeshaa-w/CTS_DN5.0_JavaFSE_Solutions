function Student(props) {

  const percentage = (props.total / 300) * 100;

  return (
    <div>

      <h1>Student Details:</h1>

      <h2>Name: {props.name}</h2>

      <h2>School: {props.school}</h2>

      <h2>Total: {props.total} Marks</h2>

      <h2>Score: {percentage.toFixed(2)}%</h2>

    </div>
  );

}

export default Student;