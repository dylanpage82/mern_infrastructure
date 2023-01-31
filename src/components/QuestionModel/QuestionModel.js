import styles from './QuestionModel.module.scss'
import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter
} from 'mdb-react-ui-kit';

export default function QuestionModel({
    setToggleModel,
    id,
    toggleModel,
    jeopardys,
    setId
}) {
  let [question, setQuestion] = useState('');
  let [answer, setAnswer] = useState(false)

  const toggleShow = () => setToggleModel(false)
  const toggleAnswer = () => setAnswer(!answer)
 
  


  useEffect(() =>{
     let found = jeopardys.find(jeopardys => jeopardys._id === id)
     setQuestion(found)
  })


  return (
    <>

      <MDBModal show={toggleModel} tabIndex='-1' setShow={setToggleModel}>
        <MDBModalDialog size='lg' centered>
          <MDBModalContent className={styles.title}>
            <MDBModalHeader >
        
            </MDBModalHeader>
            <MDBModalBody size='lg'>
                {question.question}
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn onClick={toggleAnswer}>Answer</MDBBtn>
                {
                    answer ? <h1>{question.answer}</h1>
                    : ''
                }
                <MDBBtn onClick={
                    toggleShow
                    }>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}