const Activity = (params) => {
  return (
    <div className="details__info__body-activity">
      <div>
        <h3>Деятельность</h3>
      </div>
      <div className="list">
        {params.activity.map((item, index) => {
          if (item.item.length > 1) {
            return (
            <div className="list-item">
              <p key={index}>{item.item}</p>
            </div>
          );
          }
          else {
            return null
          }
        })}
      </div>
    </div>
  );
};

export default Activity;
