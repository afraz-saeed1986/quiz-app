export default function Buttons({checked, nextQuestion, activeQuestion, questions, dict}) {
    return checked ?
        (
            <button className="btn" onClick={nextQuestion}>
                {activeQuestion === questions.length -1 ? dict["quiz"].finishBtn : dict["quiz"].nextBtn}
            </button>
        ) : (
            <button className="btn-disabled" onClick={nextQuestion} disabled>
                {activeQuestion === questions.length - 1 ? dict["quiz"].finishBtn : dict["quiz"].nextBtn}
            </button>
        )
    
}