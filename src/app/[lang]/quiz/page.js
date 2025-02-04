"use client";
import { useState } from "react";
import { quiz } from "@/src/data";
import {Result,Buttons, Answers} from "@/src/components/quiz";
import LocaleSwitcher from "@/src/components/localeSwitcher";


export default function Quiz({dict, lang}) {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer,setSelectedAnswer] = useState('');
    const [checked, setChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0
    });

    const questions = lang === "en-us" ? quiz.Enquestions : quiz.Faquestions;

    const {answers, correctAnswer} = questions[activeQuestion];

    // Select and Check
    const onAnswerSelected = (answer, index) => {
        setChecked(true);
        setSelectedAnswerIndex(index);

        if(answer === correctAnswer){
            setSelectedAnswer(true);
            console.log("True Answer");
        } else {
            setSelectedAnswer(false);
            console.log("False Answer");
        }
    };

    //Calculate score and increment to next question
    const nextQuestion = () => {
        setSelectedAnswerIndex(null);
        setResult((prev) => selectedAnswer ? 
             {...prev, score: prev.score + 5, correctAnswers: prev.correctAnswers +1}
             :
             {...prev, wrongAnswers: prev.wrongAnswers +1}
        );

        if(activeQuestion !== questions.length -1){
            setActiveQuestion(prev => prev + 1);
        } else {
            setActiveQuestion(0);
            setShowResult(true);
        }

        setChecked(false);
    }


    return (
        <div className="container">
            <div className="text-center">
                <LocaleSwitcher />
            </div>
            <h1>{dict["quiz"].title}</h1>
            <div>
                {!showResult ? (
                    <h2>
                        {dict["quiz"].quizNum1}: {" "} 
                        {activeQuestion + 1} 
                        {dict["quiz"].quizNum2}:{" "}
                        <span>{questions.length}</span>
                    </h2>
                ) : null}
            </div>
            <div>
                {
                    !showResult ? (
                        <div className="quiz-container">
                            <h3>{questions[activeQuestion].question}</h3>
                            
                            <Answers answers={answers} onAnswerSelected={onAnswerSelected} selectedAnswerIndex={selectedAnswerIndex} />
                            
                           <Buttons checked={checked} nextQuestion={nextQuestion} activeQuestion={activeQuestion} questions={questions} dict={dict}/>
                        </div>
                    ) : (
                          <Result result={result} questions={questions} dict={dict} />
                    )
                }
            </div>
        </div>
        )
}

