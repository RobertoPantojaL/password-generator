import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { FaCopy, FaSave, FaEye, FaEyeSlash } from "react-icons/fa"
import {
  Container,
  Card,
  Title,
  Input,
  Button,
  CheckboxGrid,
  CheckboxContainer,
  Checkbox,
  Grid,
  Loader,
  PasswordContainer,
  PasswordInput,
  IconButton,
} from "./styles"

const PasswordGenerator = ({ onPasswordSaved }) => {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(12)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [url, setUrl] = useState("")
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [note, setNote] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const generatePassword = useCallback(() => {
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
      alert("Por favor, seleccione al menos un tipo de carácter")
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      let charset = ""
      if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz"
      if (includeNumbers) charset += "0123456789"
      if (includeSymbols) charset += "!@#$%^&*()_+{}[]|:;<>,.?/~"

      let newPassword = ""
      for (let i = 0; i < length; i++) {
        newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
      }
      setPassword(newPassword)
      setIsLoading(false)
    }, 1000)
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    alert("Contraseña copiada al portapapeles")
  }

  const savePassword = () => {
    if (password && url && username) {
      const savedPasswords = JSON.parse(localStorage.getItem("savedPasswords") || "[]")
      savedPasswords.push({
        name: name || url,
        url,
        username,
        password,
        note: note || "",
      })
      localStorage.setItem("savedPasswords", JSON.stringify(savedPasswords))
      alert("Contraseña guardada exitosamente")

      setUrl("")
      setUsername("")
      setName("")
      setNote("")
      setPassword("")

      if (onPasswordSaved) {
        onPasswordSaved()
      }
    } else {
      alert("Por favor, complete los campos requeridos antes de guardar")
    }
  }

  return (
    <Container>
      <Card>
        <Title>Generador de Contraseñas</Title>

        <Grid>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Longitud de la contraseña</label>
            <Input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} min="4" max="50" />
          </div>
        </Grid>

        <CheckboxGrid>
          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              id="uppercase"
            />
            <label htmlFor="uppercase">Mayúsculas (A-Z)</label>
          </CheckboxContainer>

          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
              id="lowercase"
            />
            <label htmlFor="lowercase">Minúsculas (a-z)</label>
          </CheckboxContainer>

          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              id="numbers"
            />
            <label htmlFor="numbers">Números (0-9)</label>
          </CheckboxContainer>

          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              id="symbols"
            />
            <label htmlFor="symbols">Símbolos (!@#$%^&*)</label>
          </CheckboxContainer>
        </CheckboxGrid>

        <Button onClick={generatePassword} className="w-full mb-4">
          Generar Contraseña
        </Button>

        {isLoading ? (
          <Loader />
        ) : (
          password && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <PasswordContainer>
                <PasswordInput type={showPassword ? "text" : "password"} value={password} readOnly />
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </IconButton>
                <IconButton onClick={copyToClipboard}>
                  <FaCopy />
                </IconButton>
                <Button onClick={savePassword}>
                  <FaSave /> Guardar
                </Button>
              </PasswordContainer>
            </motion.div>
          )
        )}

        {password && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mt-6">
            <Title className="text-xl">Detalles de la Contraseña</Title>
            <Grid>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre (opcional)</label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej: Mi cuenta de correo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL del sitio *</label>
                <Input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Ej: google.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Usuario *</label>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Nombre de usuario"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nota (opcional)</label>
                <Input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Agregar una nota"
                />
              </div>
            </Grid>
          </motion.div>
        )}
      </Card>
    </Container>
  )
}

export default PasswordGenerator

