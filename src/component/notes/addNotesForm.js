import './notes.css';

const AddNotesForm = (props) => {
  return(
    <form onSubmit={props.handleNotesSubmit}>
      <div className="form-outline mb-4">
        <label className="form-label">Title</label>
        <input type="text" name="username" className="form-control" value={props.title} onChange={(e) => props.setTitle(e.target.value)} required />
      </div>

      <div className="form-outline mb-4">
        <label className="form-label">Body</label>
        <textarea rows="18" name="description" className="form-control" value={props.description} onChange={(e) => props.setDescription(e.target.value)} required> </textarea>
      </div>
      <div style={{textAlign: "right"}}>
        <button type="submit" className="btn btn-primary btn-block mb-4">Save</button>
      </div>
    </form>
  )
}

export default AddNotesForm;