import { useState } from 'react'
import iconMinus from '../src/assets/icon-minus.svg'
import iconPlus from '../src/assets/icon-plus.svg'
import iconStar from '../src/assets/icon-star.svg'
import './FaqComponent.css'

const questions = [
  {
    question: 'What is Frontend Mentor, and how will it help me?',
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: 'Is Frontend Mentor free?',
    answer:
      'Yes, Frontend Mentor offers both free and premium coding challenges. The free challenges give you plenty of projects to practise your skills.',
  },
  {
    question: 'Can I use Frontend Mentor projects in my portfolio?',
    answer:
      'Definitely! Feel free to include the projects you build in your portfolio. They are a great way to show what you can do.',
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The Frontend Mentor community is a great place to ask for help. Share what you've tried in the Discord help channel and other developers can offer guidance.",
  },
]

export function FaqComponent() {
  const [openIndex, setOpenIndex] = useState(0)

  function toggleQuestion(index) {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index))
  }

  return (
    <section className="faq-card" aria-labelledby="faq-title">
      <div className="faq-heading">
        <img className="faq-star" src={iconStar} alt="" />
        <h1 id="faq-title">FAQs</h1>
      </div>

      <div className="faq-list">
        {questions.map(({ question, answer }, index) => {
          const isOpen = openIndex === index
          const answerId = `faq-answer-${index}`

          return (
            <article className="faq-item" key={question}>
              <h2 className="faq-question">
                <button
                  aria-controls={answerId}
                  aria-expanded={isOpen}
                  className="faq-toggle"
                  onClick={() => toggleQuestion(index)}
                  type="button"
                >
                  <span>{question}</span>
                  <img
                    alt=""
                    className="faq-toggle-icon"
                    src={isOpen ? iconMinus : iconPlus}
                  />
                </button>
              </h2>
              <div className="faq-answer" hidden={!isOpen} id={answerId}>
                <p>{answer}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
