import { FaTasks, FaCheckCircle, FaClock } from "react-icons/fa";

const Dashboard = ({ todos }) => {

  const total = todos.length;

  const completed = todos.filter(
    (todo) => todo.completed
  ).length;

  const pending = total - completed;

  return (
    <section className="dashboard">

      <div className="card">

        <FaTasks className="icon" />

        <h2>{total}</h2>

        <p>Total Tasks</p>

      </div>

      <div className="card">

        <FaCheckCircle className="icon green" />

        <h2>{completed}</h2>

        <p>Completed</p>

      </div>

      <div className="card">

        <FaClock className="icon orange" />

        <h2>{pending}</h2>

        <p>Pending</p>

      </div>

    </section>
  );
};

export default Dashboard;
