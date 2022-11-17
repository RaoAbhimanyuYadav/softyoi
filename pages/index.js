import { TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("");
  const handleData = (e) => {
    setData(e.target.value);
  };
  const [map, setMap] = useState({});
  useEffect(() => {
    let tempMap = {};
    data.split("").forEach((c) => {
      if (tempMap[c]) {
        tempMap[c]++;
      } else {
        tempMap[c] = 1;
      }
    });
    setMap(tempMap);
  }, [data]);
  return (
    <div>
      <Typography>Enter Your input</Typography>
      <TextField sx={{ color: "#fff" }} value={data} onChange={handleData} />
      <div>
        {Object.entries(map)
          .sort((a, b) => a[1] < b[1])
          .map((c) => {
            return <Typography key={c[0]}>{`${c[0]}: ${c[1]}`}</Typography>;
          })}
      </div>
    </div>
  );
}
