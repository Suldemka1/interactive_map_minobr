const Programm = (params) => {
  return (
    <>
      {params.programm.length > 1 ? (
        <div>
          <div>
            <h3>Программы обучения</h3>
          </div>
          <div className="list">
            {params.programm.map((item, index) => (
              <div key={index} className="programm__list-item list-item">
                <div className="programm__list-item__name">
                  <p>{item.name}</p>
                </div>
                <div className="programm__list-item__age">
                  <p>Возраст {item.age}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Programm;
