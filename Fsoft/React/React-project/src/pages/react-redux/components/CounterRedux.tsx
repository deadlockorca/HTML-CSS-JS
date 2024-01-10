import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { increaseCountA, increaseCountB } from "../actions/counter.action";
import { useDispatch } from "react-redux";
import { RootState } from "../types/model";

const CounterRedux = () => {
  const counterState = useSelector((state: RootState) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          dispatch(increaseCountA(9));
        }}
      >
        Add count Number A
      </Button>
      <Typography className="m-2">
        Count number A {counterState.countA}
      </Typography>
      <Typography className="mx-2 mb-2">Total: {counterState.total}</Typography>
      <Typography className="mx-2 mb-2">
        Count number B: {counterState.countB}
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          dispatch(increaseCountB(11));
        }}
      >
        Add count Number B
      </Button>
    </div>
  );
};

export default CounterRedux;
