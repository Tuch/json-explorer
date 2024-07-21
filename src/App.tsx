import { JsonExplorer } from './components/JsonExplorer';
import { Header } from './components/Header';
import './styles.scss';

const demoData = {
  "res": {
    "date": "2021-10-27T07:49:14.896Z",
    "hasError": false,
    "fields": [
      {
        "id": "4c212130",
        "prop": "iban",
        "value": "DE81200505501265402568",
        "hasError": false
      },
      {
        "id": "4c212130",
        "prop": "iban",
        "value": "DE81200505501265402568",
        "hasError": false
      }
    ]
  }
};

const App = () => {
  return (
    <div>
      <Header />
      <JsonExplorer data={demoData} />
    </div>
  );
};

export { App }
