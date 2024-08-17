import {
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Modal,
} from "semantic-ui-react";

// eslint-disable-next-line react/prop-types
function SubmitModal({ open, setOpen }) {
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <ModalContent>
        <ModalDescription>
          <p style={{
            textAlign:"center", 
            fontSize:"20px",
            marginTop:"20px" 
            
          }}>সামিয়ক অডার আইিড</p>
          <h3 style={{
            textAlign:"center", 
            fontSize:"22px", 
            fontWeight:"600", 
            margin:"30px 0px"
          }}>২৩৬৫১</h3>
          <p style={{
            textAlign:"center", 
            width:"80%", 
            margin:"10px auto", 
            fontSize:"18px"
          }}>
            আপনার সােথ শীই একজন িতিনিধ যাগােযাগ কের অডার কনফাম করেব । আপিন চাইেল
            আমােদর সােপােট অডার আইিড িদেয় যাগােযাগ করেত পােরন । অীম ধবাদ ।
          </p>
        </ModalDescription>
      </ModalContent>
      <ModalActions>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
      </ModalActions>
    </Modal>
  );
}

export default SubmitModal;
