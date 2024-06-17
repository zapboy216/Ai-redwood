// App.tsx
import { CopilotKit } from '@copilotkit/react-core' // Import required components
import { CopilotSidebar } from '@copilotkit/react-ui'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import '@copilotkit/react-ui/styles.css' // Import the CSS for CopilotKit

import './index.css'

const App = () => (
  <CopilotKit url="api/copilotkit">
    <CopilotSidebar>
      <FatalErrorBoundary page={FatalErrorPage}>
        <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </RedwoodProvider>
      </FatalErrorBoundary>
    </CopilotSidebar>
  </CopilotKit>
)

export default App
