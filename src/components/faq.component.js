import React, {useState} from 'react';
import arrow from '../assets/images/dropdown-icon.svg';

export default () => {

    const [questions, setQuestions] = useState([
        {
            key: 'qa1',
            question: 'WHO ARE YOU?',
            answer: <span>We’re a team of blockchain developers, financial analysts, and marketers.<br /> You can learn more about our team here</span>,
            toggled: false
        },
        {
            key: 'qa2',
            question: 'WHO ARE YOU?',
            answer: <span>We’re a team of blockchain developers, financial analysts, and marketers.<br /> You can learn more about our team here</span>,
            toggled: false
        },
        {
            key: 'qa3',
            question: 'WHO ARE YOU?',
            answer: <span>We’re a team of blockchain developers, financial analysts, and marketers.<br /> You can learn more about our team here</span>,
            toggled: false
        },
        {
            key: 'qa4',
            question: 'WHO ARE YOU?',
            answer: <span>We’re a team of blockchain developers, financial analysts, and marketers.<br /> You can learn more about our team here</span>,
            toggled: false
        },
        {
            key: 'qa5',
            question: 'WHO ARE YOU?',
            answer: <span>We’re a team of blockchain developers, financial analysts, and marketers.<br /> You can learn more about our team here</span>,
            toggled: false
        },
        {
            key: 'qa6',
            question: 'WHO ARE YOU?',
            answer: <span>We’re a team of blockchain developers, financial analysts, and marketers.<br /> You can learn more about our team here</span>,
            toggled: false
        },
    ]);

    return <>
        <section className="questions">
            <div className="container">
                <div className="row">
                    <h1 className="question-cap">FREQUENTLY ASKED QUESTIONS</h1>
                    {questions.map((qa, index) => <div key={qa.key} onClick={() => {
                        questions[index].toggled = !questions[index].toggled;
                        setQuestions([...questions])
                    }} className="col-lg-12">
                        <div className={"question-card " + ((index+1) % 2 ? 'card-top' : 'card-bottom')}>
                            <div className="question-header">
                                <div className="question-header-text ">
                                    <h4 className="question-text">{qa.question}</h4>
                                </div>

                                <div className="question-header-dropicon">
                                    <img src={arrow} alt="" />
                                </div>
                            </div>
                            {qa.toggled && <p className="answer-text">
                                {qa.answer}
                            </p>}
                        </div>
                    </div>)}
                </div>
            </div>
        </section>

        <div className="green-bold-line"></div>

    </>
}