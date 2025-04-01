import "./style.css";
const MyComponent = () => {
  const strTest = "Lam Nguyen";
  return (
    <>
      <div> {strTest} Hoi dan it</div>
      <div className="child">child</div>
    </>
  );
};
export default MyComponent;
