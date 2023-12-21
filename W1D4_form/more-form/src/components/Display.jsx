import Car from "./Car";
const Display = ({ cars }) => {
  return (
    <div>
      {cars.map((oneCar, idx) => {
        return <Car data={oneCar} key={idx} />;
      })}
    </div>
  );
};

export default Display;
