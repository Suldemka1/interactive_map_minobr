const Features = (params) => {
  return (
    <div className="list">
      {params?.trosta === true && (
        <div className="list-item">
          <img src="/trosta.png" />
          <p>ТОЧКА РОСТА</p>
        </div>
      )}

      {params?.["cos"] === true && (
        <div className="list-item">
          <img src="/cos.png" />
          <p>Цифровая образовательная среда</p>
        </div>
      )}

      {params?.itcube === true && (
        <div className="list-item">
          <img src="/itcube.png" />
          <p>IT-Куб</p>
        </div>
      )}

      {params?.kvant === true && (
        <div className="list-item">
          <img src="/kvant.png" />
          <p>Кванториум</p>
        </div>
      )}
    </div>
  );
};

export default Features;
