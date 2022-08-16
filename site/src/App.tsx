import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { HelloWorld } from "challenge-02";
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  )
}

export default App
