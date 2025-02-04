import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash, FaCopy, FaFileExport } from "react-icons/fa";
import {
  Container,
  Card,
  Title,
  Input,
  Button,
  Grid,
  PasswordContainer,
  PasswordInput,
  IconButton,
} from "./styles";

const SavedPasswords = ({ refresh }) => {
  const [savedPasswords, setSavedPasswords] = useState([]);
  const [showPasswords, setShowPasswords] = useState({});

  useEffect(() => {
    const passwords = JSON.parse(
      localStorage.getItem("savedPasswords") || "[]"
    );
    setSavedPasswords(passwords);
  }, []);

  const togglePasswordVisibility = (index) => {
    setShowPasswords((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password);
    alert("Contraseña copiada al portapapeles");
  };

  const downloadCSV = () => {
    const headers = ["name", "url", "username", "password", "note"];
    const csvContent = [
      headers.join(","),
      ...savedPasswords.map((item) =>
        [
          `"${item.name || ""}"`,
          `"${item.url || ""}"`,
          `"${item.username || ""}"`,
          `"${item.password || ""}"`,
          `"${item.note || ""}"`,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "passwords.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <Card>
        <div className="flex justify-between items-center mb-4">
          <Title>Contraseñas Guardadas</Title>
          <Button onClick={downloadCSV}>
            <FaFileExport /> Exportar CSV
          </Button>
        </div>
        {savedPasswords.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-6"
          >
            <Grid>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <Input value={item.name || item.url} readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL
                </label>
                <Input value={item.url} readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Usuario
                </label>
                <Input value={item.username} readOnly />
              </div>
            </Grid>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <PasswordContainer>
                <PasswordInput
                  type={showPasswords[index] ? "text" : "password"}
                  value={item.password}
                  readOnly
                />
                <IconButton onClick={() => togglePasswordVisibility(index)}>
                  {showPasswords[index] ? <FaEyeSlash /> : <FaEye />}
                </IconButton>
                <IconButton onClick={() => copyToClipboard(item.password)}>
                  <FaCopy />
                </IconButton>
              </PasswordContainer>
            </div>
            {item.note && (
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nota
                </label>
                <Input value={item.note} readOnly />
              </div>
            )}
            <div
              style={{
                height: "10px",
                backgroundColor: "#00686c",
                padding: "5px",
                width: "100%",
                margin: "10px",
                borderRadius: "5px",
              }}
            ></div>
          </motion.div>
        ))}
      </Card>
    </Container>
  );
};

export default SavedPasswords;
