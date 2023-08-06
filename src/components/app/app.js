import advantagesList from "../../mocks/advantages-list.js";
import partnersList from "../../mocks/partners-list.js";
import paymentList from "../../mocks/payment-list.js";
import servicesList from "../../mocks/services-list.js";
import switchList from "../../mocks/switch-list.js";
import PageWrapper from "../layout/page-wrapper/PageWrapper.jsx";
import "./style.css";

function App() {
  return (
    <PageWrapper cards={advantagesList} services={servicesList} transports={switchList} partners={partnersList} payments={paymentList}/>
  );
}

export default App;