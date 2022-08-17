import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
   display: grid;
   grid-template: 
   "viewfinder viewfinder viewfinder viewfinder"
   "button7 button8 button9 buttonPlus"
   "button4 button5 button6 buttonMinus"
   "button1 button2 button3 buttonMult"
   "button0 buttonClear buttonResult buttonSplit";
`

const Button = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: pink;
    border: 0.2px solid red;
`

const Viewfinder = styled.div`
    grid-area: viewfinder;
    background: black;
    color: red;
`

const numbers = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
]

function makeButtonNumber(number: number, numberClick: (n: number) => void) {
    return (
        <Button onClick={() => numberClick(number)} style={{ gridArea: "button" + number }}>
            {number}
        </Button>
    )
}

function Calculator() {
    const [data, setData] = useState<string>("");
    const [operator, setOperator] = useState<string>("");
    const [preCalculate, setPreCalculate] = useState<string>("");

    useEffect(() => {
        if (operator != "") {
            setPreCalculate(data);
            setData("");
        } else {
            onResult(true);
        }
    }, [operator])

    function numberClick(n: number) {
        setData(data + String(n));
    }

    function onClear() {
        setData("");
        setPreCalculate("");
        setOperator("");
    }

    function onResult(byOperator = false) {
        let result = "";

        switch (operator) {
            case "+":
                result = String(parseInt(preCalculate) + parseInt(data));
                break;
            case "-":
                result = String(parseInt(preCalculate) - parseInt(data));
                break;
            case "*":
                result = String(parseInt(preCalculate) * parseInt(data));
                break;
            case "/":
                result = String(parseInt(preCalculate) / parseInt(data));
                break;
        }

        if (!byOperator) {
            setData(result);
            setPreCalculate("");
        } else {
            setData("");
            setPreCalculate(result);
        }
    }

    function onPlus() {
        setOperator("+");
    }

    function onMinus() {
        setOperator("-");
    }

    function onMult() {
        setOperator("*");
    }

    function onSplit() {
        setOperator("/");
    }


    return (
        <Container>
            <Viewfinder>
                {data ? data :
                    (!preCalculate ? 0 : preCalculate)}
            </Viewfinder>
            {numbers.map((number) => makeButtonNumber(number, numberClick))}
            <button style={{ gridArea: "buttonClear" }} onClick={onClear}>limpar</button>
            <button style={{ gridArea: "buttonResult" }}
                //@ts-ignore
                onClick={onResult}>=</button>
            <button style={{ gridArea: "buttonPlus" }} onClick={onPlus}>+</button>
            <button style={{ gridArea: "buttonMinus" }} onClick={onMinus}>-</button>
            <button style={{ gridArea: "buttonMult" }} onClick={onMult}>*</button>
            <button style={{ gridArea: "buttonSplit" }} onClick={onSplit}>/</button>
        </Container>
    )
}

export default Calculator;