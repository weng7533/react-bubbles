import React, { useState, useEffect } from "react";
import { axiosWithAuth } from './axiosAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const [edited, setEdited] = useState(false);
  const handleEdited = () => setEdited(true);

  useEffect(() => {
    axiosWithAuth()
      .get('/colors')
      .then(res => {
        console.log(res)
        setColorList(res.data);
      })
      .catch(err => console.log(err));
    setEdited(false)
  }, [edited])

  return (
    <>

      <ColorList colors={colorList} updateColors={setColorList} edited={handleEdited} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
