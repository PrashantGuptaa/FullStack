import { useState, useEffect } from "react";
import "./network.css";
import axios from 'axios';
const AxiosApi = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
fetchMyData();
  }, [])

  const fetchMyData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log("F-1", response.data);
      setTableData(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const saveData = async () => {
    const obj = {
        id: 4
    }
    const response = await axios({
        method: "delete",
        data: obj,
        url: "https://jsonplaceholder.typicode.com/todos"
    })
    console.log("F-2", response);
  }

  return (
    <>
      <h2>Axios API</h2>
      <button onClick={saveData}>Save Data</button>
      {tableData.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>User Id</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((dataObj) => (
              <tr>
                <td>{dataObj.id}</td>
                <td>{dataObj.userId}</td>
                <td>{dataObj.title}</td>
                <td>{dataObj.completed ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default AxiosApi;

