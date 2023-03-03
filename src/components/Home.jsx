import React, { useEffect, useState } from 'react'
import Option from './Option';
import Button from 'react-bootstrap/Button';
import { MathJax } from 'better-react-mathjax'
import { Questions } from './Question';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import { Alert } from 'bootstrap';

export const Home = () => {
    const [selectedQuestionID, setSelectedQuestionID] = useState(0)
    const [QuestionID, setQuestionID] = useState(['AreaUnderTheCurve_901', 'BinomialTheorem_901', 'DifferentialCalculus2_901'])

    const [Question, setQuestion] = useState()
    const [status, setStatus] = useState({ loading: false, err: false })
    const [selectedOption, setSelectedOption] = useState('');
    const [options, setOptions] = useState([
        { value: 'Option A', label: 'Option A' },
        { value: 'Option B', label: 'Option B' },
        { value: 'Option C', label: 'Option C' },
        { value: 'Option D', label: 'Option D' }
    ]);


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };



    const fetchQuestion = async () => {
        try {
            setStatus({ loading: true, err: false })
            let req = await fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${QuestionID[selectedQuestionID]}`)


            let result = await req.json()

            setQuestion(result[0])
            setStatus({ loading: false, err: false })

        } catch (err) {
            setStatus({ loading: false, err: true })
        }

    }

    const handleSubmit = ()=>{
        alert('Answere Submitted Successfully')
    }

    useEffect(() => {

        fetchQuestion();

    }, [selectedQuestionID])

    return (<>
        <h1>Home</h1>


        <div className="SelectedAnswere" ><strong><i>Selected Answer : </i>{selectedOption}</strong></div><br />

        <div >
            {status.loading ? <Spinner animation="border" /> :
                status.err ? <div>Network Error</div> : Question
                    ?
                    <div style={{ display: 'inline-block' }} >
                        <strong>Question &rarr; </strong>
                        <div className='question'>
                            <Questions question={Question.Question} />
                        </div>
                        <Option options={options} handleOptionChange={handleOptionChange} selectedOption={selectedOption} />
                    </div>
                    : <div>Error 502 : Internal Server Error</div>}
        </div>
        <br />

        <Button variant="primary" disabled={selectedQuestionID == 0} onClick={() => { setSelectedQuestionID((p) => p - 1) 
        setSelectedOption('')}
        } >Prev</Button>{' '}


        <Button variant="success" disabled={selectedOption == ''} onClick={handleSubmit} >Success</Button>{' '}

        <Button variant="primary" disabled={selectedQuestionID == 2} onClick={() => { setSelectedQuestionID((p) => p + 1) 
        setSelectedOption('')}
        } >Next</Button>{' '}


    </>)
}
