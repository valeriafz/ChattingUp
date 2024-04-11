const GenderCheckBox = () => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointr`}>
          <span className="label-text text-gray-300">Female</span>
          <input type="checkbox" className="checkbox border-slate-300" />
        </label>
      </div>
      <div className="flex">
        <div className="form-control">
          <label className={`label gap-2 cursor-pointr`}>
            <span className="label-text text-gray-300">Male</span>
            <input type="checkbox" className="checkbox border-slate-300" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default GenderCheckBox;
