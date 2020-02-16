import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  background-color: rgba(255, 255, 255, 0.5);
  scroll-overflow-y: none;
`;

export const ModalBody = styled.div`
  height: 80%;
  width: 60%;
  background-color: white;
  position: fixed;
  z-index: 1500;
  top: 60px;
  left: 20%;
`;

export const ModalHeader = styled.div`
  height: 40%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
`;

export const ModalText = styled.div` 
  height: 60%;
  width: 100%;
  background-color: ghostwhite;
  position: relative;
`;

export const ModalDescriptionTitle = styled.div`
  font-size: 22px;
  color: black;
  font-weight: 600;
  margin-top: 20px;
  margin-right: 10px;
  background-color: rgba(0, 0, 0, 0);
  padding: 20px;
`;

export const ModalDescription = styled.div`
  font-size: 20px;
  color: black;
  font-weight: 500;
  letter-spacing: 1px;
  background-color: rgba(0, 0, 0, 0);
  padding-left: 20px;
`;

export const ModalTitle = styled.a`
  font-size: 26px;
  color: black;
  background-color: rgba(0, 0, 0, 0);
  font-weight: 600;
  padding: 20px;
`;

export const ModalButton = styled.div`
  color: white;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 20px;
`;