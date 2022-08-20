import Button from "./Button";
const Header = ({ title ,onAdd , showAddForm }) => {
  return (
    <header>
      <h1>Task tracker {title}</h1>
      <Button 
	 
	  color={ showAddForm ? "red" : "green" } 
	  onClick={onAdd}
	  text={ showAddForm ? "Close" : "Add" }  
	    />
    </header>
  );
};

export default Header;
