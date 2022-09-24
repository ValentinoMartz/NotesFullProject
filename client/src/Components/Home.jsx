import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotes } from "../../src/redux/actions/index";

function Home() {
  const dispatch = useDispatch();
  const allNotes = useSelector((state) => state.notas);
  console.log(allNotes);

  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);

  return (
    <div>
      Home
       {allNotes &&
        allNotes.map((e) => {
          return console.log();
        })}
    </div>
  );
}

export default Home;
