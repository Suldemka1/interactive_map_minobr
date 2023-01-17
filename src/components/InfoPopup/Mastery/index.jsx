const Mastery = (params) => {
  return (
    <div className="mastery">
      <h3>В это учебном заведении есть мастерские:</h3>
      <div className="list">
        {params?.mastery?.map((item, index) => (
          <div className="list-item">
            <p key={index}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mastery;
