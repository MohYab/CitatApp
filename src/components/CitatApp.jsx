import { useState } from "react";

const CitatApp = () => {
  const [citat, setCitat] = useState([]);
  const [showFavorit, setShowFavorit] = useState(false);

  const fetchNewCitat = async () => {
    const url = "";
    const response = await fetch(url);
    const data = await response.json();
    setCitat({
      text: data.text,
      author: data.author,
    });
  };

  return (
    <div>
      <p>{citat.text}</p>
      <p>{citat.author}</p>
    </div>
  );
};
