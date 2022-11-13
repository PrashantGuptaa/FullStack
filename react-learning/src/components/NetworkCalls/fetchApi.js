import { useState, useEffect } from "react";
import "./network.css";

const FetchApi = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
fetchMyData();
  }, [])

  const fetchMyData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log("F-1", response);
      const responseJson = await response.json();
      console.log("F-2", responseJson);
      setTableData(responseJson);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h2>Fetch API</h2>
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

export default FetchApi;

// getMyData().then(res => // do something).catch((err) => // handle error)
