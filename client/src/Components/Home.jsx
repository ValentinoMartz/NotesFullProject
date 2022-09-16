import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotes } from "../../src/redux/actions/index";
import Card from "./Card";

function Home() {
  const dispatch = useDispatch();
  const allNotes = useSelector((state) => state.notas);
  console.log(allNotes);

  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);

  return (
    <div>
      {allNotes &&
        allNotes.map((e) => {
          return <Card titulo={e.titulo} descripcion={e.descripcion} />;
        })}
    </div>
  );
}

export default Home;
