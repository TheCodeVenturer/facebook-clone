
import Header from './Header'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Rightbar from './Rightbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='app_body'>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>

      {/*Body*/}
        {/*Side Bar*/}
        {/*Post*/}
        {/*Right Side Bar*/}
    </div>
  );
}

export default App;
