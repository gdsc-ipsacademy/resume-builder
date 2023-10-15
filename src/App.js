import FormContainer from "./Components/FormContainer";
import {useEffect} from "react"
function App() {
  useEffect(()=>{
    document.title="Resume Builder"
  })
  return (
    <div className="App">
      <FormContainer />
    </div>
  );
}

export default App;
