import Alert from "./components/Alert";
import Button from "./components/Button";
//Challenge:
// Create a button that shows alert, and then an 'X' on the alert to remove the alert

//ongoing rn:
// Create button that alternates color when pressed

const handleClickButton = () => {
  let value = 0;
  value++;

  if ((value = 6)) {
    value = 0;
  }

   type PropStyle = {
    [key: number]: string
  }

  const Styles: PropStyle = {
    0: "btn btn-primary",
    1: "btn btn-secondary",
    2: "btn btn-success",
    3: "btn btn-light",
    4: "btn btn-dark",
    5: "btn btn-danger",
  };

  return Styles[value]
};

function App() {
  return (
    <div>
      <Button cuba></Button>
    </div>
  );
}

export default App;
