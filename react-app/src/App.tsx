import { useCallback, useState } from "react";
import Alert from "./components/Alert";
import AlertButton from "./components/AlertButton";
import Button from "./components/Button";
//Challenge:
// Create a button that shows alert, and then an 'X' on the alert to remove the alert

//ongoing rn:
// Create button that alternates color when pressed

function App() {
  /*        Function for the Button Component to Change color on every click */
  // function getButtonColor(count: number): string {
  //   type PropStyle = {
  //     [key: number]: string;
  //   };

  //   const Styles: PropStyle = {
  //     0: "btn btn-primary",
  //     1: "btn btn-secondary",
  //     2: "btn btn-success",
  //     3: "btn btn-light",
  //     4: "btn btn-dark",
  //     5: "btn btn-danger",
  //   };

  //   return Styles[count];
  // }

  const [alertVisible, alertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert
          onClose={() => {
            alertVisibility(false);
          }}
        >
          My alert
        </Alert>
      )}
      <AlertButton
        onClick={() => {
          console.log("clicked eksdi hihi");
          alertVisibility(true);
        }}
        color="dark"
      >
        Baldur's Gay
      </AlertButton>
    </div>
  );
}

export default App;
