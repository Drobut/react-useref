import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Button, Typography, Box, Container } from "@mui/material";

export default function FormExample() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/example");
  }

  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const button = useRef<HTMLInputElement>(null);

  const [pressedButton, setPressedButton] = useState<string>();

  function handleInputEmail(e: any) {
    if (e.key === "Enter") {
      inputPassword.current?.focus();
    }

    setPressedButton(e.key);
  }

  function handleInputPassword(e: any) {
    if (e.key === "Enter") {
      button.current?.focus();
    }

    setPressedButton(e.key);
  }

  function submitForms(e: any) {
    e.preventDefault();
    console.log("Formulário enviado");
  }

  return (
    <>
      <div className="page">
        <h1>Example</h1>
        <Box
          sx={{
            color: "white",
            fontFamily: "arial",
            display: "flex",
            flexAlign: "center",
            justifyContent: "center",
          }}
        >
          <form
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography variant="h3">Login</Typography>
            <div>
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="text"
                id="email"
                ref={inputEmail}
                onKeyDown={handleInputEmail}
                className="formControl"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                id="password"
                ref={inputPassword}
                onKeyDown={handleInputPassword}
                className="formControl"
              />
            </div>

            <button
              type="submit"
              onClick={submitForms}
              style={{
                width: "140px",
                height: "50px",
                border: "2px solid #61dbfb",
                backgroundColor: "black",
                borderRadius: "10px",
                color: "#61dbfb",
                fontSize: "20px",
                fontWeight: "bold",
                transition: "0.8s all",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Submit
            </button>
          </form>
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            width: 250,
            height: 100,

            display: "flex",
            alignItems: "center",
            justifContent: "center",
            flexDirection: "column",
            borderRadius: "20px",
            padding: "1%",

            position: "absolute",
            top: "10%",
            right: "5%",
          }}
        >
          <Typography>Tecla:</Typography>
          <Typography variant="h3">{pressedButton}</Typography>
        </Box>
        <button className="btn2" onClick={() => navigate(-1)}>
          Back
        </button>

        <button className="btn1" onClick={handleClick}>
          Next
        </button>
      </div>
    </>
  );
}
