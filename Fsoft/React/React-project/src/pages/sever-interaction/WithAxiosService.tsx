import React, { Fragment, useRef, useState } from "react";
import { API_URL } from "../../AppApi";
import axios from "axios";
import AxiosService from "../sever-interaction/AxiosService";


interface WithAxiosProps {
  avatar: string;
  createdAt: string;
  id: string;
  name: string;
}
const WithAxiosService = () => {
  const [results, setResults] = useState<WithAxiosProps[] | {}>([]);
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [status, setStatus] = useState<string | null>(null);

  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const browserInfo = navigator.userAgent;

  const search = async (userID: string) => {
    try{
      const response = await AxiosService.getUser(userID);
      setResults(response);
    }catch(error){
      console.log("error", error);
      setStatus("error in search")
    }
  }
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

  const postUser = async () => {
    try {
      const response = await AxiosService.postUser(name);
      setResults(response);
      setName("");
      alert("Add user successfully!");
    }catch(error){
      console.log("error", error);
      setStatus("error in post")
    } 
  }
  const handleChangeUserId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };
  const updateUser = async () => {
    try {
      const response = await AxiosService.updateUser(id, name);
      setResults(response);
      setId("");
      setName("");
      alert("Update user successfully!");
    }catch(error){
      console.log("error", error);
      setStatus("error in update")
    }
  }
  const deleteUser = async () => {
    try {
      const response = await AxiosService.deleteUser(id);
      setResults(response);
      setId("");
      alert("Delete user successfully!");
    }catch(error){
      console.log("error", error);
      setStatus("error in delete")
    }
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
export default WithAxiosService;
