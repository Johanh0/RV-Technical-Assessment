import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

const ProgressBar = ({ eta, speed, onComplete, isDone }) => {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // If the robot task is done, don't run the animation again.
    if (isDone) {
      setCompleted(true);
      setProgress(100);
      return;
    }

    // If the time is less then 0 don't run the animation.
    if (eta < 0) return;

    setProgress(0);
    setCompleted(false);

    // Defines the time that is going to take update the progress bar
    const interval = 100 * speed;

    // Defines how much time needs to be added in the progress bar
    const increment = 100 / (eta / interval);

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + increment;
        if (newProgress >= 100) {
          // Stop the interval when is 100%
          clearInterval(timer);
          // Call a function that mark the task as completed
          onComplete();
          // Update the state
          setCompleted(true);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    // Clear the interval
    return () => clearInterval(timer);
  }, [eta, speed, onComplete]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          flexGrow: 1,
          backgroundColor: "#d3ddf2",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#838fd1",
          },
        }}
      />
      <Typography variant="body2" color="text.secondary">
        {completed ? "Completed" : `${Math.round(progress)}%`}
      </Typography>
    </Box>
  );
};

export default ProgressBar;
