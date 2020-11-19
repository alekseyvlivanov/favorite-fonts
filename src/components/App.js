import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import AppMain from './AppMain';

const fonts = new Array(24)
  .fill({})
  .map((card, idx) => ({ name: `font ${idx + 1}` }));

function App() {
  return (
    <>
      <AppHeader />
      <AppMain fonts={fonts} />
      <AppFooter />
    </>
  );
}

export default App;
