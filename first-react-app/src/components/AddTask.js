import { useState } from 'react'


const AddTask = ( { onAdd } ) => {
	
	const [text,setText] = useState('')
	const [day,setDay] = useState('')
	const [reminder,setReminder] = useState(false)

	const onsubmit = (e) => 
	{
		e.preventDefault()
		if(!text)
			{
				alert('please add Task')
				return	
			}
			onAdd({text,day,reminder})
			console.log(reminder)
			setText('')
			setDay('')
			setReminder(false)
	}
	
  return (
  <div className="container">
  <form className="add-form mx-auto m-2 p-2 card" onSubmit = {onsubmit} >
      <div>
		  <strong>Task</strong>
		  <input type="text" placeholder="Add Task" className="form-control" value={text} onChange={(e)=> setText(e.target.value)}/>
	  </div>
	  <div >
		  <strong>Day & time</strong>
		  <input type="text" placeholder="Add day" className="form-control"
			 value={day} onChange={(e)=> setDay(e.target.value)}/>
	  </div>
	   <div>
		  <strong>Set reminder:</strong>
		  <input type="checkbox" placeholder="Set reminder" className="form-checkbox" checked={reminder}
		   value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked )}/>
	  </div>
	   <input type="submit" value="Save Task" className="btn btn-success" / >
  </form>
  </div>
  );
};

export default AddTask;
