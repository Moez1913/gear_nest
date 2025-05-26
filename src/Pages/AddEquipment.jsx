import bg from '/assets/banner_1.jpg';

const AddEquipment = () => {
    return (
        <div>
          <div
  className="hero min-h-screen bg-slate-500"
 >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Add Equipment</h1>
      <p className="mb-5">Please fill out the form below to add new equipment.</p>
      <form className="space-y-4">
        <input type="text" placeholder="Equipment Name" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
        <input type="number" placeholder="Price" className="input input-bordered w-full max-w-xs" />
        <button className="btn btn-primary w-full">Add Equipment</button>
      </form>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default AddEquipment;