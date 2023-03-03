import React from 'react'
import {MathJax} from 'better-react-mathjax'

export const Questions = ({question}) => {
    return (<>
        <MathJax>{question}</MathJax>
    </>)
}