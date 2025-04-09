import './App.css';
import { lazy, Suspense } from 'react';
import { init, loadRemote } from '@module-federation/enhanced/runtime';

init({
  name: '@demo/app-main',
  remotes: [
    {
      name: "remote",
      entry: "http://localhost:3002/remoteEntry.js",
      alias: "remote"
    }
  ]
});

const Button = lazy(() => loadRemote("remote/Button") as any);

const App = () => {


  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Suspense>
        <Button />
      </Suspense>
      </div>
    </div>
  );
};

export default App;
