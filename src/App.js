import React from 'react'
import Loading from "./components/Loading";

const App = ({
  loading
}) => {
  return (
    <>
      <div className="mainapp-main">
        {/* 子应用 */}
        <Loading loading={loading} />
        <main id="subapp-viewport" />
      </div>
    </>
  )
}

export default App