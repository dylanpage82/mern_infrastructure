import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function PlayerChoice({setMultiPlayer}){
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  const toggle2Player = () => setMultiPlayer(true);
  const toggle1Player = () => setMultiPlayer(false);

  return (
    <>
      <MDBBtn onClick={toggleShow}>Multiplayer</MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Player Selection</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                <MDBBtn color ='secondary' onClick={toggle1Player}>
                    1 Player
                </MDBBtn>
                <MDBBtn color='secondary' onClick={toggle2Player}>
                    2 Player
                </MDBBtn>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    
            
    </>
    
  );
}