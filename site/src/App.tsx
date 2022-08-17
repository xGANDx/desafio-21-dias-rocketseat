import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { HelloWorld } from "challenge-02";
import { Toogle } from "challenge-03";
import { Calculator } from "challenge-04";
import "./App.css";

function App() {
  return (
    <div className="App">
      <br />
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Desafio 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <HelloWorld />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Desafio 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Toogle />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Desafio 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Calculator />
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  )
}

export default App
