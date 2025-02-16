import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const ProgressBar = ({ eta, speed, onComplete, isDone }) => {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (isDone) {
      setCompleted(true);
      setProgress(100);
      return;
    }
    if (eta <= 0) return; // Si eta es 0 o menor, no hace nada

    setProgress(0); // Reiniciar progreso al cambiar eta
    setCompleted(false);

    const interval = 100 * speed; // Cada cuánto tiempo se actualizará la barra (ms)
    const increment = (100 / eta) * interval; // Cuánto se incrementará en cada actualización

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + increment;
        if (newProgress >= 100) {
          clearInterval(timer); // Detiene el intervalo al llegar a 100%
          onComplete();
          setCompleted(true); // Marcar como completado
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta o cambia eta
  }, [eta, speed, onComplete]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
      {/* Barra de progreso */}
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          flexGrow: 1,
          backgroundColor: "#d3ddf2",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#838fd1", // Cambia este color según necesites
          },
        }}
      />
      {/* Texto al lado de la barra */}
      <Typography variant="body2" color="text.secondary">
        {completed ? "Completed" : `${Math.round(progress)}%`}
      </Typography>
    </Box>
  );
};

export default ProgressBar;
