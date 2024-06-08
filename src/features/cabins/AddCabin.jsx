import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <Modal>
      {/* // The Modal.Open component is a button that opens the modal window */}
      <div>
        <Modal.Open opens="cabin-form">
          {/* opens is a prop that tells the Modal.Open component which modal window to open */}
          <Button>Add new cabin</Button>
        </Modal.Open>

        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </div>

      {/* <Modal.Open opens="table">
        <Button>Show a Table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window> */}
    </Modal>
  );
}

// the old way of adding a cabin
// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </>
//   );
// }

export default AddCabin;
