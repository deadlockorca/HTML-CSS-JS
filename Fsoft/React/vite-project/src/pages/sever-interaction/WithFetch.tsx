import React, { Fragment, useRef, useState } from "react";
import { API_URL } from "../../AppApi";

interface WithFetchProps {
  avatar: string;
  createdAt: string;
  id: string;
  name: string;
}
const WithFetch = () => {
  const [results, setResults] = useState<WithFetchProps[] | {}>([]);
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");

  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const search = (userID: string) => {
    fetch(API_URL + `/${userID}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setResults(data))
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
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResults(data.id);
        setName("");
        alert("Add user successfully!");
      })
      .catch((error) => console.log(error));
  };
  const handleChangeUserId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };
  const deleteUser = () => {
    fetch(API_URL + `/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setId("");
        alert(`Delete user successfully!: ${data.id}`);
      })
      .catch((error) => console.log(error));
  };
  const updateUser = () => {
    fetch(API_URL + `/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name }),
    })
      .then((response) => response.json())
      .then((data) => {
        setId("");
        setName("");
        setId("");
        alert(`Update user successfully!: ${data.id}`);
      })
      .catch((error) => console.log(error));
  }

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
            results.map((item: WithFetchProps) => (
              <li
                className="list-group-item"
                key={item.id}
              >{`${item.name}`}</li>
            ))
          ) : (
            <li className="list-group-item">
              {`${(results as WithFetchProps)?.id}`}-
              {`${(results as WithFetchProps)?.name}`}
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
export default WithFetch;
