import { useState } from "react"
import PasswordGenerator from "./components/PasswordGenerator"
import SavedPasswords from "./components/SavedPasswords"
import { Nav, NavContainer, NavButton } from "./components/styles"
import Footer from "./components/Footer"

function App() {
  const [activeTab, setActiveTab] = useState("generator")
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const handlePasswordSaved = () => {
    setRefreshTrigger((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Nav>
        <NavContainer>
          <NavButton active={activeTab === "generator"} onClick={() => setActiveTab("generator")}>
            Generador
          </NavButton>
          <NavButton active={activeTab === "saved"} onClick={() => setActiveTab("saved")}>
            Contraseñas Guardadas
          </NavButton>
        </NavContainer>
      </Nav>

      <div className="flex-grow">
        {activeTab === "generator" ? (
          <PasswordGenerator onPasswordSaved={handlePasswordSaved} />
        ) : (
          <SavedPasswords refresh={refreshTrigger} />
        )}
      </div>

      <Footer />
    </div>
  )
}

export default App

