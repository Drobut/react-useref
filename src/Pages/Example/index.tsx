import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Button, Typography, Box, Container } from "@mui/material";

export default function Example() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/example");
  }

  const [count, setCount] = useState<number>(5);
  const previousCountRef = useRef<number>(0);
  const previousCount = useRef<number>(0);

  previousCount.current = previousCountRef.current;

  useEffect(() => {
    previousCountRef.current = count;
  }, [count]);

  return (
    <>
      <div className="page">
        <h1>Example</h1>
        <Container
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "25vh",
          }}
        >
          <Typography variant="h3">Contador</Typography>
          <Typography variant="h6">Valo atual : {count}</Typography>
          <Typography variant="h6">
            último valor: {previousCount.current}
          </Typography>
          <Button
            variant="contained"
            onClick={() => setCount(count + 1)}
            sx={{ marginTop: "20px" }}
          >
            Adicionar
          </Button>
        </Container>

        <button className="btn2" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </>
  );
}
