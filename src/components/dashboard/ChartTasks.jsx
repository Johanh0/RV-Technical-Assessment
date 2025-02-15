import { LineChart } from "@mui/x-charts/LineChart";

const ChartTasks = () => {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10], axis: { strokeWidth: 0 } }]} // Oculta el eje X
      yAxis={[{ axis: { strokeWidth: 0 } }]} // Oculta el eje Y
      series={[
        {
          data: [],
          //   area: true,
          color: "#41466e",
          showMark: false, // Oculta los puntos
          curve: "monotoneX", // Suaviza la curva
          fillOpacity: 0.2, // Ajustar transparencia del área
        },
      ]}
      //   width={500}
      height={250}
    />
  );
};

export default ChartTasks;
