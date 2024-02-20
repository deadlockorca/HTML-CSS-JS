import React, { Fragment, useRef, useState } from "react";
import { API_URL } from "../../AppApi";
import axios from "axios";

interface WithAxiosProps {
  avatar: string;
  createdAt: string;
  id: string;
  name: string;
}
const WithAxiosNormal = () => {
  const [results, setResults] = useState<WithAxiosProps[] | {}>([]);
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");

  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const browserInfo = navigator.userAgent;

  const search = (userID: string) => {
    axios({
      method: "GET",
      url: API_URL + `/${userID}`,
      headers: {
        "Content-Type": "application/json",
        "brower-info": browserInfo,
      },
    })
      .then((response) => setResults(response.data))
      .catch((error) => console.log(error));
  };
  const debounceSearch = (value: string) => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    debounceTimeoutRef.current = setTimeout(() => {
      search(value);
    }, 500);
  };

  const handleChangeUser = (event: React.ChangeEvent) => {
    setName((event.target as HTMLInputElement).value);
  };

  const postUser = () => { 
    axios({
      method: "POST",
      url: API_URL,
      headers: {
        "Content-Type": "application/json",
        "brower-info": browserInfo,
      },
      data: { name: name || "" },
    })
      .then((response) => {
        setResults(response.data.id);
        setName("");
        alert("Add user successfully!");
      })
      .catch((error) => console.log(error));
  };
  const handleChangeUserId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };
  const deleteUser = () => {
    axios({
      method: "DELETE",
      url: API_URL + `/${id}`,
      headers: {
        "Content-Type": "application/json",
        "brower-info": browserInfo,
      },
    })
      .then((response) => {
        setResults(response.data);
        setId("");
        alert("Delete user successfully!");
      })
      .catch((error) => console.log(error));
  };
  const updateUser = () => {
    axios({
      method: "PUT",
      url: API_URL + `/${id}`,
      headers: {
        "Content-Type": "application/json",
        "brower-info": browserInfo,
      },
      data: { name: name || "" },
    })
      .then((response) => {
        setResults(response.data);
        setId("");
        setName("");
        alert("Update user successfully!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Fragment>
      <div className="container">
        <h2>With Fetch</h2>
        <h3>Search user</h3>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type to search"
            onKeyUp={(e) => debounceSearch(e.currentTarget.value)}
          />
        </div>
        <ul className="list-group">
          {Array.isArray(results) ? (
            results.map((item: WithAxiosProps) => (
              <li
                className="list-group-item"
                key={item.id}
              >{`${item.name}`}</li>
            ))
          ) : (
            <li className="list-group-item">
              {`${(results as WithAxiosProps)?.id}`}-
              {`${(results as WithAxiosProps)?.name}`}
            </li>
          )}
        </ul>
        <hr />
        <h3>Create user</h3>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type to search"
            value={name}
            onChange={handleChangeUser}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={postUser}>
            Add user
          </button>
        </div>
        <hr />
        <h3>Delete user</h3>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type to search"
            value={id}
            onChange={handleChangeUserId}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={deleteUser}>
            Delete User
          </button>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type to search"
            value={id}
            onChange={handleChangeUserId}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type to search"
            value={name}
            onChange={handleChangeUser}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={updateUser}>
            Update User
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default WithAxiosNormal;
