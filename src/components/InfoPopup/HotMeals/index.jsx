const HotMeals = (params) => {
  return (
    <div className="details__info__body-hot-meals">
      <div>
        <h3>Информация об организации горячего питания</h3>
      </div>
      <div>{params.hot_meals}</div>
    </div>
  );
};

export default HotMeals;
