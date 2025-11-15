import React from 'react';
import LoadingPage from './components/LoadingPage';
import HomePage from './components/HomePage';

function App() {
  const [showLoading, setShowLoading] = React.useState(true);

  if (showLoading) {
    return <LoadingPage onLoadingComplete={() => setShowLoading(false)} />;
  }

  return <HomePage />;
}

export default App;