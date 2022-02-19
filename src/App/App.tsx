import ReposSearchPage from "../pages/ReposSearchPage/ReposSearchPage";
import React from "react";
import "./App.scss"


function App() {
  return (
    <div className="App">
<ReposSearchPage />
    </div>

  )
 
}export default App;


      //  {repoList.map((repo) => (
      //     <React.Fragment key={repo.id}>
      //       <RepoTile repo={repo} onClick={showDrawer} />
      //       <RepoBranchesDrawer
      //         selectedRepo={repo}
      //         visible={visible}
      //         onClose={onClose}
      //       />
      //     </React.Fragment>
      //   ))}