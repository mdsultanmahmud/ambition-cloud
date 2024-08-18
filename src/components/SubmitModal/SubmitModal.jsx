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
    >
      <ModalContent>
        <ModalDescription>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              marginTop: "20px",
            }}
          >
            সাময়িক অর্ডার আইডি
          </p>
          <h3
            style={{
              textAlign: "center",
              fontSize: "22px",
              fontWeight: "600",
              margin: "30px 0px",
            }}
          >
            ২৩৬৫১
          </h3>
          <p
            style={{
              textAlign: "center",
              width: "80%",
              margin: "10px auto",
              fontSize: "18px",
            }}
          >
            আপনার সাথে শীগ্রই একজন প্রতিনিধি যোগাযোগ করে অর্ডার কনফার্ম করবে ।
            আপনি চাইলে আমাদের সাপোর্টে অর্ডার আইডি দিয়ে যোগাযোগ করতে পারেন ।
            অগ্রীম ধন্যবাদ ।
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
